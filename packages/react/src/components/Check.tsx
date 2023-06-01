// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const Check: FC<IconProps> = ({
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
            style={{ display: 'inline', margin: '0px 0.3ch', ...style }}
            aria-label={arialLabel || 'check icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12.0052 22C17.4719 22 22 17.4719 22 11.9948C22 6.52808 17.4616 1.99997 11.9948 1.99997C6.52811 1.99997 2 6.52808 2 11.9948C2 17.4719 6.53842 22 12.0052 22ZM10.6643 17.0386C10.3239 17.0386 10.0454 16.8839 9.76689 16.5435L6.96132 13.0882C6.79629 12.9025 6.71377 12.6653 6.71377 12.4383C6.71377 11.9639 7.0851 11.5925 7.54925 11.5925C7.82775 11.5925 8.0753 11.6957 8.31253 12.0051L10.623 14.9757L15.1099 7.78646C15.3161 7.4667 15.574 7.31199 15.8525 7.31199C16.296 7.31199 16.7292 7.61111 16.7292 8.0959C16.7292 8.32282 16.6055 8.56005 16.4817 8.76634L11.5204 16.5332C11.3038 16.8736 11.015 17.0386 10.6643 17.0386Z"
                fill="inherit"
            />
        </svg>
    );
};
