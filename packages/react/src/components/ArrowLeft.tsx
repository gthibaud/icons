// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const ArrowLeft: FC<IconProps> = ({
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
            aria-label={arialLabel || 'arrow-left icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10.1775 3.81332C9.88167 3.81332 9.59641 3.92954 9.34284 4.17254L2.38035 11.135C2.13735 11.3675 2 11.6844 2 12.0014C2 12.3289 2.13735 12.6459 2.38035 12.8783L9.32171 19.8197C9.59641 20.0838 9.88167 20.2 10.1775 20.2C10.8537 20.2 11.3397 19.7246 11.3397 19.0801C11.3397 18.742 11.2023 18.4567 10.991 18.2454L8.61384 15.8366L5.54992 13.0368L8.00106 13.1847H20.8061C21.514 13.1847 22 12.6987 22 12.0014C22 11.3146 21.514 10.8286 20.8061 10.8286H8.00106L5.54992 10.9766L8.61384 8.17677L10.991 5.76789C11.2023 5.55659 11.3397 5.27133 11.3397 4.93324C11.3397 4.28876 10.8537 3.81332 10.1775 3.81332Z"
                fill="inherit"
            />
        </svg>
    );
};
