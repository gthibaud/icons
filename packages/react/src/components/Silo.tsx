// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const Silo: FC<IconProps> = ({
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
            aria-label={arialLabel || 'silo icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M16.5455 6.72724H15.6364V5.81815C15.6364 4.81815 14.8182 3.99997 13.8182 3.99997H10.1818C9.18182 3.99997 8.36364 4.81815 8.36364 5.81815V6.72724H7.45455C4.44545 6.72724 2 9.1727 2 12.1818C2 15.1909 4.44545 17.6363 7.45455 17.6363V20.3636H9.27273V17.6363H14.7273V20.3636H16.5455V17.6363C19.5545 17.6363 22 15.1909 22 12.1818C22 9.1727 19.5545 6.72724 16.5455 6.72724ZM10.1818 5.81815H13.8182V6.72724H10.1818V5.81815ZM16.5455 15.8182H7.45455C5.44545 15.8182 3.81818 14.1909 3.81818 12.1818C3.81818 10.1727 5.44545 8.54542 7.45455 8.54542H16.5455C18.5545 8.54542 20.1818 10.1727 20.1818 12.1818C20.1818 14.1909 18.5545 15.8182 16.5455 15.8182Z"
                fill="inherit"
            />
        </svg>
    );
};
