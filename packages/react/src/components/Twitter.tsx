// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const Twitter: FC<IconProps> = ({
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
            aria-label={arialLabel || 'twitter icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M22 5.92371C21.2639 6.25062 20.4731 6.47061 19.6432 6.56984C20.4908 6.06217 21.1408 5.25835 21.4469 4.29993C20.6547 4.76991 19.7762 5.11143 18.8409 5.29604C18.0925 4.49838 17.0263 3.99994 15.8464 3.99994C13.5803 3.99994 11.7435 5.83756 11.7435 8.10286C11.7435 8.42439 11.7804 8.73822 11.8496 9.03744C8.43975 8.86668 5.41679 7.23289 3.39225 4.74991C3.03996 5.35604 2.83766 6.06063 2.83766 6.81368C2.83766 8.2367 3.56148 9.49281 4.66221 10.2282C3.98992 10.2066 3.35687 10.022 2.80382 9.7151C2.80382 9.7328 2.80382 9.74895 2.80382 9.76664C2.80382 11.755 4.21761 13.4134 6.09523 13.7896C5.75139 13.8834 5.38833 13.9334 5.01373 13.9334C4.74989 13.9334 4.49221 13.9073 4.24222 13.8603C4.76451 15.4903 6.27984 16.6771 8.07515 16.7102C6.67136 17.8109 4.9022 18.4671 2.97919 18.4671C2.64844 18.4671 2.32153 18.4478 2 18.4094C3.81608 19.5732 5.97216 20.2524 8.28976 20.2524C15.8372 20.2524 19.9632 14.0003 19.9632 8.57822C19.9632 8.40054 19.9593 8.22362 19.9516 8.04748C20.7539 7.46827 21.45 6.74599 22 5.92371Z"
                fill="inherit"
            />
        </svg>
    );
};
