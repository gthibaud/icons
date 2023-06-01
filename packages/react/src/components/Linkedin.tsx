// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const Linkedin: FC<IconProps> = ({
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
            style={{ display: 'inline', margin: '0px 0.3ch', ...style }}
            aria-label={arialLabel || 'linkedin icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M19.619 2H4.38095C3.06667 2 2 3.06667 2 4.38095V19.619C2 20.9333 3.06667 22 4.38095 22H19.619C20.9333 22 22 20.9333 22 19.619V4.38095C22 3.06667 20.9333 2 19.619 2ZM8.19048 9.61905V18.6667H5.33333V9.61905H8.19048ZM5.33333 6.98571C5.33333 6.31905 5.90476 5.80952 6.7619 5.80952C7.61905 5.80952 8.15714 6.31905 8.19048 6.98571C8.19048 7.65238 7.65714 8.19048 6.7619 8.19048C5.90476 8.19048 5.33333 7.65238 5.33333 6.98571ZM18.6667 18.6667H15.8095C15.8095 18.6667 15.8095 14.2571 15.8095 13.9048C15.8095 12.9524 15.3333 12 14.1429 11.981H14.1048C12.9524 11.981 12.4762 12.9619 12.4762 13.9048C12.4762 14.3381 12.4762 18.6667 12.4762 18.6667H9.61905V9.61905H12.4762V10.8381C12.4762 10.8381 13.3952 9.61905 15.2429 9.61905C17.1333 9.61905 18.6667 10.919 18.6667 13.5524V18.6667Z"
                fill="inherit"
            />
        </svg>
    );
};
