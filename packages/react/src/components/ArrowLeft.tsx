// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const ArrowLeft: FC<IconProps> = ({
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
            aria-label={arialLabel || 'arrow-left icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10.1775 3.81329C9.88167 3.81329 9.59641 3.92951 9.34284 4.17251L2.38035 11.135C2.13735 11.3674 2 11.6844 2 12.0014C2 12.3289 2.13735 12.6458 2.38035 12.8783L9.32171 19.8196C9.59641 20.0838 9.88167 20.2 10.1775 20.2C10.8537 20.2 11.3397 19.7245 11.3397 19.0801C11.3397 18.742 11.2023 18.4567 10.991 18.2454L8.61384 15.8365L5.54992 13.0367L8.00106 13.1847H20.8061C21.514 13.1847 22 12.6987 22 12.0014C22 11.3146 21.514 10.8286 20.8061 10.8286H8.00106L5.54992 10.9765L8.61384 8.17674L10.991 5.76786C11.2023 5.55656 11.3397 5.2713 11.3397 4.93321C11.3397 4.28873 10.8537 3.81329 10.1775 3.81329Z"
                fill="inherit"
            />
        </svg>
    );
};
