// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const TimelineFill: FC<IconProps> = ({
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
            aria-label={arialLabel || 'timeline-fill icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 16C16.2091 16 18 14.2091 18 12C18 9.79086 16.2091 8 14 8C11.7909 8 10 9.79086 10 12C10 14.2091 11.7909 16 14 16ZM19 12C19 12.4137 18.9498 12.8156 18.8551 13.2H21C21.6628 13.2 22.2 12.6627 22.2 12C22.2 11.3373 21.6628 10.8 21 10.8H18.8551C18.9498 11.1844 19 11.5863 19 12ZM3.00005 13.2H9.14493C9.05023 12.8156 9 12.4137 9 12C9 11.5863 9.05023 11.1844 9.14493 10.8H3.00005C2.33731 10.8 1.80005 11.3373 1.80005 12C1.80005 12.6627 2.33731 13.2 3.00005 13.2Z"
                fill="inherit"
            />
        </svg>
    );
};
