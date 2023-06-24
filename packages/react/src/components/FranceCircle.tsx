// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const FranceCircle: FC<IconProps> = ({
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
            aria-label={arialLabel || 'france-circle icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                fill="#D9D9D9"
            />
            <path
                d="M4.2 6.25646L12 3.5L17.5 5L20 7V17.5L14.6667 20H9.33333L4.2 17.5"
                fill="#CE1126"
            />
            <path
                d="M4.2 6.25646L9.5 3L14.6667 4V20H9.33333L4.2 17.5"
                fill="white"
            />
            <path
                d="M4.2 6.25646L7 5L9.33333 4V20H6.66667L4.2 17.5"
                fill="#002654"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 19.8C16.3078 19.8 19.8 16.3078 19.8 12C19.8 7.69218 16.3078 4.2 12 4.2C7.69218 4.2 4.2 7.69218 4.2 12C4.2 16.3078 7.69218 19.8 12 19.8ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                fill="white"
            />
        </svg>
    );
};
