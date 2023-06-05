// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const ArrowRight: FC<IconProps> = ({
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
            aria-label={arialLabel || 'arrow-right icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M13.8225 20.2C14.1183 20.2 14.4036 20.0838 14.6572 19.8408L21.6196 12.8783C21.8626 12.6458 22 12.3289 22 12.0119C22 11.6844 21.8626 11.3674 21.6196 11.135L14.6783 4.19364C14.4036 3.92951 14.1183 3.81329 13.8225 3.81329C13.1463 3.81329 12.6603 4.28873 12.6603 4.93321C12.6603 5.2713 12.7977 5.55656 13.009 5.76786L15.3862 8.17674L18.4501 10.9765L15.9989 10.8286H3.19387C2.486 10.8286 2 11.3146 2 12.0119C2 12.6987 2.486 13.1847 3.19387 13.1847H15.9989L18.4501 13.0367L15.3862 15.8365L13.009 18.2454C12.7977 18.4567 12.6603 18.742 12.6603 19.0801C12.6603 19.7245 13.1463 20.2 13.8225 20.2Z"
                fill="inherit"
            />
        </svg>
    );
};
