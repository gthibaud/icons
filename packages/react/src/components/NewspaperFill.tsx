// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const NewspaperFill: FC<IconProps> = ({
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
            aria-label={arialLabel || 'newspaper-fill icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3 11.3907C3 10.9816 3.08392 10.6355 3.25175 10.3523C3.41958 10.0691 3.64248 9.85664 3.92045 9.71504C4.19843 9.56818 4.50524 9.49476 4.84091 9.49476H5.10839V18.2981C5.10839 18.5288 5.05857 18.7203 4.95892 18.8724C4.85927 19.0297 4.72815 19.1451 4.56556 19.2185C4.40297 19.2972 4.23252 19.3392 4.0542 19.3444C3.87587 19.3444 3.70542 19.3051 3.54283 19.2264C3.38549 19.1477 3.25437 19.0297 3.14948 18.8724C3.04983 18.7203 3 18.5288 3 18.2981V11.3907ZM5.87937 20.6504C6.16259 20.5035 6.35927 20.3121 6.46941 20.0761C6.58479 19.84 6.64248 19.528 6.64248 19.1399V6.14336C6.64248 5.28322 6.86801 4.62762 7.31906 4.17657C7.77535 3.72552 8.43881 3.5 9.30944 3.5H18.3409C19.2115 3.5 19.8724 3.72552 20.3234 4.17657C20.7745 4.62762 21 5.28322 21 6.14336V18.0149C21 18.875 20.7745 19.528 20.3234 19.9738C19.8724 20.4248 19.2115 20.6504 18.3409 20.6504H5.87937ZM10.1119 8.55857H17.5463C17.6984 8.55857 17.8295 8.50612 17.9397 8.40122C18.0498 8.29108 18.1049 8.15734 18.1049 8C18.1049 7.8479 18.0498 7.71941 17.9397 7.61451C17.8348 7.50962 17.7037 7.45717 17.5463 7.45717H10.1119C9.9493 7.45717 9.81556 7.50962 9.71066 7.61451C9.60577 7.71941 9.55332 7.8479 9.55332 8C9.55332 8.15734 9.60577 8.29108 9.71066 8.40122C9.8208 8.50612 9.95455 8.55857 10.1119 8.55857ZM10.1119 11.2413H17.5463C17.7037 11.2413 17.8348 11.1888 17.9397 11.0839C18.0498 10.979 18.1049 10.8479 18.1049 10.6906C18.1049 10.5332 18.0498 10.4021 17.9397 10.2972C17.8295 10.1871 17.6984 10.132 17.5463 10.132H10.1119C9.95455 10.132 9.8208 10.1871 9.71066 10.2972C9.60577 10.4021 9.55332 10.5332 9.55332 10.6906C9.55332 10.8479 9.60577 10.979 9.71066 11.0839C9.81556 11.1888 9.9493 11.2413 10.1119 11.2413ZM14.8243 13.924H17.5463C17.6984 13.924 17.8269 13.8715 17.9318 13.7666C18.0367 13.6617 18.0892 13.5332 18.0892 13.3811C18.0892 13.2238 18.0367 13.0927 17.9318 12.9878C17.8269 12.8776 17.6984 12.8226 17.5463 12.8226H14.8243C14.6617 12.8226 14.528 12.8776 14.4231 12.9878C14.3182 13.0927 14.2657 13.2238 14.2657 13.3811C14.2657 13.5332 14.3182 13.6617 14.4231 13.7666C14.5332 13.8715 14.667 13.924 14.8243 13.924ZM14.8243 16.6145H17.5463C17.6984 16.6145 17.8269 16.5621 17.9318 16.4572C18.0367 16.3523 18.0892 16.2212 18.0892 16.0638C18.0892 15.9065 18.0367 15.7754 17.9318 15.6705C17.8269 15.5603 17.6984 15.5052 17.5463 15.5052H14.8243C14.667 15.5052 14.5332 15.5603 14.4231 15.6705C14.3182 15.7754 14.2657 15.9065 14.2657 16.0638C14.2657 16.2212 14.3182 16.3523 14.4231 16.4572C14.528 16.5621 14.6617 16.6145 14.8243 16.6145ZM10.4974 16.6381H12.3304C12.6241 16.6381 12.8549 16.5542 13.0227 16.3864C13.1958 16.2133 13.2823 15.9799 13.2823 15.6862V13.7745C13.2823 13.4808 13.1958 13.25 13.0227 13.0822C12.8549 12.9091 12.6241 12.8226 12.3304 12.8226H10.4974C10.1984 12.8226 9.96503 12.9091 9.7972 13.0822C9.62937 13.25 9.54545 13.4808 9.54545 13.7745V15.6862C9.54545 15.9799 9.62937 16.2133 9.7972 16.3864C9.96503 16.5542 10.1984 16.6381 10.4974 16.6381Z"
                fill="inherit"
            />
        </svg>
    );
};
