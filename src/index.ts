import path from 'path';
import { generateReactPackage } from './react/generate';

const ICONS_PATH = path.resolve('./icons/');
const REACT_PACKAGE_PATH = path.resolve('./packages/react/src/');

const main = async () => {
    await generateReactPackage(ICONS_PATH, REACT_PACKAGE_PATH);
};

main();
