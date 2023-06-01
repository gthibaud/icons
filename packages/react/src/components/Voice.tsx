// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const Voice: FC<IconProps> = ({
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
            aria-label={arialLabel || 'voice icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M18.0357 18.1851C18.0357 19.3723 18.8694 20.2278 20.0094 20.2278C21.1578 20.2278 22 19.3723 22 18.1851V4.04278C22 2.86425 21.1578 2 20.0094 2C18.8694 2 18.0357 2.86425 18.0357 4.04278V18.1851ZM8.93322 15.6272C11.5449 15.959 14.2161 16.7883 16.7342 18.1414C16.7256 18.0454 16.7171 17.9494 16.7171 17.8533V4.37451C16.7171 4.3134 16.7256 4.23483 16.7256 4.17372C14.2841 5.50065 11.3407 6.40855 8.93322 6.67918V15.6272ZM5.87069 6.67918C3.36112 6.67918 2 8.04103 2 10.5203V11.7861C2 14.2654 3.36112 15.6185 5.87069 15.6185H7.62314V6.67918H5.87069ZM9.56274 22C10.7452 22 11.6385 21.0659 11.2897 19.6255L10.7112 17.1026C10.1242 16.8669 8.7886 16.7359 7.73373 16.7359H5.65802L7.39345 20.3588C7.89536 21.4064 8.44832 22 9.56274 22Z"
                fill="inherit"
            />
        </svg>
    );
};
