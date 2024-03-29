// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const Edit: FC<IconProps> = ({
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
            aria-label={arialLabel || 'edit icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M19.2809 7.09288L20.5369 5.83673C21.1367 5.23678 21.1555 4.53371 20.5837 3.95251L20.0495 3.4088C19.4777 2.8276 18.756 2.88384 18.1562 3.46504L16.9002 4.71182L19.2809 7.09288ZM6.40256 19.9731L18.1093 8.24592L15.738 5.87423L4.03122 17.5921L3.03769 20.2075C2.85961 20.6856 3.347 21.1262 3.77815 20.9668L6.40256 19.9731Z"
                fill="inherit"
            />
        </svg>
    );
};
