// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const MinusCircleFill: FC<IconProps> = ({
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
            aria-label={arialLabel || 'minus-circle-fill icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12 21.9904C10.6322 21.9904 9.3442 21.7283 8.13615 21.2042C6.92809 20.6865 5.86385 19.9674 4.94343 19.047C4.02301 18.1266 3.30074 17.0655 2.77661 15.8639C2.25887 14.6558 2 13.3647 2 11.9904C2 10.6226 2.25887 9.33781 2.77661 8.13615C3.30074 6.92809 4.01981 5.86385 4.93384 4.94343C5.85427 4.02301 6.9185 3.30393 8.12656 2.78619C9.33461 2.26206 10.6226 2 11.9904 2C13.3583 2 14.6462 2.26206 15.8543 2.78619C17.0687 3.30393 18.1329 4.02301 19.047 4.94343C19.9674 5.86385 20.6897 6.92809 21.2138 8.13615C21.7379 9.33781 22 10.6226 22 11.9904C22 13.3647 21.7379 14.6558 21.2138 15.8639C20.6897 17.0655 19.9674 18.1266 19.047 19.047C18.1329 19.9674 17.0719 20.6865 15.8639 21.2042C14.6558 21.7283 13.3678 21.9904 12 21.9904ZM8.29914 13.0259H15.7009C16.0141 13.0259 16.2729 12.9332 16.4775 12.7478C16.682 12.5625 16.7843 12.3164 16.7843 12.0096C16.7843 11.6964 16.6852 11.4471 16.4871 11.2617C16.2889 11.0764 16.0268 10.9837 15.7009 10.9837H8.29914C7.97955 10.9837 7.71748 11.0764 7.51294 11.2617C7.3148 11.4471 7.21572 11.6964 7.21572 12.0096C7.21572 12.3164 7.31799 12.5625 7.52253 12.7478C7.72707 12.9332 7.98594 13.0259 8.29914 13.0259Z"
                fill="inherit"
            />
        </svg>
    );
};
