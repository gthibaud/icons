// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const PeopleFill: FC<IconProps> = ({
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
            aria-label={arialLabel || 'people-fill icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M15.831 11.8312C17.4479 11.8312 18.7881 10.4036 18.7881 8.57552C18.7881 6.79839 17.4334 5.39999 15.831 5.39999C14.2214 5.39999 12.8667 6.81296 12.8667 8.58281C12.874 10.4036 14.2141 11.8312 15.831 11.8312ZM7.38237 11.9914C8.78806 11.9914 9.95339 10.746 9.95339 9.15819C9.95339 7.60684 8.77349 6.39781 7.38237 6.39781C5.98398 6.39781 4.7968 7.62869 4.80408 9.16547C4.80408 10.746 5.96941 11.9914 7.38237 11.9914ZM3.3984 18.6338H8.80262C8.00874 17.5122 8.78806 15.3199 10.4924 13.9652C9.69847 13.4626 8.65696 13.0912 7.37509 13.0912C4.14858 13.0912 2 15.4655 2 17.4102C2 18.1822 2.37145 18.6338 3.3984 18.6338ZM11.3154 18.6338H20.3394C21.5776 18.6338 22 18.2332 22 17.5413C22 15.6768 19.6038 13.113 15.8237 13.113C12.051 13.113 9.64749 15.6768 9.64749 17.5413C9.64749 18.2332 10.0699 18.6338 11.3154 18.6338Z"
                fill="inherit"
            />
        </svg>
    );
};
