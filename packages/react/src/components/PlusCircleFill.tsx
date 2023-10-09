// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const PlusCircleFill: FC<IconProps> = ({
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
            aria-label={arialLabel || 'plus-circle-fill icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12 21.9904C10.6322 21.9904 9.3442 21.7283 8.13615 21.2042C6.92809 20.6865 5.86385 19.9674 4.94343 19.047C4.02301 18.1266 3.30074 17.0655 2.77661 15.8639C2.25887 14.6558 2 13.3647 2 11.9904C2 10.6226 2.25887 9.33781 2.77661 8.13615C3.30074 6.92809 4.01981 5.86385 4.93384 4.94343C5.85427 4.02301 6.9185 3.30393 8.12656 2.78619C9.33461 2.26206 10.6226 2 11.9904 2C13.3583 2 14.6462 2.26206 15.8543 2.78619C17.0687 3.30393 18.133 4.02301 19.047 4.94343C19.9674 5.86385 20.6897 6.92809 21.2138 8.13615C21.7379 9.33781 22 10.6226 22 11.9904C22 13.3647 21.7379 14.6558 21.2138 15.8639C20.6897 17.0655 19.9674 18.1266 19.047 19.047C18.133 19.9674 17.0719 20.6865 15.8639 21.2042C14.6558 21.7283 13.3678 21.9904 12 21.9904ZM7.3116 12C7.3116 12.294 7.40748 12.5369 7.59923 12.7287C7.79099 12.914 8.03707 13.0067 8.33749 13.0067H10.9837V15.6721C10.9837 15.9661 11.0796 16.209 11.2713 16.4008C11.4631 16.5925 11.706 16.6884 12 16.6884C12.294 16.6884 12.5369 16.5925 12.7287 16.4008C12.9268 16.209 13.0259 15.9661 13.0259 15.6721V13.0067H15.6817C15.9757 13.0067 16.2186 12.914 16.4104 12.7287C16.6085 12.5369 16.7076 12.294 16.7076 12C16.7076 11.6996 16.6117 11.4535 16.4199 11.2617C16.2282 11.07 15.9821 10.9741 15.6817 10.9741H13.0259V8.31831C13.0259 8.0179 12.9268 7.77181 12.7287 7.58006C12.5369 7.3883 12.294 7.29243 12 7.29243C11.706 7.29243 11.4631 7.3883 11.2713 7.58006C11.0796 7.77181 10.9837 8.0179 10.9837 8.31831V10.9741H8.33749C8.03707 10.9741 7.79099 11.07 7.59923 11.2617C7.40748 11.4535 7.3116 11.6996 7.3116 12Z"
                fill="inherit"
            />
        </svg>
    );
};
