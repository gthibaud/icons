// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const Sparkles: FC<IconProps> = ({
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
            aria-label={arialLabel || 'sparkles icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M13.2295 22C13.3811 22 13.5046 21.951 13.6 21.853C13.7011 21.755 13.7656 21.6282 13.7937 21.4725C13.9172 20.5444 14.0519 19.7605 14.1979 19.1206C14.3439 18.4865 14.5375 17.9648 14.7789 17.5555C15.0204 17.1405 15.3375 16.8119 15.7305 16.5698C16.1235 16.3277 16.6232 16.1375 17.2295 15.9991C17.8414 15.855 18.5909 15.7311 19.4779 15.6273C19.6295 15.61 19.753 15.5466 19.8484 15.4371C19.9495 15.3275 20 15.1978 20 15.048C20 14.8981 19.9523 14.7713 19.8568 14.6675C19.7614 14.558 19.6351 14.4917 19.4779 14.4686C18.5909 14.3591 17.8442 14.2352 17.2379 14.0968C16.6372 13.9527 16.1404 13.7596 15.7474 13.5175C15.3544 13.2696 15.0372 12.941 14.7958 12.5317C14.56 12.1225 14.3663 11.6008 14.2147 10.9667C14.0632 10.3326 13.9228 9.55149 13.7937 8.6234C13.7656 8.46776 13.7011 8.34382 13.6 8.25159C13.4989 8.15359 13.3754 8.1046 13.2295 8.1046C13.0891 8.1046 12.9656 8.15359 12.8589 8.25159C12.7579 8.34382 12.6961 8.46776 12.6737 8.6234C12.5558 9.55149 12.4211 10.3355 12.2695 10.9753C12.1235 11.6094 11.9298 12.1311 11.6884 12.5404C11.447 12.9497 11.1298 13.2783 10.7368 13.5261C10.3439 13.774 9.8414 13.97 9.22947 14.1141C8.62316 14.2525 7.87649 14.3706 6.98947 14.4686C6.83228 14.4859 6.70316 14.5493 6.60211 14.6589C6.50667 14.7684 6.45895 14.8981 6.45895 15.048C6.45895 15.1978 6.50667 15.3275 6.60211 15.4371C6.70316 15.5466 6.83228 15.61 6.98947 15.6273C7.87649 15.7483 8.62035 15.8838 9.22105 16.0337C9.82737 16.1836 10.3242 16.3796 10.7116 16.6217C11.0989 16.8638 11.4133 17.1866 11.6547 17.5901C11.8961 17.9936 12.0926 18.5096 12.2442 19.1379C12.3958 19.7662 12.5389 20.5444 12.6737 21.4725C12.7018 21.6282 12.7663 21.755 12.8674 21.853C12.9684 21.951 13.0891 22 13.2295 22ZM7.31789 12.3934C7.41333 12.3934 7.49193 12.3646 7.55368 12.3069C7.61544 12.2435 7.65193 12.1657 7.66316 12.0735C7.73614 11.5085 7.80912 11.0676 7.88211 10.7505C7.9607 10.4277 8.0814 10.1856 8.24421 10.0242C8.40702 9.86277 8.65123 9.73884 8.97684 9.65237C9.30246 9.56014 9.75719 9.45926 10.3411 9.34973C10.5432 9.30938 10.6442 9.19121 10.6442 8.99521C10.6442 8.89722 10.6133 8.81651 10.5516 8.7531C10.4954 8.68969 10.4225 8.65223 10.3326 8.6407C9.75439 8.55999 9.30246 8.47929 8.97684 8.39859C8.65123 8.31788 8.40702 8.19395 8.24421 8.02677C8.0814 7.8596 7.9607 7.61173 7.88211 7.28315C7.80912 6.95457 7.73614 6.49918 7.66316 5.91696C7.6407 5.69791 7.52561 5.58838 7.31789 5.58838C7.11579 5.58838 7.00351 5.70079 6.98105 5.92561C6.91368 6.49629 6.8407 6.94016 6.76211 7.25721C6.68912 7.57426 6.56842 7.81349 6.4 7.97489C6.23719 8.13054 5.99018 8.25447 5.65895 8.34671C5.33333 8.43317 4.8814 8.53117 4.30316 8.6407C4.10105 8.67528 4 8.79346 4 8.99521C4 9.19697 4.11509 9.31514 4.34526 9.34973C4.91228 9.44196 5.35579 9.53131 5.67579 9.61778C6.0014 9.69848 6.24561 9.82242 6.40842 9.98959C6.57123 10.151 6.68912 10.396 6.76211 10.7246C6.8407 11.0474 6.91368 11.4913 6.98105 12.0562C7.00351 12.281 7.11579 12.3934 7.31789 12.3934ZM11.4105 6.28013C11.5284 6.28013 11.6014 6.21672 11.6295 6.0899C11.6856 5.73826 11.7389 5.46156 11.7895 5.25981C11.84 5.05805 11.913 4.90529 12.0084 4.80153C12.1095 4.69776 12.2582 4.61706 12.4547 4.55942C12.6568 4.50177 12.9404 4.43548 13.3053 4.36054C13.4344 4.33748 13.4989 4.26543 13.4989 4.14437C13.4989 4.02332 13.4344 3.94838 13.3053 3.91955C12.9404 3.85038 12.6568 3.78985 12.4547 3.73797C12.2582 3.68033 12.1123 3.59962 12.0168 3.49586C11.9214 3.3921 11.8484 3.23934 11.7979 3.03758C11.7474 2.83582 11.6912 2.55625 11.6295 2.19885C11.6014 2.06626 11.5284 1.99997 11.4105 1.99997C11.2926 1.99997 11.2225 2.06914 11.2 2.20749C11.1326 2.55913 11.0737 2.83294 11.0232 3.02894C10.9782 3.22493 10.9053 3.37481 10.8042 3.47857C10.7088 3.58233 10.56 3.66303 10.3579 3.72068C10.1614 3.77832 9.8807 3.84462 9.51579 3.91955C9.38667 3.94838 9.32211 4.02332 9.32211 4.14437C9.32211 4.26543 9.38947 4.33748 9.52421 4.36054C9.88351 4.42971 10.1614 4.49601 10.3579 4.55942C10.56 4.61706 10.7116 4.69776 10.8126 4.80153C10.9137 4.89952 10.9867 5.0494 11.0316 5.25116C11.0821 5.45292 11.1382 5.7325 11.2 6.0899C11.2225 6.21672 11.2926 6.28013 11.4105 6.28013Z"
                fill="inherit"
            />
        </svg>
    );
};
