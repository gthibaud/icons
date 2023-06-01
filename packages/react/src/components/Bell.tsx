// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const Bell: FC<IconProps> = ({
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
            aria-label={arialLabel || 'bell icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4.65351 18.0892H19.6094C20.6219 18.0892 21.2536 17.5039 21.2536 16.64C21.2536 15.6182 20.399 14.7636 19.5444 13.9833C18.8569 13.3516 18.7083 12.0046 18.5504 10.6391C18.3553 7.36925 17.3056 5.00975 14.9647 4.16442C14.556 2.92894 13.497 2 12.1314 2C10.7566 2 9.70692 2.92894 9.29819 4.16442C6.94798 5.00975 5.89828 7.36925 5.70321 10.6391C5.54529 12.0046 5.40595 13.3516 4.71853 13.9833C3.85462 14.7636 3 15.6182 3 16.64C3 17.5039 3.64097 18.0892 4.65351 18.0892ZM12.1314 22C13.8314 22 15.0669 20.8017 15.1876 19.399H9.06595C9.18672 20.8017 10.4315 22 12.1314 22Z"
                fill="inherit"
            />
        </svg>
    );
};
