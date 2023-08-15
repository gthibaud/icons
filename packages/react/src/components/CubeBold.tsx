// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const CubeBold: FC<IconProps> = ({
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
            aria-label={arialLabel || 'cube-bold icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3.99127 18.106L10.5936 21.6272C11.5278 22.1242 12.462 22.1242 13.3962 21.6272L19.9895 18.106C20.4865 17.8425 20.8458 17.5371 21.0674 17.1897C21.289 16.8364 21.3998 16.3573 21.3998 15.7525V8.01838C21.3998 7.50338 21.295 7.06622 21.0854 6.70691C20.8758 6.3476 20.5344 6.04518 20.0613 5.79965L13.8812 2.48504C13.2884 2.16166 12.6596 1.99997 11.9949 1.99997C11.3301 1.99997 10.7014 2.16166 10.1085 2.48504L3.93737 5.79965C3.45829 6.04518 3.11396 6.3476 2.90436 6.70691C2.69476 7.06622 2.58997 7.50338 2.58997 8.01838V15.7525C2.58997 16.3573 2.70075 16.8364 2.92233 17.1897C3.1439 17.5371 3.50021 17.8425 3.99127 18.106ZM5.50036 16.0938C5.29676 15.986 5.15303 15.8663 5.06919 15.7345C4.98536 15.5968 4.94344 15.4291 4.94344 15.2315V9.43765L10.7642 12.5636V18.9773L5.50036 16.0938ZM18.4894 16.0938L13.2255 18.9773V12.5636L19.0463 9.43765V15.2315C19.0463 15.4291 19.0044 15.5968 18.9205 15.7345C18.8367 15.8663 18.693 15.986 18.4894 16.0938ZM11.9949 10.4168L6.29982 7.35366L11.1954 4.71275C11.7284 4.43129 12.2613 4.43129 12.7943 4.71275L17.6989 7.35366L11.9949 10.4168Z"
                fill="inherit"
            />
        </svg>
    );
};
