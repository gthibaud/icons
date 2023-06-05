// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const Bell: FC<IconProps> = ({
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
            aria-label={arialLabel || 'bell icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4.65351 18.0891H19.6094C20.6219 18.0891 21.2536 17.5039 21.2536 16.64C21.2536 15.6182 20.399 14.7636 19.5444 13.9832C18.8569 13.3516 18.7083 12.0046 18.5504 10.6391C18.3553 7.36922 17.3056 5.00972 14.9647 4.16439C14.556 2.92891 13.497 1.99997 12.1314 1.99997C10.7566 1.99997 9.70692 2.92891 9.29819 4.16439C6.94798 5.00972 5.89828 7.36922 5.70321 10.6391C5.54529 12.0046 5.40595 13.3516 4.71853 13.9832C3.85462 14.7636 3 15.6182 3 16.64C3 17.5039 3.64097 18.0891 4.65351 18.0891ZM12.1314 22C13.8314 22 15.0669 20.8016 15.1876 19.3989H9.06595C9.18672 20.8016 10.4315 22 12.1314 22Z"
                fill="inherit"
            />
        </svg>
    );
};
