// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const ChevronBottom: FC<IconProps> = ({
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
            aria-label={arialLabel || 'chevron-bottom icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.9945 18C12.4714 18 12.8819 17.8064 13.2479 17.4307L21.5563 8.68688C21.8447 8.39086 22 8.02653 22 7.5939C22 6.70585 21.3123 5.99997 20.4581 5.99997C20.0366 5.99997 19.6373 6.17075 19.3267 6.48953L12.0055 14.2315L4.67332 6.48953C4.36273 6.18213 3.97449 5.99997 3.54187 5.99997C2.68774 5.99997 2 6.70585 2 7.5939C2 8.02653 2.1553 8.39086 2.4437 8.69826L10.7521 17.4307C11.1403 17.8178 11.5286 18 11.9945 18Z"
                fill="inherit"
            />
        </svg>
    );
};
