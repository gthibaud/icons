// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const FullScreenEnter: FC<IconProps> = ({
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
            aria-label={arialLabel || 'full-screen-enter icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M19.868 10.9567C20.1897 10.9567 20.4588 10.8516 20.6753 10.6414C20.8918 10.425 21 10.1561 21 9.83462V4.80835C21 4.23957 20.8423 3.79753 20.5268 3.48223C20.2052 3.16074 19.7598 3 19.1907 3H14.0598C13.732 3 13.4629 3.10819 13.2526 3.32457C13.0423 3.54096 12.9371 3.81298 12.9371 4.14065C12.9371 4.46213 13.0423 4.73107 13.2526 4.94745C13.4629 5.15765 13.732 5.26275 14.0598 5.26275H14.7186L17.4186 5.05873L15.3495 7.01546L12.7979 9.55641C12.6928 9.66151 12.6093 9.78516 12.5474 9.92736C12.4856 10.0634 12.4546 10.2087 12.4546 10.3632C12.4546 10.7094 12.566 10.9907 12.7887 11.2071C13.0113 11.4235 13.2959 11.5317 13.6423 11.5317C13.9639 11.5317 14.2299 11.4235 14.4402 11.2071L16.9825 8.65688L18.9402 6.58887L18.7454 9.25966V9.83462C18.7454 10.1623 18.8536 10.4312 19.0701 10.6414C19.2804 10.8516 19.5464 10.9567 19.868 10.9567ZM9.94948 21C10.2773 21 10.5464 20.8918 10.7567 20.6754C10.967 20.4652 11.0722 20.1963 11.0722 19.8686C11.0722 19.5471 10.967 19.2782 10.7567 19.0618C10.5464 18.8516 10.2773 18.7465 9.94948 18.7465H9.28144L6.58144 18.9413L8.65979 16.9845L11.2113 14.4436C11.3165 14.3385 11.4 14.2179 11.4619 14.0819C11.5237 13.9459 11.5546 13.8006 11.5546 13.6461C11.5546 13.2998 11.4433 13.0185 11.2206 12.8022C10.9918 12.5858 10.7072 12.4776 10.367 12.4776C10.0454 12.4776 9.77938 12.5858 9.56907 12.8022L7.0268 15.3524L5.06907 17.4204L5.2732 14.7496V14.1654C5.2732 13.8439 5.16495 13.5781 4.94845 13.3679C4.73196 13.1576 4.46289 13.0526 4.14124 13.0526C3.81959 13.0526 3.55052 13.1607 3.33402 13.3771C3.11134 13.5873 3 13.8501 3 14.1654V19.2009C3 19.7697 3.16082 20.2117 3.48247 20.527C3.79794 20.8423 4.2433 21 4.81856 21H9.94948Z"
                fill="inherit"
            />
        </svg>
    );
};
