// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const Elevation: FC<IconProps> = ({
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
            aria-label={arialLabel || 'elevation icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 16.8957C2 17.7592 2.48355 18.26 3.30385 18.26H6.75777C10.4966 18.26 12.6985 15.9372 12.6985 11.9825C12.6985 8.02776 10.4966 5.79999 6.75777 5.79999H3.30385C2.48355 5.79999 2 6.30081 2 7.15565V16.8957ZM6.44692 16.1013H4.60771V7.95005H6.44692C8.74377 7.95005 10.039 9.38343 10.039 11.9911C10.039 14.6852 8.77831 16.1013 6.44692 16.1013ZM16.7214 15.2239C16.7214 15.8835 17.0972 16.29 17.7261 16.29C18.3473 16.29 18.7231 15.8835 18.7231 15.2239V13.0305H20.8015C21.4381 13.0305 21.8446 12.6624 21.8446 12.0488C21.8446 11.4429 21.4457 11.0748 20.8092 11.0748H18.7231V8.86603C18.7231 8.21413 18.3473 7.79999 17.7261 7.79999C17.1049 7.79999 16.7214 8.21413 16.7214 8.86603V11.0748H14.6277C13.9988 11.0748 13.6 11.4429 13.6 12.0488C13.6 12.6624 13.9988 13.0305 14.6277 13.0305H16.7214V15.2239Z"
                fill="inherit"
            />
        </svg>
    );
};
