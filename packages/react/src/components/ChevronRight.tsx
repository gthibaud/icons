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
                d="M17.4963 11.9944C17.4963 12.1901 17.4587 12.3708 17.3834 12.5364C17.3081 12.7021 17.1952 12.8602 17.0446 13.0107L8.24732 21.616C7.99887 21.872 7.69019 22 7.32129 22C7.08037 22 6.85827 21.9398 6.655 21.8193C6.45172 21.7064 6.28986 21.5483 6.1694 21.345C6.05647 21.1493 6 20.9309 6 20.69C6 20.3286 6.13552 20.0087 6.40655 19.7301L14.3343 11.9944L6.40655 4.25861C6.13552 3.98005 6 3.66384 6 3.30999C6 3.06155 6.05647 2.83945 6.1694 2.6437C6.28986 2.44796 6.45172 2.29362 6.655 2.18069C6.85827 2.06023 7.08037 2 7.32129 2C7.69019 2 7.99887 2.12422 8.24732 2.37267L17.0446 10.978C17.1952 11.1286 17.3081 11.2867 17.3834 11.4523C17.4587 11.6179 17.4963 11.7986 17.4963 11.9944Z"
                fill="inherit"
            />
        </svg>
    );
};
