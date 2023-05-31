import prettierConfig from '@owlgrid-dev/prettier-config';
import { exists, existsSync, mkdirSync, removeSync, writeFileSync } from 'fs-extra';
import { BuiltInParserName, format, LiteralUnion, Options } from 'prettier';

const getFolder = (path: string): string => {
    // Get folder path
    return path.split('/').slice(0, -1).join('/');
};

/**
 * Create folder if not exists
 * @param path Path
 */
const createFolderIfNotExists = (path: string) => {
    // Check that output path exists, create it else
    if (!existsSync(path)) {
        mkdirSync(path, { recursive: true });
    }
};

/**
 * Export a typescript file
 * @param data Typescript file content
 * @param outputPath Output path without extension
 * @param overwriteIfExists If true, overwrite the file if it already exists
 */
export const exportTsxFile = async (
    data: string,
    outputPath: string,
    overwriteIfExists: boolean = true,
) => {
    // Generate file path
    const path = `${outputPath}.tsx`;
    const folder = getFolder(path);

    // If the file already exists and we don't want to overwrite it, return
    if (!overwriteIfExists && (await exists(path))) {
        return;
    }

    // Check that output path exists, create it else
    createFolderIfNotExists(folder);

    // Export types to file
    writeFileSync(path, format(data, getConfig('typescript')));
};

/**
 * Generate the "option" parameter to configure prettier using the OwlGrid prettier configuration
 * @param parser Parser to use
 * @returns Prettier config
 */
const getConfig = (parser?: LiteralUnion<BuiltInParserName, string>) => {
    let config: Options = {};

    // Remove $schema from prettier config to make it
    const prettierInitialConfig: any = prettierConfig;
    delete prettierInitialConfig.$schema;

    // Add prettier config to final config
    config = { ...config, ...prettierInitialConfig };

    // Add parser if provided
    if (parser) {
        config.parser = parser;
    }

    // Return config
    return config;
};

export const cleanPath = async (path: string) => {
    // Delete folder
    removeSync(path);
};
