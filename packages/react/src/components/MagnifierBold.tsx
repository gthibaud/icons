// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const MagnifierBold: FC<IconProps> = ({
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
            aria-label={arialLabel || 'magnifier-bold icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2 9.95525C2 8.85927 2.20471 7.83259 2.61412 6.87519C3.02984 5.91149 3.60302 5.06431 4.33366 4.33366C5.06431 3.60302 5.90834 3.03299 6.86574 2.62357C7.82944 2.20786 8.86242 2 9.96469 2C11.0607 2 12.0874 2.20786 13.0448 2.62357C14.0085 3.03299 14.8556 3.60302 15.5863 4.33366C16.3169 5.06431 16.887 5.91149 17.2964 6.87519C17.7121 7.83259 17.9199 8.85927 17.9199 9.95525C17.9199 10.73 17.8129 11.4701 17.5987 12.1755C17.3846 12.881 17.0854 13.5298 16.7011 14.1218L20.452 17.8916C20.6347 18.0806 20.7701 18.2884 20.8583 18.5152C20.9528 18.7482 21 18.9907 21 19.2427C21 19.6017 20.9181 19.9261 20.7544 20.2158C20.5906 20.5056 20.3638 20.7355 20.0741 20.9055C19.7907 21.0756 19.4663 21.1606 19.1009 21.1606C18.8427 21.1606 18.5939 21.1134 18.3545 21.0189C18.1152 20.9307 17.9042 20.7953 17.7215 20.6126L13.9234 16.8145C13.3502 17.1609 12.7267 17.4318 12.0527 17.6271C11.385 17.8223 10.689 17.9199 9.96469 17.9199C8.86242 17.9199 7.82944 17.7152 6.86574 17.3058C5.90834 16.8901 5.06431 16.3169 4.33366 15.5863C3.60302 14.8556 3.02984 14.0116 2.61412 13.0542C2.20471 12.0905 2 11.0575 2 9.95525ZM4.69269 9.95525C4.69269 10.6859 4.82811 11.3693 5.09896 12.0055C5.3761 12.6416 5.75402 13.2022 6.23272 13.6872C6.71772 14.1659 7.2783 14.5438 7.91447 14.821C8.55064 15.0918 9.23405 15.2272 9.96469 15.2272C10.689 15.2272 11.3693 15.0918 12.0055 14.821C12.6416 14.5438 13.1991 14.1659 13.6778 13.6872C14.1628 13.2022 14.5407 12.6416 14.8115 12.0055C15.0887 11.3693 15.2272 10.6859 15.2272 9.95525C15.2272 9.2309 15.0887 8.55064 14.8115 7.91447C14.5407 7.2783 14.1628 6.72087 13.6778 6.24217C13.1991 5.75717 12.6416 5.37925 12.0055 5.1084C11.3693 4.83126 10.689 4.69269 9.96469 4.69269C9.23405 4.69269 8.55064 4.83126 7.91447 5.1084C7.2783 5.37925 6.71772 5.75717 6.23272 6.24217C5.75402 6.72087 5.3761 7.2783 5.09896 7.91447C4.82811 8.55064 4.69269 9.2309 4.69269 9.95525Z"
                fill="inherit"
            />
        </svg>
    );
};