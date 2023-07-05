// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const FilterCircle: FC<IconProps> = ({
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
            aria-label={arialLabel || 'filter-circle icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7 8.9C6.50294 8.9 6.1 9.30295 6.1 9.8C6.1 10.2971 6.50294 10.7 7 10.7H17C17.4971 10.7 17.9 10.2971 17.9 9.8C17.9 9.30295 17.4971 8.9 17 8.9H7Z"
                fill="inherit"
            />
            <path
                d="M8 11.7C7.50294 11.7 7.1 12.103 7.1 12.6C7.1 13.0971 7.50294 13.5 8 13.5H16C16.4971 13.5 16.9 13.0971 16.9 12.6C16.9 12.103 16.4971 11.7 16 11.7H8Z"
                fill="black"
            />
            <path
                d="M9.1 15.4C9.1 14.903 9.50294 14.5 10 14.5H14C14.4971 14.5 14.9 14.903 14.9 15.4C14.9 15.8971 14.4971 16.3 14 16.3H10C9.50294 16.3 9.1 15.8971 9.1 15.4Z"
                fill="black"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM19.8 12C19.8 16.3078 16.3078 19.8 12 19.8C7.69218 19.8 4.2 16.3078 4.2 12C4.2 7.69218 7.69218 4.2 12 4.2C16.3078 4.2 19.8 7.69218 19.8 12Z"
                fill="black"
            />
        </svg>
    );
};
