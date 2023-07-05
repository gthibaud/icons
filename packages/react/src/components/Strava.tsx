// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const Strava: FC<IconProps> = ({
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
            aria-label={arialLabel || 'strava icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10.5552 1L4.05005 13.5469H7.88355L10.5538 8.55838L13.2075 13.5469H17.0108L10.5552 1ZM17.0108 13.5469L15.1229 17.3364L13.2075 13.5469H10.3022L15.1229 23L19.9134 13.5469H17.0108Z"
                fill="inherit"
            />
        </svg>
    );
};
