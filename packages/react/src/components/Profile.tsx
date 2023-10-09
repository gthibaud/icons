// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const Profile: FC<IconProps> = ({
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
            aria-label={arialLabel || 'profile icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.4294 5.31666C22.0851 5.81507 22.1913 6.72404 21.6667 7.34692L13.9124 16.5532C13.5942 16.931 13.0979 17.1323 12.5906 17.0895C12.0832 17.0466 11.6321 16.7652 11.3891 16.34L9.1925 12.4969L4.75782 18.395C4.26974 19.0442 3.32014 19.1945 2.63683 18.7308C1.95351 18.2672 1.79525 17.365 2.28333 16.7159L8.13123 8.93822C8.43586 8.53306 8.93866 8.30552 9.46178 8.33607C9.98489 8.36663 10.4546 8.65097 10.7047 9.08853L12.9687 13.0497L19.2923 5.54204C19.8169 4.91916 20.7738 4.81826 21.4294 5.31666Z"
                fill="inherit"
            />
        </svg>
    );
};
