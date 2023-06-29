// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const BoatCircleFill: FC<IconProps> = ({
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
            aria-label={arialLabel || 'boat-circle-fill icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12 22C10.634 22 9.34641 21.7386 8.13725 21.2157C6.93464 20.6928 5.87255 19.9706 4.95098 19.049C4.02941 18.1275 3.30719 17.0654 2.78431 15.8627C2.26144 14.6536 2 13.366 2 12C2 10.634 2.26144 9.34967 2.78431 8.14706C3.30719 6.93791 4.02614 5.87255 4.94118 4.95098C5.86275 4.02941 6.92484 3.30719 8.12745 2.78431C9.3366 2.26144 10.6242 2 11.9902 2C13.3562 2 14.6438 2.26144 15.8529 2.78431C17.0621 3.30719 18.1275 4.02941 19.049 4.95098C19.9706 5.87255 20.6928 6.93791 21.2157 8.14706C21.7386 9.34967 22 10.634 22 12C22 13.366 21.7386 14.6536 21.2157 15.8627C20.6928 17.0654 19.9706 18.1275 19.049 19.049C18.1275 19.9706 17.0621 20.6928 15.8529 21.2157C14.6503 21.7386 13.366 22 12 22ZM8.20588 17.549H15.1863C15.3562 17.549 15.5065 17.5196 15.6373 17.4608C15.7745 17.402 15.902 17.3105 16.0196 17.1863L17.5588 15.4314C17.7222 15.2418 17.7549 15.0392 17.6569 14.8235C17.5588 14.6078 17.3725 14.5 17.098 14.5H12.3333V13.2353H13.8431C14.5882 13.2353 15.1732 13.049 15.598 12.6765C16.0294 12.2974 16.2451 11.7876 16.2451 11.1471C16.2451 10.683 16.134 10.2124 15.9118 9.73529C15.6961 9.25163 15.402 8.78105 15.0294 8.32353C14.6634 7.86601 14.2451 7.44444 13.7745 7.05882C13.3105 6.66667 12.8301 6.33333 12.3333 6.05882V5.55882C12.3333 5.43464 12.2876 5.33007 12.1961 5.2451C12.1046 5.15359 11.9967 5.10784 11.8725 5.10784C11.7418 5.10784 11.6307 5.15359 11.5392 5.2451C11.4542 5.33007 11.4118 5.43464 11.4118 5.55882V5.97059C11.4118 6.39542 11.3203 6.88889 11.1373 7.45098C10.9608 8.00654 10.7026 8.5817 10.3627 9.17647C10.0294 9.77124 9.63399 10.3431 9.17647 10.8922C8.71895 11.4346 8.21242 11.9052 7.65686 12.3039C7.5 12.4216 7.41503 12.5556 7.40196 12.7059C7.39542 12.8497 7.44118 12.9739 7.53922 13.0784C7.63725 13.183 7.76797 13.2353 7.93137 13.2353H11.4118V14.5H7.29412C7.05882 14.5 6.88562 14.5817 6.77451 14.7451C6.6634 14.902 6.64379 15.1013 6.71569 15.3431L7.16667 16.8431C7.23203 17.0654 7.34967 17.2386 7.51961 17.3627C7.68954 17.4869 7.9183 17.549 8.20588 17.549ZM12.3235 12.3725V7.02941C12.6307 7.32353 12.8922 7.7451 13.1078 8.29412C13.3301 8.84314 13.4412 9.41176 13.4412 10C13.4412 10.4575 13.3497 10.8987 13.1667 11.3235C12.9902 11.7484 12.7092 12.098 12.3235 12.3725Z"
                fill="inherit"
            />
        </svg>
    );
};