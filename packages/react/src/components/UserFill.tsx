// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const UserFill: FC<IconProps> = ({
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
            aria-label={arialLabel || 'user-fill icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12 21.9904C10.6322 21.9904 9.3442 21.7283 8.13615 21.2042C6.92809 20.6865 5.86385 19.9674 4.94343 19.047C4.02301 18.1266 3.30074 17.0655 2.77661 15.8639C2.25887 14.6558 2 13.3647 2 11.9904C2 10.6226 2.25887 9.33781 2.77661 8.13615C3.30074 6.92809 4.01981 5.86385 4.93384 4.94343C5.85427 4.02301 6.9185 3.30393 8.12656 2.78619C9.33461 2.26206 10.6226 2 11.9904 2C13.3583 2 14.6462 2.26206 15.8543 2.78619C17.0687 3.30393 18.1329 4.02301 19.047 4.94343C19.9674 5.86385 20.6897 6.92809 21.2138 8.13615C21.7379 9.33781 22 10.6226 22 11.9904C22 13.3647 21.7379 14.6558 21.2138 15.8639C20.6897 17.0655 19.9674 18.1266 19.047 19.047C18.1329 19.9674 17.0719 20.6865 15.8639 21.2042C14.6558 21.7283 13.3678 21.9904 12 21.9904ZM11.9904 20.2359C12.6935 20.2359 13.403 20.14 14.1189 19.9482C14.8412 19.7565 15.5251 19.4784 16.1707 19.1141C16.8162 18.7562 17.3755 18.3215 17.8485 17.8102C17.4714 17.2413 16.9856 16.7651 16.3912 16.3816C15.8031 15.9917 15.1352 15.6977 14.3873 15.4995C13.6459 15.295 12.8469 15.1927 11.9904 15.1927C11.1339 15.1927 10.3317 15.295 9.58389 15.4995C8.83605 15.7041 8.1681 16.0013 7.58006 16.3912C6.9984 16.7811 6.51582 17.2541 6.13231 17.8102C6.6117 18.3215 7.17418 18.7562 7.81975 19.1141C8.46532 19.4784 9.14605 19.7565 9.86194 19.9482C10.5842 20.14 11.2937 20.2359 11.9904 20.2359ZM11.9904 13.5149C12.6296 13.5213 13.2017 13.3615 13.7066 13.0355C14.2116 12.7095 14.6143 12.2685 14.9147 11.7124C15.2151 11.1499 15.3653 10.5235 15.3653 9.83317C15.3653 9.17482 15.2151 8.57079 14.9147 8.02109C14.6143 7.4714 14.2084 7.03356 13.697 6.70757C13.1857 6.3752 12.6168 6.20901 11.9904 6.20901C11.364 6.20901 10.7951 6.3752 10.2838 6.70757C9.77245 7.03356 9.36657 7.4714 9.06616 8.02109C8.77213 8.57079 8.62512 9.17482 8.62512 9.83317C8.62512 10.5235 8.77213 11.1467 9.06616 11.7028C9.36657 12.2589 9.76926 12.6999 10.2742 13.0259C10.7856 13.3519 11.3576 13.5149 11.9904 13.5149Z"
                fill="inherit"
            />
        </svg>
    );
};
