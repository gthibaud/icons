// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const BulbBold: FC<IconProps> = ({
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
            style={{ display: 'inline', margin: '0px 0.3ch', ...style }}
            aria-label={arialLabel || 'bulb-bold icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8.64744 17.4183H14.8781C15.3006 17.4183 15.6011 17.1259 15.6011 16.7035V15.5662C15.6011 13.6003 18.5256 12.4224 18.5256 8.67747C18.5256 4.70509 15.7961 1.99997 11.7587 1.99997C7.72949 1.99997 5 4.70509 5 8.67747C5 12.4224 7.92445 13.6003 7.92445 15.5662V16.7035C7.92445 17.1259 8.22502 17.4183 8.64744 17.4183ZM9.71162 15.4687C9.71162 12.8448 6.80341 11.7075 6.80341 8.68559C6.80341 5.75302 8.77742 3.8115 11.7587 3.8115C14.7482 3.8115 16.7222 5.75302 16.7222 8.68559C16.7222 11.7075 13.814 12.8448 13.814 15.4687V15.688H9.71162V15.4687ZM8.76117 19.8229H14.7644C15.2518 19.8229 15.6418 19.4167 15.6418 18.9455C15.6418 18.4744 15.2518 18.0601 14.7644 18.0601H8.76117C8.27376 18.0601 7.88383 18.4744 7.88383 18.9455C7.88383 19.4167 8.27376 19.8229 8.76117 19.8229ZM11.7587 22C13.0829 22 14.0252 21.3907 14.1227 20.4646H9.40292C9.49228 21.3907 10.4265 22 11.7587 22Z"
                fill="inherit"
            />
        </svg>
    );
};
