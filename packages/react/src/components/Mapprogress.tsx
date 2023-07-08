// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const Mapprogress: FC<IconProps> = ({
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
            aria-label={arialLabel || 'mapprogress icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12 2C6.47702 2 2 6.47702 2 12C2 17.523 6.47702 22 12 22C17.523 22 22 17.523 22 12C22 6.47702 17.523 2 12 2ZM12 19.4194C7.8996 19.4194 4.58065 16.1012 4.58065 12C4.58065 7.8996 7.89879 4.58065 12 4.58065C16.1004 4.58065 19.4194 7.89879 19.4194 12C19.4194 16.1004 16.1012 19.4194 12 19.4194ZM12 6.83871C9.1496 6.83871 6.83871 9.1496 6.83871 12C6.83871 14.8504 9.1496 17.1613 12 17.1613C14.8504 17.1613 17.1613 14.8504 17.1613 12C17.1613 9.1496 14.8504 6.83871 12 6.83871ZM12 14.5806C10.577 14.5806 9.41935 13.423 9.41935 12C9.41935 10.577 10.577 9.41935 12 9.41935C13.423 9.41935 14.5806 10.577 14.5806 12C14.5806 13.423 13.423 14.5806 12 14.5806Z"
                fill="inherit"
            />
        </svg>
    );
};
