export const generateComponent = (iconName: string, svgSource: string): string => {
    return `// organize-imports-ignore
    import React, { FC } from 'react';
import { IconProps } from './../types';

export const ${iconName}: FC<IconProps> = ({
    size = 24,
    width,
    height,
    color,
    className,
    style,
    arialLabel,
}) => {
    return (
        ${svgSource}
    );
};
`;
};
