// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const HomeRoundedFill: FC<IconProps> = ({
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
            aria-label={arialLabel || 'home-rounded-fill icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3.35135 11.9178V18.2447C3.35135 19.1334 4.07175 19.8538 4.9604 19.8538H8.1785C8.40067 19.8538 8.58077 19.6737 8.58077 19.4515V15.63C8.58077 13.7416 10.1116 12.2108 12 12.2108C13.8884 12.2108 15.4192 13.7416 15.4192 15.63V19.4515C15.4192 19.6737 15.5994 19.8538 15.8215 19.8538H19.0396C19.9283 19.8538 20.6486 19.1334 20.6486 18.2447V11.9178C20.6486 10.7037 20.1004 9.5546 19.1566 8.79085L14.5306 5.04705C13.0549 3.85277 10.9451 3.85277 9.46941 5.04705L4.84338 8.79085C3.89966 9.5546 3.35135 10.7037 3.35135 11.9178Z"
                fill="inherit"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.3807 3.9966C13.4093 2.40111 10.5907 2.40113 8.61928 3.9966ZM15.3807 3.9966L20.0067 7.74037C20.0067 7.74038 20.0066 7.74037 20.0067 7.74037C21.2675 8.76072 22 10.2959 22 11.9178V18.2447C22 19.8797 20.6746 21.2051 19.0396 21.2051H15.8215C14.8532 21.2051 14.0679 20.4202 14.0679 19.4515V15.63C14.0679 14.488 13.1421 13.5621 12 13.5621C10.8579 13.5621 9.93212 14.488 9.93212 15.63V19.4515C9.93212 20.4202 9.14689 21.2051 8.1785 21.2051H4.9604C3.32543 21.2051 2 19.8797 2 18.2447V11.9178C2 10.2959 2.7325 8.76073 3.99326 7.7404L8.61928 3.9966M13.6804 6.09748C12.7005 5.30443 11.2995 5.30442 10.3195 6.0975L5.6935 9.8413C5.06682 10.3485 4.7027 11.1116 4.7027 11.9178V18.2447C4.7027 18.3871 4.81806 18.5024 4.9604 18.5024H7.22942V15.63C7.22942 12.9953 9.36529 10.8594 12 10.8594C14.6347 10.8594 16.7706 12.9953 16.7706 15.63V18.5024H19.0396C19.1819 18.5024 19.2973 18.3871 19.2973 18.2447V11.9178C19.2973 11.1116 18.9332 10.3485 18.3065 9.84133L13.6804 6.09748Z"
                fill="inherit"
            />
        </svg>
    );
};