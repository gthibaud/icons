// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const CubeMedium: FC<IconProps> = ({
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
            aria-label={arialLabel || 'cubeMedium icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4.01202 17.8709L10.9697 21.7181C11.6549 22.094 12.34 22.094 13.0252 21.7181L19.9829 17.8709C20.4377 17.6162 20.7742 17.3251 20.9925 16.9977C21.2107 16.6703 21.3199 16.1913 21.3199 15.5607V8.09368C21.3199 7.60255 21.2229 7.19024 21.0288 6.85675C20.8348 6.52327 20.5286 6.24132 20.1102 6.01091L13.7437 2.47294C13.1738 2.15765 12.5917 2 11.9975 2C11.4033 2 10.8212 2.15765 10.2512 2.47294L3.89378 6.01091C3.46935 6.24132 3.16012 6.52327 2.96609 6.85675C2.77206 7.19024 2.67505 7.60255 2.67505 8.09368V15.5607C2.67505 16.1913 2.78419 16.6703 3.00247 16.9977C3.22681 17.3251 3.56333 17.6162 4.01202 17.8709ZM5.12162 16.3247C4.87908 16.1913 4.70931 16.0488 4.61229 15.8972C4.52134 15.7396 4.47587 15.5456 4.47587 15.3151V8.85766L11.0607 12.5412V19.6535L5.12162 16.3247ZM18.8824 16.3247L12.9343 19.6535V12.5412L19.5191 8.85766V15.3151C19.5191 15.5456 19.4706 15.7396 19.3735 15.8972C19.2826 16.0488 19.1189 16.1913 18.8824 16.3247ZM11.9975 10.895L5.49451 7.28422L11.0607 4.17372C11.6913 3.82204 12.3158 3.82204 12.9343 4.17372L18.5095 7.28422L11.9975 10.895Z"
                fill="inherit"
            />
        </svg>
    );
};