// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const Eye: FC<IconProps> = ({
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
            aria-label={arialLabel || 'eye icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.9964 18.3476C18.0159 18.3476 22 13.5015 22 12.0238C22 10.5316 18.0087 5.69998 11.9964 5.69998C6.07099 5.69998 2 10.5316 2 12.0238C2 13.5015 6.06375 18.3476 11.9964 18.3476ZM11.9964 16.725C7.49801 16.725 3.99928 13.0162 3.99928 12.0238C3.99928 11.1835 7.49801 7.32258 11.9964 7.32258C16.4875 7.32258 20.0007 11.1835 20.0007 12.0238C20.0007 13.0162 16.4875 16.725 11.9964 16.725ZM12.0036 15.776C14.0898 15.776 15.7631 14.0665 15.7631 12.0238C15.7631 9.93033 14.0898 8.27151 12.0036 8.27151C9.91018 8.27151 8.22963 9.92309 8.23687 12.0238C8.24411 14.0665 9.91018 15.776 12.0036 15.776ZM11.9964 13.1973C11.3444 13.1973 10.8156 12.6612 10.8156 12.0238C10.8156 11.3718 11.3444 10.843 11.9964 10.843C12.6556 10.843 13.1844 11.3718 13.1844 12.0238C13.1844 12.6612 12.6556 13.1973 11.9964 13.1973Z"
                fill="inherit"
            />
        </svg>
    );
};
