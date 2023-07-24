// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const Application: FC<IconProps> = ({
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
            aria-label={arialLabel || 'application icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6.57147 10.7857H14.0358V12.1428H6.57147V10.7857ZM6.57147 14.1785H15.3929V15.5357H6.57147V14.1785Z"
                fill="inherit"
            />
            <path
                d="M20.1429 3.99997H3.85714C3.49721 3.99997 3.15201 4.14295 2.8975 4.39747C2.64298 4.65198 2.5 4.99718 2.5 5.35711V18.9285C2.5 19.2885 2.64298 19.6337 2.8975 19.8882C3.15201 20.1427 3.49721 20.2857 3.85714 20.2857H20.1429C20.5028 20.2857 20.848 20.1427 21.1025 19.8882C21.357 19.6337 21.5 19.2885 21.5 18.9285V5.35711C21.5 4.99718 21.357 4.65198 21.1025 4.39747C20.848 4.14295 20.5028 3.99997 20.1429 3.99997V3.99997ZM20.1429 5.35711V6.71426H3.85714V5.35711H20.1429ZM3.85714 18.9285V8.0714H20.1429V18.9285H3.85714Z"
                fill="inherit"
            />
        </svg>
    );
};
