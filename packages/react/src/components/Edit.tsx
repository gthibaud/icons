// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const Edit: FC<IconProps> = ({
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
            aria-label={arialLabel || 'edit icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M20.0899 6.54762L21.4854 5.1519C22.1519 4.48528 22.1728 3.70409 21.5375 3.05831L20.9439 2.45419C20.3086 1.80841 19.5067 1.8709 18.8402 2.51669L17.4447 3.90199L20.0899 6.54762ZM5.78062 20.859L18.7881 7.82877L16.1533 5.19356L3.1458 18.2134L2.04188 21.1194C1.84401 21.6506 2.38555 22.1401 2.86461 21.9631L5.78062 20.859Z"
                fill="inherit"
            />
        </svg>
    );
};
