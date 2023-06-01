// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const Cross: FC<IconProps> = ({
    size = '1em',
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
            style={{ display: 'inline', margin: '0px 0.3ch', ...style }}
            aria-label={arialLabel || 'cross icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3.48318 18.0653C2.84329 18.692 2.83023 19.8411 3.49624 20.507C4.16224 21.173 5.31142 21.1469 5.93824 20.5201L11.9975 14.4613L18.0569 20.507C18.7098 21.1599 19.8329 21.173 20.4989 20.494C21.1649 19.828 21.1649 18.7051 20.5119 18.0522L14.4657 12.0065L20.5119 5.94774C21.1649 5.29486 21.1649 4.1719 20.4989 3.50595C19.8329 2.82696 18.7098 2.84001 18.0569 3.4929L11.9975 9.5386L5.93824 3.47984C5.31142 2.85307 4.16224 2.82696 3.49624 3.4929C2.83023 4.15884 2.84329 5.30791 3.48318 5.94774L9.54248 12.0065L3.48318 18.0653Z"
                fill="inherit"
            />
        </svg>
    );
};
