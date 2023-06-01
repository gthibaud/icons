// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const Facebook: FC<IconProps> = ({
    size = 24,
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
            style={{ display: 'inline', margin: '0px 3px', ...style }}
            aria-label={arialLabel || 'facebook icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12 2C6.4775 2 2 6.4775 2 12C2 17.0133 5.69333 21.1533 10.505 21.8767V14.65H8.03083V12.0217H10.505V10.2725C10.505 7.37667 11.9158 6.10583 14.3225 6.10583C15.475 6.10583 16.085 6.19167 16.3733 6.23V8.52417H14.7317C13.71 8.52417 13.3533 9.49333 13.3533 10.585V12.0217H16.3475L15.9417 14.65H13.3533V21.8975C18.2342 21.2358 22 17.0625 22 12C22 6.4775 17.5225 2 12 2Z"
                fill="inherit"
            />
        </svg>
    );
};
