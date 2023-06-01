// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const Plus: FC<IconProps> = ({
    size = 24,
    width,
    height,
    color,
    className,
    style,
    arialLabel,
}) => {
    return (
        <svg
            className={className}
            style={{ display: 'inline', margin: '0px 3px', ...style }}
            aria-label={arialLabel || 'plus icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.9941 22C12.8565 22 13.5653 21.2774 13.5653 20.4848V13.5501H20.4525C21.2794 13.5501 22 12.8508 22 12C22 11.1608 21.2794 10.4499 20.4525 10.4499H13.5653V3.51515C13.5653 2.6993 12.8565 2 11.9941 2C11.1435 2 10.4347 2.6993 10.4347 3.51515V10.4499H3.54755C2.74424 10.4499 2 11.1608 2 12C2 12.8508 2.74424 13.5501 3.54755 13.5501H10.4347V20.4848C10.4347 21.2774 11.1435 22 11.9941 22Z"
                fill="inherit"
            />
        </svg>
    );
};
