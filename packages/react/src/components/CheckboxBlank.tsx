// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const CheckboxBlank: FC<IconProps> = ({
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
            aria-label={arialLabel || 'checkbox-blank icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6.23542 20.9905C5.17922 20.9905 4.37434 20.7169 3.82078 20.1697C3.27359 19.6288 3 18.8367 3 17.7932V6.19724C3 5.15376 3.27359 4.36161 3.82078 3.82078C4.37434 3.27359 5.17922 3 6.23542 3H17.7646C18.8208 3 19.6225 3.27359 20.1697 3.82078C20.7232 4.36161 21 5.15376 21 6.19724V17.7932C21 18.8367 20.7232 19.6288 20.1697 20.1697C19.6225 20.7169 18.8208 20.9905 17.7646 20.9905H6.23542ZM6.40721 18.8717H17.5928C18.0064 18.8717 18.3245 18.7667 18.5472 18.5567C18.7699 18.3404 18.8812 18.0127 18.8812 17.5737V6.41675C18.8812 5.97773 18.7699 5.65323 18.5472 5.44327C18.3245 5.22694 18.0064 5.11877 17.5928 5.11877H6.40721C5.98727 5.11877 5.66596 5.22694 5.44327 5.44327C5.22694 5.65323 5.11877 5.97773 5.11877 6.41675V17.5737C5.11877 18.0127 5.22694 18.3404 5.44327 18.5567C5.66596 18.7667 5.98727 18.8717 6.40721 18.8717Z"
                fill="inherit"
            />
        </svg>
    );
};
