import { generateReactPackage } from './react/generate';

const ICONS_PATH = './icons/';
const REACT_PACKAGE_PATH = './packages/react/src/';

const main = async () => {
    await generateReactPackage(ICONS_PATH, REACT_PACKAGE_PATH);
};

main();
