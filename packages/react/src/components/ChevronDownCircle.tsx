// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const ChevronDownCircle: FC<IconProps> = ({
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
            aria-label={arialLabel || 'chevron-down-circle icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12.0048 22C10.6363 22 9.34772 21.7378 8.13909 21.2134C6.93046 20.6954 5.86571 19.976 4.94484 19.0552C4.02398 18.1343 3.30136 17.0727 2.77698 15.8705C2.25899 14.6619 2 13.3701 2 11.9952C2 10.6267 2.25899 9.34133 2.77698 8.13909C3.30136 6.93046 4.02078 5.86571 4.93525 4.94484C5.85612 4.02398 6.92086 3.30456 8.1295 2.78657C9.33813 2.26219 10.6267 2 11.9952 2C13.3637 2 14.6523 2.26219 15.8609 2.78657C17.0759 3.30456 18.1407 4.02398 19.0552 4.94484C19.976 5.86571 20.6986 6.93046 21.223 8.13909C21.7474 9.34133 22.0096 10.6267 22.0096 11.9952C22.0096 13.3701 21.7474 14.6619 21.223 15.8705C20.6986 17.0727 19.976 18.1343 19.0552 19.0552C18.1407 19.976 17.0791 20.6954 15.8705 21.2134C14.6619 21.7378 13.3733 22 12.0048 22ZM12.0048 19.8034C13.0855 19.8034 14.0959 19.6019 15.036 19.199C15.9824 18.7962 16.8137 18.2398 17.53 17.53C18.2462 16.8137 18.8058 15.9856 19.2086 15.0456C19.6115 14.0991 19.813 13.0823 19.813 11.9952C19.813 10.9145 19.6083 9.90408 19.199 8.96403C18.7962 8.01759 18.2366 7.18625 17.5204 6.47002C16.8106 5.7538 15.9824 5.19424 15.036 4.79137C14.0959 4.38849 13.0823 4.18705 11.9952 4.18705C10.9145 4.18705 9.90088 4.38849 8.95444 4.79137C8.01439 5.19424 7.18625 5.7538 6.47002 6.47002C5.76019 7.18625 5.20384 8.01759 4.80096 8.96403C4.40448 9.90408 4.20623 10.9145 4.20623 11.9952C4.20623 13.0823 4.40448 14.0991 4.80096 15.0456C5.20384 15.9856 5.76339 16.8137 6.47962 17.53C7.19584 18.2398 8.02398 18.7962 8.96403 19.199C9.91047 19.6019 10.9241 19.8034 12.0048 19.8034ZM13.0695 15.0264C12.8585 15.2566 12.6283 15.4069 12.3789 15.4772C12.1295 15.5476 11.8801 15.5476 11.6307 15.4772C11.3813 15.4005 11.1479 15.2502 10.9305 15.0264L7.32374 11.1703C7.15108 10.9912 7.06475 10.7834 7.06475 10.5468C7.06475 10.3102 7.14149 10.1151 7.29496 9.96163C7.46763 9.78257 7.67546 9.69305 7.91847 9.69305C8.16787 9.68665 8.3757 9.77298 8.54197 9.95204L12.0048 13.6355L15.458 9.95204C15.6307 9.77298 15.8353 9.68665 16.0719 9.69305C16.3149 9.69305 16.5292 9.78257 16.7146 9.96163C16.8745 10.1087 16.9512 10.3038 16.9448 10.5468C16.9384 10.7898 16.8521 11.0008 16.6859 11.1799L13.0695 15.0264Z"
                fill="inherit"
            />
        </svg>
    );
};
