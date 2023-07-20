// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const MountainFill: FC<IconProps> = ({
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
            aria-label={arialLabel || 'mountain-fill icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12 3C11.5385 3 11.3846 3.30909 11.0769 3.61818L2.15385 18.3C2 18.4545 2 18.7636 2 18.9182C2 19.6909 2.61538 20 3.07692 20H20.9231C21.5385 20 22 19.6909 22 18.9182C22 18.6091 22 18.6091 21.8462 18.3L13.0769 3.61818C12.7692 3.30909 12.4615 3 12 3ZM12 5.31818L17.0769 13.8182H15.8462L13.5385 11.5L12 13.8182L10.4615 11.5L8.15385 13.8182H6.76923L12 5.31818Z"
                fill="inherit"
            />
        </svg>
    );
};
