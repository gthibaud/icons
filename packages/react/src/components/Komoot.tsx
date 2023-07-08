// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const Komoot: FC<IconProps> = ({
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
            aria-label={arialLabel || 'komoot icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10.1667 14.3575L12.0001 11.4992L13.8334 14.3575L18.8017 19.3258C16.9555 21.0473 14.5243 22.0032 12.0001 22C9.46422 22 7.05422 21.05 5.19839 19.3258L10.1667 14.3575ZM2.00005 12C2.00005 6.4875 6.48755 2 12.0001 2C17.5167 2 22.0001 6.4875 22.0001 12C22.0001 14.2192 21.2876 16.3125 19.9426 18.07L14.9276 13.055C15.0526 12.7117 15.1159 12.3558 15.1159 11.9967C15.115 11.1706 14.7864 10.3786 14.2023 9.79441C13.6182 9.21027 12.8262 8.88172 12.0001 8.88083C11.174 8.88172 10.3819 9.21027 9.7978 9.79441C9.21366 10.3786 8.8851 11.1706 8.88422 11.9967C8.88422 12.3558 8.94672 12.7117 9.07255 13.055L4.05755 18.07C2.71678 16.3312 1.99289 14.1957 2.00005 12Z"
                fill="inherit"
            />
        </svg>
    );
};
