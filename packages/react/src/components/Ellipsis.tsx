// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const Ellipsis: FC<IconProps> = ({
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
            aria-label={arialLabel || 'ellipsis icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M5.04019 14.0804C4.66924 14.0804 4.32612 13.9876 4.01082 13.8022C3.7017 13.6167 3.4544 13.3694 3.26893 13.0603C3.08964 12.7512 3 12.4111 3 12.0402C3 11.6631 3.08964 11.3199 3.26893 11.0108C3.4544 10.7017 3.7017 10.4575 4.01082 10.2782C4.32612 10.0927 4.66924 10 5.04019 10C5.62133 10 6.10974 10.1978 6.50541 10.5935C6.90108 10.9892 7.09892 11.4714 7.09892 12.0402C7.09892 12.4111 7.00309 12.7512 6.81144 13.0603C6.62597 13.3694 6.37867 13.6167 6.06955 13.8022C5.76043 13.9876 5.41731 14.0804 5.04019 14.0804ZM12.0046 14.0804C11.6275 14.0804 11.2844 13.9876 10.9753 13.8022C10.6662 13.6167 10.4189 13.3694 10.2334 13.0603C10.0541 12.7512 9.96445 12.4111 9.96445 12.0402C9.96445 11.6631 10.0541 11.3199 10.2334 11.0108C10.4189 10.7017 10.6662 10.4575 10.9753 10.2782C11.2844 10.0927 11.6275 10 12.0046 10C12.5734 10 13.0525 10.1978 13.442 10.5935C13.8377 10.9892 14.0355 11.4714 14.0355 12.0402C14.0355 12.4111 13.9428 12.7512 13.7573 13.0603C13.5719 13.3694 13.3246 13.6167 13.0155 13.8022C12.7125 13.9876 12.3756 14.0804 12.0046 14.0804ZM18.9598 14.0804C18.5827 14.0804 18.2396 13.9876 17.9304 13.8022C17.6213 13.6167 17.374 13.3694 17.1886 13.0603C17.0031 12.7512 16.9104 12.4111 16.9104 12.0402C16.9104 11.6631 17.0031 11.3199 17.1886 11.0108C17.374 10.7017 17.6213 10.4575 17.9304 10.2782C18.2396 10.0927 18.5827 10 18.9598 10C19.5348 10 20.017 10.1978 20.4065 10.5935C20.8022 10.9892 21 11.4714 21 12.0402C21 12.4111 20.9073 12.7512 20.7218 13.0603C20.5363 13.3694 20.289 13.6167 19.9799 13.8022C19.6708 13.9876 19.3308 14.0804 18.9598 14.0804Z"
                fill="inherit"
            />
        </svg>
    );
};