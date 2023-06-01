// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const PieChart: FC<IconProps> = ({
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
            aria-label={arialLabel || 'pieChart icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12.6816 10.865L20.335 6.47147C18.6699 3.9386 15.8754 2.20455 12.6816 1.99997V10.865ZM12 22C14.3466 22 16.5083 21.1719 18.222 19.8081L11.1918 12.9498C10.9873 12.7452 10.8997 12.5699 10.8997 12.2192V2.03894C5.91431 2.58448 2 6.83192 2 11.9854C2 17.4895 6.49854 22 12 22ZM19.5463 18.5221C21.0652 16.7686 22 14.4793 22 11.9854C22 10.5825 21.6982 9.25764 21.1821 8.04965L13.4021 12.5114L19.5463 18.5221Z"
                fill="inherit"
            />
        </svg>
    );
};
