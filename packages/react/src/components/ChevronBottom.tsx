// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const ChevronBottom: FC<IconProps> = ({
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
            aria-label={arialLabel || 'chevron-bottom icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.9945 18C12.4714 18 12.8819 17.8065 13.2479 17.4307L21.5563 8.68691C21.8447 8.39089 22 8.02657 22 7.59393C22 6.70588 21.3123 6 20.4581 6C20.0366 6 19.6373 6.17078 19.3267 6.48956L12.0055 14.2315L4.67332 6.48956C4.36273 6.18216 3.97449 6 3.54187 6C2.68774 6 2 6.70588 2 7.59393C2 8.02657 2.1553 8.39089 2.4437 8.69829L10.7521 17.4307C11.1403 17.8178 11.5286 18 11.9945 18Z"
                fill="inherit"
            />
        </svg>
    );
};
