// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const Check: FC<IconProps> = ({
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
            aria-label={arialLabel || 'check icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12.0052 22C17.4719 22 22 17.4719 22 11.9948C22 6.52811 17.4616 2 11.9948 2C6.52811 2 2 6.52811 2 11.9948C2 17.4719 6.53842 22 12.0052 22ZM10.6643 17.0387C10.3239 17.0387 10.0454 16.884 9.76689 16.5436L6.96132 13.0882C6.79629 12.9025 6.71377 12.6653 6.71377 12.4384C6.71377 11.9639 7.0851 11.5926 7.54925 11.5926C7.82775 11.5926 8.0753 11.6957 8.31253 12.0052L10.623 14.9758L15.1099 7.78649C15.3161 7.46674 15.574 7.31202 15.8525 7.31202C16.296 7.31202 16.7292 7.61114 16.7292 8.09593C16.7292 8.32285 16.6055 8.56008 16.4817 8.76637L11.5204 16.5333C11.3038 16.8736 11.015 17.0387 10.6643 17.0387Z"
                fill="inherit"
            />
        </svg>
    );
};
