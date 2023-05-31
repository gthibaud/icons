import { readdirSync, readFileSync } from 'fs';
import path from 'path';
import { cleanPath, exportTsxFile } from '../utils/file';
import { generateComponent } from './templates/component';
// tslint:disable-next-line
const upperCamelCase = require('uppercamelcase');

/**
 * Transforms the icons into React components
 */
export const generateReactPackage = async (iconsPath: string, packageReactPath: string) => {
    // Clean the package folder
    cleanPath(packageReactPath);

    // Extract the icons list from the icons folder
    const icons = await getIconsList(iconsPath);

    const componentNames: string[] = [];

    // For each icon:
    await Promise.all(
        icons.map(async (iconFileName) => {
            // Get the SVG code as string
            let iconSVGSource = await getSVGSource(iconsPath, iconFileName);

            // Add props to the SVG code
            iconSVGSource = iconSVGSource.replace('width="20"', 'width={props.width}');
            iconSVGSource = iconSVGSource.replace('height="20"', 'width={props.height}');
            iconSVGSource = iconSVGSource.replace('fill="black"', 'fill={props.color}');
            iconSVGSource = iconSVGSource.replace('fill="#000000"', 'fill={props.color}');

            // Generate the icon component name
            const iconName = iconFileName.split('.')[0];
            const componentName = upperCamelCase(iconName);

            // Generate the component code
            const componentCode = generateComponent(componentName, iconSVGSource);

            // Export the file
            await exportFile(componentName, componentCode, packageReactPath);

            // Add the component name to the list for the index.ts file
            componentNames.push(componentName);
        }),
    );

    // Add the index.ts file at the root of the package
    await exportIndexFile(componentNames, packageReactPath);
};

const getIconsList = async (iconsPath: string): Promise<string[]> => {
    return readdirSync(iconsPath);
};

const getSVGSource = async (filePath: string, fileName: string): Promise<string> => {
    return readFileSync(path.join(filePath, fileName), 'utf8');
};

const exportFile = async (
    componentName: string,
    componentCode: string,
    packageReactPath: string,
) => {
    exportTsxFile(
        componentCode,
        path.join(packageReactPath, 'components', `${componentName}`),
        true,
    );
};

const exportIndexFile = async (icons: string[], packageReactPath: string) => {
    // Generate the index file content
    const indexFileContent = generateIndexFileContent(icons);

    // Export the file
    await exportTsxFile(indexFileContent, path.join(packageReactPath, 'index'), true);
};

const generateIndexFileContent = (icons: string[]): string => {
    let indexFileContent = '';

    // Add the imports
    icons.forEach((icon) => {
        indexFileContent += `import { ${icon} } from './components/${icon}';\n`;
    });

    // Add the exports
    indexFileContent += `\nexport {\n`;
    icons.forEach((icon) => {
        indexFileContent += `    ${icon},\n`;
    });
    indexFileContent += `};\n`;

    return indexFileContent;
};
