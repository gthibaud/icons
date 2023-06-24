// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const PlayFill: FC<IconProps> = ({
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
            aria-label={arialLabel || 'play-fill icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4.69927 22C4.21483 22 3.80865 21.8249 3.48072 21.4746C3.16024 21.1317 3 20.6585 3 20.0548V3.93404C3 3.33781 3.16024 2.86827 3.48072 2.52543C3.80865 2.17514 4.21483 2 4.69927 2C4.94522 2 5.18372 2.04099 5.41476 2.12297C5.6458 2.20496 5.8992 2.3242 6.17496 2.48072L19.4561 10.1833C19.9555 10.4666 20.3207 10.746 20.5517 11.0218C20.7827 11.2901 20.8983 11.6143 20.8983 11.9944C20.8983 12.382 20.7827 12.7099 20.5517 12.9782C20.3207 13.2465 19.9555 13.526 19.4561 13.8167L6.17496 21.5081C5.8992 21.6721 5.6458 21.795 5.41476 21.877C5.18372 21.959 4.94522 22 4.69927 22Z"
                fill="inherit"
            />
        </svg>
    );
};
