// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const Voice: FC<IconProps> = ({
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
            aria-label={arialLabel || 'voice icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M18.0357 18.185C18.0357 19.3723 18.8694 20.2278 20.0094 20.2278C21.1578 20.2278 22 19.3723 22 18.185V4.04271C22 2.86419 21.1578 1.99994 20.0094 1.99994C18.8694 1.99994 18.0357 2.86419 18.0357 4.04271V18.185ZM8.93322 15.6272C11.5449 15.9589 14.2161 16.7882 16.7342 18.1414C16.7256 18.0453 16.7171 17.9493 16.7171 17.8533V4.37445C16.7171 4.31334 16.7256 4.23477 16.7256 4.17366C14.2841 5.50059 11.3407 6.40849 8.93322 6.67912V15.6272ZM5.87069 6.67912C3.36112 6.67912 2 8.04097 2 10.5202V11.7861C2 14.2653 3.36112 15.6184 5.87069 15.6184H7.62314V6.67912H5.87069ZM9.56274 21.9999C10.7452 21.9999 11.6385 21.0658 11.2897 19.6254L10.7112 17.1025C10.1242 16.8668 8.7886 16.7359 7.73373 16.7359H5.65802L7.39345 20.3587C7.89536 21.4063 8.44832 21.9999 9.56274 21.9999Z"
                fill="inherit"
            />
        </svg>
    );
};
