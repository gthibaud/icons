// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const MicFill: FC<IconProps> = ({
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
            aria-label={arialLabel || 'mic-fill icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4.75 11.6264V9.97567C4.75 9.68028 4.85715 9.43122 5.07146 9.2285C5.29156 9.01998 5.5522 8.91573 5.85339 8.91573C6.15458 8.91573 6.41522 9.01998 6.63532 9.2285C6.85542 9.43122 6.96546 9.68028 6.96546 9.97567V11.5569C6.96546 12.5416 7.18267 13.3988 7.61707 14.1286C8.05727 14.8584 8.65675 15.426 9.41551 15.8315C10.1801 16.2311 11.0518 16.4309 12.0306 16.4309C13.0095 16.4309 13.8783 16.2311 14.6371 15.8315C15.4016 15.426 16.0011 14.8584 16.4355 14.1286C16.8757 13.3988 17.0958 12.5416 17.0958 11.5569V9.97567C17.0958 9.68028 17.2029 9.43122 17.4172 9.2285C17.6373 9.01998 17.9009 8.91573 18.2079 8.91573C18.509 8.91573 18.7668 9.01998 18.9811 9.2285C19.2012 9.43122 19.3113 9.68028 19.3113 9.97567V11.6264C19.3113 12.918 19.0419 14.0533 18.5033 15.0321C17.9704 16.0052 17.2348 16.7871 16.2965 17.3779C15.3582 17.9687 14.2837 18.3307 13.0732 18.4639V19.828H16.2009C16.5021 19.828 16.7627 19.9322 16.9828 20.1407C17.2087 20.3551 17.3217 20.6157 17.3217 20.9227C17.3217 21.2123 17.2087 21.4642 16.9828 21.6785C16.7627 21.8928 16.5021 22 16.2009 22H7.86034C7.55915 22 7.29561 21.8928 7.06972 21.6785C6.84962 21.4642 6.73957 21.2123 6.73957 20.9227C6.73957 20.6157 6.84962 20.3551 7.06972 20.1407C7.29561 19.9322 7.55915 19.828 7.86034 19.828H10.9881V18.4639C9.77751 18.3307 8.70308 17.9687 7.76477 17.3779C6.82646 16.7871 6.08797 16.0052 5.5493 15.0321C5.01643 14.0533 4.75 12.918 4.75 11.6264ZM12.0306 14.7454C11.4283 14.7454 10.8751 14.6035 10.3712 14.3197C9.86729 14.0359 9.46184 13.6392 9.15487 13.1295C8.85368 12.614 8.70308 12.0145 8.70308 11.331V5.41442C8.70308 4.73096 8.85368 4.13438 9.15487 3.62467C9.46184 3.11497 9.86729 2.71822 10.3712 2.4344C10.8751 2.1448 11.4283 2 12.0306 2C12.633 2 13.1861 2.1448 13.6901 2.4344C14.194 2.71822 14.5936 3.11787 14.889 3.63336C15.1902 4.14306 15.3408 4.73965 15.3408 5.42311V11.331C15.3408 12.0145 15.1902 12.614 14.889 13.1295C14.5936 13.6392 14.194 14.0359 13.6901 14.3197C13.1861 14.6035 12.633 14.7454 12.0306 14.7454Z"
                fill="inherit"
            />
        </svg>
    );
};
