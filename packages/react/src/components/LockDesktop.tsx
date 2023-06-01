// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const LockDesktop: FC<IconProps> = ({
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
            aria-label={arialLabel || 'lock-desktop icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3.26524 18.4489C2.55848 18.4489 2.00275 18.2496 1.59802 17.8509C1.19934 17.4462 1 16.8874 1 16.1746V5.26524C1 4.55244 1.19934 3.99671 1.59802 3.59802C2.00275 3.19934 2.55848 3 3.26524 3H20.7348C21.4415 3 21.9942 3.19934 22.3929 3.59802C22.7976 3.99671 23 4.55244 23 5.26524V16.1746C23 16.8874 22.7976 17.4462 22.3929 17.8509C21.9942 18.2496 21.4415 18.4489 20.7348 18.4489H3.26524ZM3.12026 14.2537H20.8707C21.1304 14.2537 21.2603 14.1269 21.2603 13.8731V5.37397C21.2603 5.17463 21.2029 5.02059 21.0881 4.91186C20.9734 4.79709 20.8223 4.7397 20.6351 4.7397H3.36491C3.17765 4.7397 3.02663 4.79709 2.91186 4.91186C2.79709 5.02059 2.7397 5.17463 2.7397 5.37397V13.8731C2.7397 14.1269 2.86656 14.2537 3.12026 14.2537ZM9.04613 20.5148V18.2587H14.9539V20.5148H9.04613ZM9.00082 21.729C8.77128 21.729 8.57496 21.6474 8.41186 21.4844C8.2548 21.3213 8.17628 21.128 8.17628 20.9044C8.17628 20.6749 8.2548 20.4786 8.41186 20.3155C8.57496 20.1584 8.77128 20.0799 9.00082 20.0799H14.9992C15.2287 20.0799 15.422 20.1584 15.5791 20.3155C15.7361 20.4786 15.8147 20.6749 15.8147 20.9044C15.8147 21.128 15.7361 21.3213 15.5791 21.4844C15.422 21.6474 15.2287 21.729 14.9992 21.729H9.00082ZM10.4506 12.668C9.95524 12.668 9.70758 12.4053 9.70758 11.8797V9.49671C9.70758 9.09198 9.86161 8.84734 10.1697 8.76277V8.14662C10.1697 7.53048 10.3388 7.03515 10.6771 6.66063C11.0154 6.28007 11.4594 6.08979 12.0091 6.08979C12.5527 6.08979 12.9937 6.28007 13.332 6.66063C13.6702 7.03515 13.8394 7.53048 13.8394 8.14662V8.75371C14.1474 8.84432 14.3015 9.09198 14.3015 9.49671V11.8797C14.3015 12.4053 14.0508 12.668 13.5494 12.668H10.4506ZM11.1211 8.71746H12.888V8.07414C12.888 7.75398 12.8064 7.49725 12.6433 7.30395C12.4863 7.11065 12.2748 7.014 12.0091 7.014C11.7372 7.014 11.5198 7.11065 11.3567 7.30395C11.1996 7.49725 11.1211 7.75398 11.1211 8.07414V8.71746Z"
                fill="inherit"
            />
        </svg>
    );
};