// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const FranceSquare: FC<IconProps> = ({
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
            aria-label={arialLabel || 'france square icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_24_26)">
                <path
                    d="M2 5H22V19H2"
                    fill="#CE1126"
                />
                <path
                    d="M2 5H15.3333V19H2"
                    fill="white"
                />
                <path
                    d="M2 5H8.66667V19H2"
                    fill="#002654"
                />
            </g>
            <defs>
                <clipPath id="clip0_24_26">
                    <rect
                        width="20"
                        height="14"
                        fill="white"
                        transform="translate(2 5)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};
