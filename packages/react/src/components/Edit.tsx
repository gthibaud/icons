// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const Edit: FC<IconProps> = ({
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
            aria-label={arialLabel || 'edit icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M20.0899 6.54765L21.4854 5.15193C22.1519 4.48531 22.1728 3.70412 21.5375 3.05834L20.9439 2.45422C20.3086 1.80844 19.5067 1.87093 18.8402 2.51672L17.4447 3.90202L20.0899 6.54765ZM5.78062 20.859L18.7881 7.8288L16.1533 5.19359L3.1458 18.2134L2.04188 21.1194C1.84401 21.6506 2.38555 22.1402 2.86461 21.9631L5.78062 20.859Z"
                fill="inherit"
            />
        </svg>
    );
};
