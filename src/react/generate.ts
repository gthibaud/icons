import { existsSync, readdirSync, readFileSync } from 'fs';
import path from 'path';
import { cleanPath, exportFile, exportTsxFile } from '../utils/file';
import { generateComponent } from './templates/component';
import { generateLicence } from './templates/generateLicence';
import { generateTypes } from './templates/types';
import { generateTypescriptConfig } from './templates/typescript';
import { addPropsToSVG } from './props';
// tslint:disable-next-line
const upperCamelCase = require('uppercamelcase');

/**
 * Transforms the icons into React components
 */
export const generateReactPackage = async (iconsPath: string, packageReactPath: string) => {
    // Clean the package folder
    await cleanPath(packageReactPath);

    // Extract the icons list from the icons folder
    const icons = await getIconsList(iconsPath);

    const componentNames: string[] = [];

    // For each icon:
    for (const iconFileName of icons) {
        // Generate the icon component name
        const iconName = iconFileName.split('.')[0];
        const componentName = upperCamelCase(iconName);

        // Get the SVG code as string
        let iconSVGSource = await getSVGSource(iconsPath, iconFileName);

        // Add props to the SVG code
        iconSVGSource = addPropsToSVG(iconSVGSource, iconName);

        // Generate the component code
        const componentCode = generateComponent(componentName, iconSVGSource);

        // Check if the component name is unique
        await checkComponentNameUniqueness(componentName, packageReactPath);

        // Export the file
        await exportComponentFile(componentName, componentCode, packageReactPath);

        // Add the component name to the list for the index.ts file
        componentNames.push(componentName);
    }

    // Add the index.ts file at the root of the package
    await exportIndexFile(componentNames, packageReactPath);

    // Add the license file
    await exportFile(generateLicence(), path.join(packageReactPath, `../LICENSE`),
        true,
    );

    // Add the types file
    await exportFile(generateTypes(), path.join(packageReactPath, `types.d.ts`),
        true,
    );

    // Add the typescript config file
    await exportFile(generateTypescriptConfig(), path.join(packageReactPath, `../tsconfig.json`),
        true,
    );
};

const getIconsList = async (iconsPath: string): Promise<string[]> => {
    return readdirSync(iconsPath);
};

const getSVGSource = async (filePath: string, fileName: string): Promise<string> => {
    return readFileSync(path.join(filePath, fileName), 'utf8');
};

const exportComponentFile = async (
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

const checkComponentNameUniqueness = async (componentName: string, packageReactPath: string) => {
    const componentPath = path.join(packageReactPath, 'components', `${componentName}.tsx`);

    if (existsSync(componentPath)) {
        throw new Error(`The component "${componentName}" is not unique. Please rename it.`);
    }
};

const exportIndexFile = async (icons: string[], packageReactPath: string) => {
    // Generate the index file content
    const indexFileContent = generateIndexFileContent(icons);

    // Export the file
    await exportTsxFile(indexFileContent, path.join(packageReactPath, 'index'), true);
};

const generateIndexFileContent = (icons: string[]): string => {
    let indexFileContent = '';

    // Add the exports
    icons.forEach((icon) => {
        indexFileContent += `export { ${icon} } from './components/${icon}';\n`;
    });

    return indexFileContent;
};
