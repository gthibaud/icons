export const generateComponent = (iconName: string, svgSource: string): string => {
    return `import React from 'react';
import { IconProps } from './types';

export const ${iconName} = (props: IconProps) => {
    return (
        ${svgSource}
    );
};
`;
};
