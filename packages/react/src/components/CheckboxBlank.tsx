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
                d="M6.45231 20.9908C5.35077 20.9908 4.49846 20.6923 3.89538 20.0954C3.29846 19.4985 3 18.6523 3 17.5569V6.43385C3 5.33846 3.29846 4.49231 3.89538 3.89538C4.49846 3.29846 5.35077 3 6.45231 3H17.5477C18.6492 3 19.4985 3.29846 20.0954 3.89538C20.6985 4.49231 21 5.33846 21 6.43385V17.5569C21 18.6523 20.6985 19.4985 20.0954 20.0954C19.4985 20.6923 18.6492 20.9908 17.5477 20.9908H6.45231ZM6.84 18.1385H17.16C17.4862 18.1385 17.7292 18.0615 17.8892 17.9077C18.0554 17.7477 18.1385 17.4954 18.1385 17.1508V6.84C18.1385 6.48923 18.0554 6.23692 17.8892 6.08308C17.7292 5.92923 17.4862 5.85231 17.16 5.85231H6.84C6.51385 5.85231 6.26769 5.92923 6.10154 6.08308C5.94154 6.23692 5.86154 6.48923 5.86154 6.84V17.1508C5.86154 17.4954 5.94154 17.7477 6.10154 17.9077C6.26769 18.0615 6.51385 18.1385 6.84 18.1385Z"
                fill="inherit"
            />
        </svg>
    );
};
