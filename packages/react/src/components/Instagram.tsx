// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const Instagram: FC<IconProps> = ({
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
            aria-label={arialLabel || 'instagram icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.55556 2C4.48778 2 2 4.48778 2 7.55556V16.4444C2 19.5122 4.48778 22 7.55556 22H16.4444C19.5122 22 22 19.5122 22 16.4444V7.55556C22 4.48778 19.5122 2 16.4444 2H7.55556ZM18.6667 4.22222C19.28 4.22222 19.7778 4.72 19.7778 5.33333C19.7778 5.94667 19.28 6.44444 18.6667 6.44444C18.0533 6.44444 17.5556 5.94667 17.5556 5.33333C17.5556 4.72 18.0533 4.22222 18.6667 4.22222ZM12 6.44444C15.0678 6.44444 17.5556 8.93222 17.5556 12C17.5556 15.0678 15.0678 17.5556 12 17.5556C8.93222 17.5556 6.44444 15.0678 6.44444 12C6.44444 8.93222 8.93222 6.44444 12 6.44444ZM12 8.66667C11.1159 8.66667 10.2681 9.01786 9.64298 9.64298C9.01786 10.2681 8.66667 11.1159 8.66667 12C8.66667 12.8841 9.01786 13.7319 9.64298 14.357C10.2681 14.9821 11.1159 15.3333 12 15.3333C12.8841 15.3333 13.7319 14.9821 14.357 14.357C14.9821 13.7319 15.3333 12.8841 15.3333 12C15.3333 11.1159 14.9821 10.2681 14.357 9.64298C13.7319 9.01786 12.8841 8.66667 12 8.66667Z"
                fill="inherit"
            />
        </svg>
    );
};
