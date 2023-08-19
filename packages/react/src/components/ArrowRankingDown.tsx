// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const ArrowRankingDown: FC<IconProps> = ({
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
            aria-label={arialLabel || 'arrow-ranking-down icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M20.9999 5.25H2.99988L11.9999 18.75L20.9999 5.25Z"
                fill="#D62F4D"
            />
        </svg>
    );
};
