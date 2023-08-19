// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const ArrowRankingSame: FC<IconProps> = ({
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
            aria-label={arialLabel || 'arrow-ranking-same icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M5.25 3L5.25 21L18.75 12L5.25 3Z"
                fill="#D9D9D9"
            />
        </svg>
    );
};
