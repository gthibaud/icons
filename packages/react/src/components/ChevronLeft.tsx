// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const ChevronLeft: FC<IconProps> = ({
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
            aria-label={arialLabel || 'chevron-left icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6 11.9944C6 11.7986 6.03388 11.6179 6.10164 11.4523C6.17692 11.2867 6.28986 11.1286 6.44043 10.978L15.2377 2.37267C15.4937 2.12422 15.8024 2 16.1637 2C16.4122 2 16.6343 2.06023 16.83 2.18069C17.0333 2.29362 17.1952 2.44796 17.3156 2.6437C17.4361 2.83945 17.4963 3.06155 17.4963 3.30999C17.4963 3.66384 17.357 3.98005 17.0785 4.25861L9.15076 11.9944L17.0785 19.7301C17.357 20.0087 17.4963 20.3286 17.4963 20.69C17.4963 20.9309 17.4361 21.1493 17.3156 21.345C17.1952 21.5483 17.0333 21.7064 16.83 21.8193C16.6343 21.9398 16.4122 22 16.1637 22C15.8024 22 15.4937 21.872 15.2377 21.616L6.44043 13.0107C6.28986 12.8602 6.17692 12.7021 6.10164 12.5364C6.03388 12.3708 6 12.1901 6 11.9944Z"
                fill="inherit"
            />
        </svg>
    );
};
