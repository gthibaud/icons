// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const ChevronRight: FC<IconProps> = ({
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
            aria-label={arialLabel || 'chevron-right icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M18.1614 11.9947C18.1614 12.3275 18.0977 12.6355 17.9703 12.9187C17.8428 13.1949 17.6375 13.4711 17.3542 13.7472L9.53691 21.4052C9.14746 21.8017 8.66596 22 8.09241 22C7.71712 22 7.37015 21.9044 7.05151 21.7132C6.73287 21.522 6.47796 21.2707 6.28678 20.9591C6.09559 20.6475 6 20.3006 6 19.9182C6 19.3447 6.23013 18.8313 6.69039 18.3781L13.2969 11.9841L6.69039 5.61126C6.23013 5.17224 6 4.65888 6 4.07116C6 3.69588 6.09559 3.35245 6.28678 3.04089C6.47796 2.72225 6.73287 2.47088 7.05151 2.28678C7.37015 2.09559 7.71712 2 8.09241 2C8.66596 2 9.14746 2.19472 9.53691 2.58417L17.3542 10.2422C17.6304 10.5183 17.8322 10.798 17.9596 11.0813C18.0871 11.3574 18.1544 11.6619 18.1614 11.9947Z"
                fill="inherit"
            />
        </svg>
    );
};
