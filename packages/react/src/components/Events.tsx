// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const Events: FC<IconProps> = ({
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
            aria-label={arialLabel || 'events icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M18.875 12H5.125C4.2962 12 3.50134 12.3292 2.91529 12.9153C2.32924 13.5013 2 14.2962 2 15.125V18.875C2 19.2854 2.08083 19.6917 2.23788 20.0709C2.39492 20.45 2.62511 20.7945 2.91529 21.0847C3.20547 21.3749 3.54997 21.6051 3.92911 21.7621C4.30826 21.9192 4.71462 22 5.125 22H18.875C19.2854 22 19.6917 21.9192 20.0709 21.7621C20.45 21.6051 20.7945 21.3749 21.0847 21.0847C21.3749 20.7945 21.6051 20.45 21.7621 20.0709C21.9192 19.6917 22 19.2854 22 18.875V15.125C22 14.7146 21.9192 14.3083 21.7621 13.9291C21.6051 13.55 21.3749 13.2055 21.0847 12.9153C20.7945 12.6251 20.45 12.3949 20.0709 12.2379C19.6917 12.0808 19.2854 12 18.875 12ZM19.5 18.875C19.5 19.0408 19.4342 19.1997 19.3169 19.3169C19.1997 19.4342 19.0408 19.5 18.875 19.5H5.125C4.95924 19.5 4.80027 19.4342 4.68306 19.3169C4.56585 19.1997 4.5 19.0408 4.5 18.875V15.125C4.5 14.9592 4.56585 14.8003 4.68306 14.6831C4.80027 14.5658 4.95924 14.5 5.125 14.5H18.875C19.0408 14.5 19.1997 14.5658 19.3169 14.6831C19.4342 14.8003 19.5 14.9592 19.5 15.125V18.875Z"
                fill="inherit"
            />
            <path
                d="M5.75 9.5H18.25C18.5815 9.5 18.8995 9.3683 19.1339 9.13388C19.3683 8.89946 19.5 8.58152 19.5 8.25C19.5 7.91848 19.3683 7.60054 19.1339 7.36612C18.8995 7.1317 18.5815 7 18.25 7H5.75C5.41848 7 5.10054 7.1317 4.86612 7.36612C4.6317 7.60054 4.5 7.91848 4.5 8.25C4.5 8.58152 4.6317 8.89946 4.86612 9.13388C5.10054 9.3683 5.41848 9.5 5.75 9.5Z"
                fill="inherit"
            />
            <path
                d="M7 3.25C7 3.58152 7.1317 3.89946 7.36612 4.13388C7.60054 4.3683 7.91848 4.5 8.25 4.5H15.75C16.0815 4.5 16.3995 4.3683 16.6339 4.13388C16.8683 3.89946 17 3.58152 17 3.25C17 2.91848 16.8683 2.60054 16.6339 2.36612C16.3995 2.1317 16.0815 2 15.75 2H8.25C7.91848 2 7.60054 2.1317 7.36612 2.36612C7.1317 2.60054 7 2.91848 7 3.25Z"
                fill="inherit"
            />
        </svg>
    );
};
