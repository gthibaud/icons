// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const HeartFill: FC<IconProps> = ({
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
            aria-label={arialLabel || 'heart-fill icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12 21.7742C12.3349 21.7742 12.8325 21.4871 13.2919 21.1809C18.5359 17.7455 22 13.6498 22 9.53494C22 5.74547 19.3493 3.20001 16.2105 3.20001C14.2488 3.20001 12.8325 4.28135 12 5.84116C11.1675 4.28135 9.7512 3.20001 7.78947 3.20001C4.64115 3.20001 2 5.74547 2 9.53494C2 13.6498 5.45455 17.7455 10.6986 21.1809C11.1675 21.4871 11.6651 21.7742 12 21.7742Z"
                fill="inherit"
            />
        </svg>
    );
};
