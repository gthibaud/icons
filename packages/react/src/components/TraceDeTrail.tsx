// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const TraceDeTrail: FC<IconProps> = ({
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
            aria-label={arialLabel || 'trace-de-trail icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.07108 19.2132C8.97633 23.1184 15.308 23.1184 19.2132 19.2132C23.1185 15.308 23.1185 8.97631 19.2132 5.07107C15.308 1.16582 8.97633 1.16582 5.07108 5.07107C1.16584 8.97631 1.16584 15.308 5.07108 19.2132ZM16.8824 10.1804C17.1166 9.47042 16.8665 8.86009 16.3314 8.338C15.7963 7.81591 15.0697 7.47334 14.3657 7.72502L6.94878 10.3767C5.9313 10.7404 5.8602 11.5858 6.22397 12.6033C6.58773 13.6208 7.24861 14.4251 8.26609 14.0613L11.5277 13.1417L10.6684 16.525C10.3299 17.5511 11.1929 18.2597 12.219 18.5983C13.2451 18.9369 14.0459 18.7772 14.3844 17.751L16.8824 10.1804Z"
                fill="inherit"
            />
        </svg>
    );
};
