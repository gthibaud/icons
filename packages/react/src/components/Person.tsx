// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const Person: FC<IconProps> = ({
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
            aria-label={arialLabel || 'person icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.9952 22C17.4761 22 22 17.476 22 12.0048C22 6.52389 17.4664 1.99997 11.9855 1.99997C6.51426 1.99997 2 6.52389 2 12.0048C2 17.476 6.52392 22 11.9952 22ZM17.8724 17.447C16.8478 16.3161 14.7405 15.3397 11.9952 15.3397C9.25955 15.3397 7.15225 16.3161 6.1276 17.4374C4.81295 16.0164 4.01063 14.1121 4.01063 12.0048C4.01063 7.56788 7.55824 4.00094 11.9855 4.00094C16.4224 4.00094 19.9894 7.56788 19.999 12.0048C19.999 14.1121 19.1967 16.0261 17.8724 17.447ZM11.9952 13.7544C13.8705 13.7738 15.3301 12.1691 15.3301 10.1005C15.3301 8.14787 13.8608 6.51423 11.9952 6.51423C10.1392 6.51423 8.66022 8.14787 8.66984 10.1005C8.67955 12.1691 10.1295 13.7448 11.9952 13.7544Z"
                fill="inherit"
            />
        </svg>
    );
};
