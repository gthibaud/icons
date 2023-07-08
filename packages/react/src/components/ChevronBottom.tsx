// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const ChevronBottom: FC<IconProps> = ({
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
            aria-label={arialLabel || 'chevron-bottom icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.9947 18.0807C12.3275 18.0807 12.6355 18.017 12.9187 17.8895C13.1949 17.7621 13.4711 17.5567 13.7472 17.2735L21.4052 9.45619C21.8017 9.06674 22 8.58524 22 8.01169C22 7.6364 21.9044 7.28944 21.7132 6.97079C21.522 6.65215 21.2707 6.39724 20.9591 6.20606C20.6475 6.01487 20.3006 5.91928 19.9182 5.91928C19.3447 5.91928 18.8313 6.14941 18.3781 6.60967L11.9841 13.2161L5.61126 6.60967C5.17224 6.14941 4.65888 5.91928 4.07116 5.91928C3.69588 5.91928 3.35245 6.01487 3.04089 6.20606C2.72225 6.39724 2.47088 6.65215 2.28678 6.97079C2.09559 7.28944 2 7.6364 2 8.01169C2 8.58524 2.19472 9.06674 2.58417 9.45619L10.2422 17.2735C10.5183 17.5497 10.798 17.7515 11.0813 17.8789C11.3574 18.0064 11.6619 18.0736 11.9947 18.0807Z"
                fill="inherit"
            />
        </svg>
    );
};
