// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const FilterCircleFill: FC<IconProps> = ({
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
            aria-label={arialLabel || 'filter-circle-fill icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM6.99998 8.89999C6.50292 8.89999 6.09998 9.30294 6.09998 9.79999C6.09998 10.2971 6.50292 10.7 6.99998 10.7H17C17.497 10.7 17.9 10.2971 17.9 9.79999C17.9 9.30294 17.497 8.89999 17 8.89999H6.99998ZM7.99998 11.7C7.50292 11.7 7.09998 12.1029 7.09998 12.6C7.09998 13.0971 7.50292 13.5 7.99998 13.5H16C16.497 13.5 16.9 13.0971 16.9 12.6C16.9 12.1029 16.497 11.7 16 11.7H7.99998ZM9.99998 14.5C9.50292 14.5 9.09998 14.9029 9.09998 15.4C9.09998 15.8971 9.50292 16.3 9.99998 16.3H14C14.497 16.3 14.9 15.8971 14.9 15.4C14.9 14.9029 14.497 14.5 14 14.5H9.99998Z"
                fill="inherit"
            />
        </svg>
    );
};
