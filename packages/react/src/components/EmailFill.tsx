// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const EmailFill: FC<IconProps> = ({
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
            aria-label={arialLabel || 'email-fill icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12.0043 12.7512C11.646 12.7512 11.2674 12.5519 10.8687 12.1531L3.26571 4.56746C3.59515 4.29582 4.14709 4.16 4.92154 4.16H18.9311C19.7691 4.16 20.3673 4.3016 20.7256 4.5848L13.14 12.1531C12.747 12.5519 12.3684 12.7512 12.0043 12.7512ZM2.26008 18.2476C2.08669 17.9412 2 17.4558 2 16.7911V7.19425C2 6.48337 2.10403 5.9661 2.31209 5.64245L8.64933 11.893L2.26008 18.2476ZM5.06025 19.834C4.19332 19.834 3.56336 19.678 3.17035 19.3659L9.66363 12.8986L10.1318 13.3668C10.7386 13.9505 11.3628 14.2424 12.0043 14.2424C12.6459 14.2424 13.27 13.9505 13.8769 13.3668L14.345 12.89L20.847 19.3659C20.4829 19.678 19.8934 19.834 19.0785 19.834H5.06025ZM21.7399 18.2476L15.3593 11.893L21.6879 5.65112C21.896 5.97477 22 6.48915 22 7.19425V16.7911C22 17.45 21.9133 17.9355 21.7399 18.2476Z"
                fill="inherit"
            />
        </svg>
    );
};
