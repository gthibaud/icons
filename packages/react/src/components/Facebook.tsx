// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const Facebook: FC<IconProps> = ({
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
            aria-label={arialLabel || 'facebook icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12 1.99997C6.4775 1.99997 2 6.47747 2 12C2 17.0133 5.69333 21.1533 10.505 21.8766V14.65H8.03083V12.0216H10.505V10.2725C10.505 7.37664 11.9158 6.1058 14.3225 6.1058C15.475 6.1058 16.085 6.19164 16.3733 6.22997V8.52414H14.7317C13.71 8.52414 13.3533 9.4933 13.3533 10.585V12.0216H16.3475L15.9417 14.65H13.3533V21.8975C18.2342 21.2358 22 17.0625 22 12C22 6.47747 17.5225 1.99997 12 1.99997Z"
                fill="inherit"
            />
        </svg>
    );
};
