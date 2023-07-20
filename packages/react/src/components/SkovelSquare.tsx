// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const SkovelSquare: FC<IconProps> = ({
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
            aria-label={arialLabel || 'skovel-square icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10.7644 13.8433C10.5618 16.0438 8.5205 17.5494 5.76986 17.5494C3.10609 17.5494 1.32541 15.9569 1.51361 13.7709H4.24977C4.17739 14.654 4.94467 15.3055 6.07388 15.3055C6.98593 15.3055 7.6374 14.8712 7.68083 14.2486C7.75322 13.4958 6.85564 13.38 5.75539 13.2352C3.64174 12.9891 1.68734 12.4535 1.90449 10.0069C2.09269 7.87874 4.06157 6.45999 6.65296 6.45999C9.25883 6.45999 11.025 7.98008 10.8368 10.0793H8.21648C8.28887 9.28301 7.57949 8.70393 6.55162 8.70393C5.66852 8.70393 5.01706 9.10929 4.97363 9.65942C4.90124 10.3977 5.76986 10.5136 6.89907 10.6439C8.95481 10.861 10.9671 11.3967 10.7644 13.8433Z"
                fill="inherit"
            />
            <path
                d="M11.8304 17.1875L12.728 6.82192H15.8695L15.5221 10.7886L18.7939 6.82192H22.5L18.2293 11.7152L21.6314 17.1875H17.9253L15.3483 12.7575L14.9719 17.1875H11.8304Z"
                fill="black"
            />
        </svg>
    );
};
