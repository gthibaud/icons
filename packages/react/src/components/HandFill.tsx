// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const HandFill: FC<IconProps> = ({
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
            aria-label={arialLabel || 'hand-fill icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4.5 15.4712V6.64029C4.5 6.33453 4.60492 6.07674 4.81475 5.86691C5.02458 5.65707 5.28237 5.55216 5.58813 5.55216C5.88789 5.55216 6.14269 5.65707 6.35252 5.86691C6.56235 6.07674 6.66727 6.33453 6.66727 6.64029V12.1888C6.77518 12.1229 6.88909 12.057 7.00899 11.991C7.13489 11.9251 7.26379 11.8591 7.39568 11.7932V3.83453C7.39568 3.52878 7.5006 3.27398 7.71043 3.07014C7.92026 2.86031 8.17506 2.7554 8.47482 2.7554C8.77458 2.7554 9.02938 2.86031 9.23921 3.07014C9.44904 3.27398 9.55396 3.52878 9.55396 3.83453V11.1817C9.67986 11.1577 9.80576 11.1397 9.93165 11.1277C10.0576 11.1097 10.1835 11.0947 10.3094 11.0827V3.08813C10.3094 2.78237 10.4113 2.52458 10.6151 2.31475C10.8249 2.10492 11.0827 2 11.3885 2C11.6942 2 11.952 2.10492 12.1619 2.31475C12.3717 2.52458 12.4766 2.78237 12.4766 3.08813V11.1817C12.6025 11.2056 12.7254 11.2356 12.8453 11.2716C12.9652 11.3016 13.0821 11.3375 13.196 11.3795V4.35612C13.196 4.05036 13.298 3.79257 13.5018 3.58273C13.7116 3.3729 13.9694 3.26799 14.2752 3.26799C14.5809 3.26799 14.8357 3.3729 15.0396 3.58273C15.2494 3.79257 15.3543 4.05036 15.3543 4.35612V13.9065C15.3543 14.0504 15.3783 14.1493 15.4263 14.2032C15.4802 14.2512 15.5462 14.2752 15.6241 14.2752C15.69 14.2752 15.753 14.2512 15.8129 14.2032C15.8729 14.1553 15.9299 14.0653 15.9838 13.9335L17.2518 11.1906C17.4376 10.801 17.6415 10.5132 17.8633 10.3273C18.0911 10.1415 18.3639 10.0665 18.6817 10.1025C18.9634 10.1325 19.1823 10.2464 19.3381 10.4442C19.5 10.6361 19.5659 10.8729 19.536 11.1547C19.524 11.3225 19.476 11.5504 19.3921 11.8381C19.3141 12.1259 19.2212 12.4376 19.1133 12.7734C19.0114 13.1091 18.9125 13.4299 18.8165 13.7356C18.6966 14.1193 18.5647 14.53 18.4209 14.9676C18.277 15.4053 18.1181 15.8519 17.9442 16.3076C17.7764 16.7572 17.5875 17.1978 17.3777 17.6295C17.1739 18.0552 16.952 18.4478 16.7122 18.8076C16.0827 19.8747 15.3064 20.6721 14.3831 21.1996C13.4658 21.7332 12.3387 22 11.0018 22C10.0725 22 9.21223 21.8531 8.42086 21.5594C7.6295 21.2656 6.94005 20.8369 6.35252 20.2734C5.77098 19.7098 5.31535 19.0264 4.98561 18.223C4.66187 17.4137 4.5 16.4964 4.5 15.4712Z"
                fill="inherit"
            />
        </svg>
    );
};