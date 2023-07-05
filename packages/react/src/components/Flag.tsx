// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const Flag: FC<IconProps> = ({
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
            aria-label={arialLabel || 'flag icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4.34033 21.5C4.02617 21.5 3.756 21.3869 3.52981 21.1607C3.3099 20.9408 3.19995 20.6738 3.19995 20.3596V4.74306C3.19995 4.31581 3.2942 3.97338 3.48269 3.71577C3.67746 3.45817 3.94764 3.24769 4.29321 3.08433C4.57594 2.95866 4.85868 2.85185 5.14142 2.76389C5.42416 2.67593 5.73831 2.60995 6.08388 2.56597C6.42945 2.52199 6.82842 2.5 7.2808 2.5C8.11645 2.5 8.91126 2.58796 9.66523 2.76389C10.4192 2.93353 11.1606 3.13459 11.8894 3.36706C12.6183 3.59325 13.3534 3.79431 14.0948 3.97024C14.8362 4.14616 15.609 4.23413 16.4132 4.23413C17.0918 4.23413 17.6479 4.18386 18.0814 4.08333C18.5212 3.97652 18.9013 3.92312 19.2218 3.92312C19.6176 3.92312 19.938 4.04563 20.1831 4.29067C20.4344 4.53571 20.5601 4.85615 20.5601 5.25198V14.3656C20.5601 14.8117 20.469 15.1918 20.2868 15.506C20.1108 15.8201 19.8438 16.0589 19.4857 16.2222C19.2343 16.3416 18.9673 16.4453 18.6846 16.5332C18.4018 16.6149 18.0814 16.6809 17.7233 16.7312C17.3651 16.7751 16.9504 16.7971 16.4792 16.7971C15.6499 16.7971 14.8613 16.7092 14.1136 16.5332C13.366 16.3573 12.6308 16.1562 11.9083 15.9301C11.192 15.7039 10.46 15.5028 9.71235 15.3269C8.97095 15.151 8.18242 15.063 7.34678 15.063C6.88811 15.063 6.49856 15.1007 6.17813 15.1761C5.85769 15.2515 5.62522 15.308 5.48071 15.3457V20.3596C5.48071 20.6801 5.36761 20.9502 5.14142 21.1701C4.92151 21.39 4.65448 21.5 4.34033 21.5ZM16.3944 14.4504C16.8845 14.4504 17.2772 14.4033 17.5725 14.309C17.8741 14.2085 18.0751 14.1017 18.1756 13.9886V6.34524C17.9369 6.40807 17.6604 6.45833 17.3463 6.49603C17.0321 6.52745 16.6928 6.54315 16.3284 6.54315C15.4991 6.54315 14.7074 6.45833 13.9534 6.28869C13.1995 6.11276 12.4612 5.91171 11.7386 5.68552C11.0224 5.45933 10.303 5.26141 9.58041 5.09177C8.86414 4.91584 8.12274 4.82788 7.3562 4.82788C6.8724 4.82788 6.48285 4.88128 6.18755 4.9881C5.89853 5.09491 5.69747 5.20172 5.58438 5.30853V12.9707C5.80428 12.8953 6.07446 12.8388 6.39489 12.8011C6.71533 12.7634 7.05776 12.7445 7.42217 12.7445C8.28924 12.7445 9.10604 12.8325 9.87257 13.0084C10.6391 13.1781 11.3805 13.376 12.0968 13.6022C12.8193 13.8221 13.5325 14.02 14.2362 14.1959C14.9399 14.3656 15.6593 14.4504 16.3944 14.4504Z"
                fill="inherit"
            />
        </svg>
    );
};
