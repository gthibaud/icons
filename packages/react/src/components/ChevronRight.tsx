// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const ChevronRight: FC<IconProps> = ({
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
            aria-label={arialLabel || 'chevron-right icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M18 12.0055C18 11.5286 17.8065 11.1181 17.4307 10.7521L8.68691 2.44371C8.39089 2.1553 8.02657 2 7.59393 2C6.70588 2 6 2.68774 6 3.54188C6 3.96339 6.17078 4.36273 6.48956 4.67332L14.2315 11.9945L6.48956 19.3267C6.18216 19.6373 6 20.0255 6 20.4581C6 21.3123 6.70588 22 7.59393 22C8.02657 22 8.39089 21.8447 8.69829 21.5563L17.4307 13.2479C17.8178 12.8597 18 12.4714 18 12.0055Z"
                fill="inherit"
            />
        </svg>
    );
};
