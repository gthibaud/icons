// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const ChevronBottomMedium: FC<IconProps> = ({
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
            aria-label={arialLabel || 'chevron-bottom-medium icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12.0109 17.8668C11.4869 17.8668 11.0066 17.6521 10.5699 17.2227L2.49127 8.95852C2.33115 8.79112 2.20742 8.60917 2.12009 8.41266C2.04003 8.20888 2 7.99054 2 7.75764C2 7.43013 2.07642 7.13537 2.22926 6.87336C2.38937 6.60408 2.60044 6.39301 2.86245 6.24017C3.12445 6.08006 3.41558 6 3.73581 6C4.22344 6 4.65284 6.18559 5.02402 6.55677L12.4585 14.2096H11.5742L18.9869 6.55677C19.3581 6.18559 19.7838 6 20.2642 6C20.5844 6 20.8755 6.08006 21.1376 6.24017C21.3996 6.39301 21.607 6.60408 21.7598 6.87336C21.9199 7.13537 22 7.43013 22 7.75764C22 8.23071 21.8362 8.631 21.5087 8.95852L13.441 17.2227C13.2227 17.441 12.9971 17.6012 12.7642 17.7031C12.5313 17.8049 12.2802 17.8595 12.0109 17.8668Z"
                fill="inherit"
            />
        </svg>
    );
};
