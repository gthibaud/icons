// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const Application: FC<IconProps> = ({
    size = 24,
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
            style={{ display: 'inline', margin: '0px 3px', ...style }}
            aria-label={arialLabel || 'application icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6.57147 10.7857H14.0358V12.1428H6.57147V10.7857ZM6.57147 14.1786H15.3929V15.5357H6.57147V14.1786Z"
                fill="inherit"
            />
            <path
                d="M20.1429 4H3.85714C3.49721 4 3.15201 4.14298 2.8975 4.3975C2.64298 4.65201 2.5 4.99721 2.5 5.35714V18.9286C2.5 19.2885 2.64298 19.6337 2.8975 19.8882C3.15201 20.1427 3.49721 20.2857 3.85714 20.2857H20.1429C20.5028 20.2857 20.848 20.1427 21.1025 19.8882C21.357 19.6337 21.5 19.2885 21.5 18.9286V5.35714C21.5 4.99721 21.357 4.65201 21.1025 4.3975C20.848 4.14298 20.5028 4 20.1429 4V4ZM20.1429 5.35714V6.71429H3.85714V5.35714H20.1429ZM3.85714 18.9286V8.07143H20.1429V18.9286H3.85714Z"
                fill="black"
            />
        </svg>
    );
};
