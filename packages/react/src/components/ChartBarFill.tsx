// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const ChartBarFill: FC<IconProps> = ({
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
            aria-label={arialLabel || 'chart-bar-fill icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3.21625 15.4966V11.929C3.21625 11.6338 3.30258 11.3998 3.47526 11.2272C3.6535 11.0489 3.89023 10.9598 4.18544 10.9598H5.93165C6.2213 10.9598 6.45245 11.0489 6.62513 11.2272C6.80337 11.3998 6.89249 11.6338 6.89249 11.929V15.4966C6.89249 15.7918 6.80337 16.0285 6.62513 16.2068C6.45245 16.3795 6.2213 16.4658 5.93165 16.4658H4.18544C3.89023 16.4658 3.6535 16.3795 3.47526 16.2068C3.30258 16.0285 3.21625 15.7918 3.21625 15.4966ZM7.87003 15.4966V9.60627C7.87003 9.31662 7.95637 9.08547 8.12904 8.91279C8.30171 8.73455 8.53566 8.64543 8.83087 8.64543H10.5771C10.8667 8.64543 11.1007 8.73455 11.2789 8.91279C11.4572 9.08547 11.5463 9.31662 11.5463 9.60627V15.4966C11.5463 15.7918 11.4572 16.0285 11.2789 16.2068C11.1007 16.3795 10.8667 16.4658 10.5771 16.4658H8.83087C8.53566 16.4658 8.30171 16.3795 8.12904 16.2068C7.95637 16.0285 7.87003 15.7918 7.87003 15.4966ZM12.4737 15.4966V7.28355C12.4737 6.98834 12.56 6.7544 12.7327 6.58172C12.9054 6.40905 13.1393 6.32272 13.4345 6.32272H15.1891C15.4787 6.32272 15.7127 6.40905 15.8909 6.58172C16.0692 6.7544 16.1583 6.98834 16.1583 7.28355V15.4966C16.1583 15.7918 16.0692 16.0285 15.8909 16.2068C15.7127 16.3795 15.4787 16.4658 15.1891 16.4658H13.4345C13.1393 16.4658 12.9054 16.3795 12.7327 16.2068C12.56 16.0285 12.4737 15.7918 12.4737 15.4966ZM17.1108 15.4966V4.96919C17.1108 4.67398 17.1971 4.44003 17.3698 4.26736C17.548 4.08912 17.782 4 18.0716 4H19.8178C20.113 4 20.347 4.08912 20.5196 4.26736C20.6979 4.44003 20.787 4.67398 20.787 4.96919V15.4966C20.787 15.7918 20.6979 16.0285 20.5196 16.2068C20.347 16.3795 20.113 16.4658 19.8178 16.4658H18.0716C17.782 16.4658 17.548 16.3795 17.3698 16.2068C17.1971 16.0285 17.1108 15.7918 17.1108 15.4966ZM3.14941 20C2.84862 20 2.59519 19.9025 2.38909 19.7076C2.183 19.5126 2.07996 19.2592 2.07996 18.9473C2.07996 18.6409 2.183 18.3875 2.38909 18.1869C2.59519 17.992 2.84862 17.8945 3.14941 17.8945H20.8455C21.1518 17.8945 21.4081 17.992 21.6142 18.1869C21.8203 18.3875 21.9233 18.6409 21.9233 18.9473C21.9233 19.2592 21.8203 19.5126 21.6142 19.7076C21.4081 19.9025 21.1518 20 20.8455 20H3.14941Z"
                fill="inherit"
            />
        </svg>
    );
};
