// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const Share: FC<IconProps> = ({
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
            aria-label={arialLabel || 'share icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6.9338 22C5.97606 22 5.24621 21.7519 4.74427 21.2557C4.24809 20.7653 4 20.0441 4 19.0922V10.6629C4 9.71095 4.24809 8.98976 4.74427 8.49935C5.24621 8.00317 5.97606 7.75508 6.9338 7.75508H9.3743V9.68499H7.08957C6.70878 9.68499 6.41742 9.78307 6.21549 9.97923C6.01933 10.1696 5.92125 10.4639 5.92125 10.862V18.8931C5.92125 19.2912 6.01933 19.5883 6.21549 19.7845C6.41742 19.9807 6.70878 20.0788 7.08957 20.0788H16.7564C17.1314 20.0788 17.4199 19.9807 17.6218 19.7845C17.8237 19.5883 17.9247 19.2912 17.9247 18.8931V10.862C17.9247 10.4639 17.8237 10.1696 17.6218 9.97923C17.4199 9.78307 17.1314 9.68499 16.7564 9.68499H14.4803V7.75508H16.9208C17.8786 7.75508 18.6055 8.00317 19.1017 8.49935C19.6036 8.99553 19.8546 9.71672 19.8546 10.6629V19.0922C19.8546 20.0384 19.6036 20.7596 19.1017 21.2557C18.6055 21.7519 17.8786 22 16.9208 22H6.9338ZM11.9187 15.016C11.6763 15.016 11.4686 14.9295 11.2955 14.7564C11.1225 14.5833 11.0359 14.3785 11.0359 14.1419V5.53959L11.1138 4.26742L10.6119 4.91649L9.46949 6.13674C9.31372 6.30405 9.11755 6.38771 8.881 6.38771C8.66753 6.38771 8.48291 6.31848 8.32713 6.18001C8.17712 6.03577 8.10212 5.85403 8.10212 5.63479C8.10212 5.43286 8.18289 5.24823 8.34444 5.08092L11.235 2.3029C11.3561 2.18751 11.4715 2.10962 11.5811 2.06923C11.6908 2.02308 11.8033 2 11.9187 2C12.0398 2 12.1552 2.02308 12.2648 2.06923C12.3802 2.10962 12.4956 2.18751 12.611 2.3029L15.5015 5.08092C15.6631 5.24823 15.7438 5.43286 15.7438 5.63479C15.7438 5.85403 15.6659 6.03577 15.5102 6.18001C15.3544 6.31848 15.1727 6.38771 14.965 6.38771C14.7342 6.38771 14.5409 6.30405 14.3851 6.13674L13.2341 4.91649L12.7408 4.26742L12.81 5.53959V14.1419C12.81 14.3785 12.7235 14.5833 12.5504 14.7564C12.3831 14.9295 12.1725 15.016 11.9187 15.016Z"
                fill="inherit"
            />
        </svg>
    );
};