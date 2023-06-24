// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const PlayCircleFill: FC<IconProps> = ({
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
            aria-label={arialLabel || 'play-circle-fill icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12 22C10.634 22 9.34641 21.7386 8.13725 21.2157C6.93464 20.6928 5.87255 19.9706 4.95098 19.049C4.02941 18.1275 3.30719 17.0654 2.78431 15.8627C2.26144 14.6536 2 13.366 2 12C2 10.634 2.26144 9.34967 2.78431 8.14706C3.30719 6.93791 4.02614 5.87255 4.94118 4.95098C5.86275 4.02941 6.92484 3.30719 8.12745 2.78431C9.3366 2.26144 10.6242 2 11.9902 2C13.3562 2 14.6438 2.26144 15.8529 2.78431C17.0621 3.30719 18.1275 4.02941 19.049 4.95098C19.9706 5.87255 20.6928 6.93791 21.2157 8.14706C21.7386 9.34967 22 10.634 22 12C22 13.366 21.7386 14.6536 21.2157 15.8627C20.6928 17.0654 19.9706 18.1275 19.049 19.049C18.1275 19.9706 17.0621 20.6928 15.8529 21.2157C14.6503 21.7386 13.366 22 12 22ZM10.1373 15.951L15.902 12.5588C16.1111 12.4281 16.2124 12.2451 16.2059 12.0098C16.2059 11.7745 16.1046 11.5948 15.902 11.4706L10.1373 8.05882C9.92157 7.93464 9.69935 7.91503 9.47059 8C9.24183 8.08497 9.12745 8.24837 9.12745 8.4902V15.5196C9.12745 15.7614 9.23529 15.9314 9.45098 16.0294C9.6732 16.1209 9.90196 16.0948 10.1373 15.951Z"
                fill="inherit"
            />
        </svg>
    );
};
