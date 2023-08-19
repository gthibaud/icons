// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const ArrowRankingUp: FC<IconProps> = ({
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
            aria-label={arialLabel || 'arrow-ranking-up icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.99988 19.75H20.9999L11.9999 6.25L2.99988 19.75Z"
                fill="#68CC58"
            />
        </svg>
    );
};
