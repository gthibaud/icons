// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const ChevronRight: FC<IconProps> = ({
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
            style={{ display: 'inline', margin: '0px 0.4ch 1px 0.4ch', ...style }}
            aria-label={arialLabel || 'chevron-right icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M18 12.0055C18 11.5285 17.8065 11.1181 17.4307 10.752L8.68691 2.44368C8.39089 2.15527 8.02657 1.99997 7.59393 1.99997C6.70588 1.99997 6 2.68771 6 3.54184C6 3.96336 6.17078 4.3627 6.48956 4.67329L14.2315 11.9944L6.48956 19.3266C6.18216 19.6372 6 20.0255 6 20.4581C6 21.3122 6.70588 22 7.59393 22C8.02657 22 8.39089 21.8447 8.69829 21.5563L17.4307 13.2479C17.8178 12.8596 18 12.4714 18 12.0055Z"
                fill="inherit"
            />
        </svg>
    );
};
