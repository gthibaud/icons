// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const DocumentTextFill: FC<IconProps> = ({
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
            aria-label={arialLabel || 'document-text-fill icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8.43119 14.8716H15.5505C15.7462 14.8716 15.9113 14.8073 16.0459 14.6789C16.1804 14.5505 16.2477 14.3853 16.2477 14.1835C16.2477 13.9939 16.1804 13.8349 16.0459 13.7064C15.9113 13.5719 15.7462 13.5046 15.5505 13.5046H8.43119C8.22936 13.5046 8.06116 13.5719 7.92661 13.7064C7.79816 13.8349 7.73394 13.9939 7.73394 14.1835C7.73394 14.3853 7.79816 14.5505 7.92661 14.6789C8.06116 14.8073 8.22936 14.8716 8.43119 14.8716ZM8.43119 18.2936H15.5505C15.7462 18.2936 15.9113 18.2294 16.0459 18.1009C16.1804 17.9664 16.2477 17.8043 16.2477 17.6147C16.2477 17.419 16.1804 17.2569 16.0459 17.1284C15.9113 16.9939 15.7462 16.9266 15.5505 16.9266H8.43119C8.22936 16.9266 8.06116 16.9939 7.92661 17.1284C7.79816 17.2569 7.73394 17.419 7.73394 17.6147C7.73394 17.8043 7.79816 17.9664 7.92661 18.1009C8.06116 18.2294 8.22936 18.2936 8.43119 18.2936ZM7.08257 22C6.07339 22 5.30581 21.737 4.77982 21.211C4.25994 20.685 4 19.9144 4 18.8991V5.11009C4 4.10092 4.25994 3.33028 4.77982 2.79817C5.30581 2.26606 6.07339 2 7.08257 2H11.2569V9.09174C11.2569 10.2171 11.8165 10.7798 12.9358 10.7798H19.9633V18.8991C19.9633 19.9144 19.7003 20.685 19.1743 21.211C18.6483 21.737 17.8838 22 16.8807 22H7.08257ZM13.2018 9.36697C12.841 9.36697 12.6606 9.1896 12.6606 8.83486V2.09174C12.8807 2.11621 13.1009 2.20795 13.3211 2.36697C13.5413 2.51988 13.7706 2.71865 14.0092 2.9633L18.9908 8C19.2416 8.25688 19.4434 8.49541 19.5963 8.7156C19.7492 8.93578 19.841 9.15291 19.8716 9.36697H13.2018Z"
                fill="inherit"
            />
        </svg>
    );
};
