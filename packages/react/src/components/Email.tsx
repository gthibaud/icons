// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const Email: FC<IconProps> = ({
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
            aria-label={arialLabel || 'email icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4.98678 19.8564H19.207C20.0881 19.8564 20.7724 19.6038 21.2599 19.0987C21.7533 18.5994 22 17.8652 22 16.896V7.15152C22 6.18823 21.7474 5.45696 21.2423 4.95769C20.7372 4.45255 19.9941 4.19998 19.0132 4.19998H4.79295C3.91189 4.19998 3.22467 4.45255 2.73128 4.95769C2.24376 5.45696 2 6.18823 2 7.15152V16.896C2 17.8652 2.25257 18.5994 2.75771 19.0987C3.26872 19.6038 4.01175 19.8564 4.98678 19.8564ZM5.02203 18.0061C4.63436 18.0061 4.33774 17.9092 4.13216 17.7154C3.92658 17.5157 3.82379 17.2103 3.82379 16.7991V7.24844C3.82379 6.84315 3.92658 6.54359 4.13216 6.34976C4.33774 6.15006 4.63436 6.0502 5.02203 6.0502H18.9868C19.3686 6.0502 19.6623 6.15006 19.8678 6.34976C20.0734 6.54359 20.1762 6.84609 20.1762 7.25725V16.8079C20.1762 17.2132 20.0734 17.5157 19.8678 17.7154C19.6623 17.9092 19.3686 18.0061 18.9868 18.0061H5.02203ZM12.0088 14.4555C12.3495 14.4555 12.6814 14.385 13.0044 14.244C13.3275 14.0972 13.6505 13.8622 13.9736 13.5392L21.0132 6.61408L19.859 5.44227L12.978 12.244C12.7959 12.4202 12.6285 12.5495 12.4758 12.6317C12.3231 12.7139 12.1674 12.755 12.0088 12.755C11.8561 12.755 11.7034 12.7139 11.5507 12.6317C11.3979 12.5436 11.2305 12.4144 11.0485 12.244L4.14097 5.42465L2.97797 6.58765L10.0441 13.5392C10.3671 13.8622 10.6902 14.0972 11.0132 14.244C11.3363 14.385 11.6681 14.4555 12.0088 14.4555ZM19.7269 18.4114L20.8899 17.2396L15.3128 11.7154L14.1498 12.8696L19.7269 18.4114ZM3.12775 17.2396L4.29075 18.4114L9.87665 12.8696L8.70485 11.7154L3.12775 17.2396Z"
                fill="inherit"
            />
        </svg>
    );
};
