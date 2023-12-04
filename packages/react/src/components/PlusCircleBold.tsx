// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const PlusCircleBold: FC<IconProps> = ({
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
            aria-label={arialLabel || 'plus-circle-bold icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.9953 21.9905C10.626 21.9905 9.3387 21.7287 8.13346 21.2049C6.92822 20.6875 5.86496 19.9681 4.94368 19.0469C4.0224 18.1319 3.29989 17.0718 2.77615 15.8665C2.25872 14.6613 2 13.3709 2 11.9953C2 10.626 2.25872 9.3387 2.77615 8.13346C3.29989 6.92822 4.01925 5.86496 4.93422 4.94368C5.8555 4.0224 6.91876 3.30304 8.12399 2.78561C9.33554 2.26187 10.626 2 11.9953 2C13.3646 2 14.6518 2.26187 15.8571 2.78561C17.0686 3.30304 18.1319 4.0224 19.0469 4.94368C19.9681 5.86496 20.6906 6.92822 21.2144 8.13346C21.7381 9.3387 22 10.626 22 11.9953C22 13.3709 21.7381 14.6613 21.2144 15.8665C20.6906 17.0718 19.9681 18.1319 19.0469 19.0469C18.1319 19.9681 17.0718 20.6875 15.8665 21.2049C14.6613 21.7287 13.3709 21.9905 11.9953 21.9905ZM11.9953 19.5012C13.0364 19.5012 14.0114 19.3056 14.92 18.9143C15.8287 18.5294 16.6269 17.9962 17.3147 17.3147C18.0025 16.6269 18.5389 15.8287 18.9238 14.92C19.315 14.0114 19.5106 13.0364 19.5106 11.9953C19.5106 10.9541 19.315 9.98233 18.9238 9.07998C18.5326 8.17132 17.9931 7.37309 17.3053 6.68528C16.6238 5.99748 15.8287 5.46111 14.92 5.0762C14.0114 4.68497 13.0364 4.48935 11.9953 4.48935C10.9541 4.48935 9.97918 4.68497 9.07052 5.0762C8.16817 5.46111 7.37309 5.99748 6.68528 6.68528C5.99748 7.37309 5.46111 8.17132 5.0762 9.07998C4.69128 9.98233 4.49882 10.9541 4.49882 11.9953C4.49882 13.0364 4.69128 14.0114 5.0762 14.92C5.46111 15.8287 5.99748 16.6269 6.68528 17.3147C7.37309 17.9962 8.17132 18.5294 9.07998 18.9143C9.98864 19.3056 10.9604 19.5012 11.9953 19.5012ZM7.64127 11.9953C7.64127 11.6861 7.73908 11.4337 7.93469 11.2381C8.1303 11.0361 8.37956 10.9352 8.68244 10.9352H10.9446V8.67298C10.9446 8.37009 11.0424 8.12084 11.2381 7.92523C11.44 7.72961 11.6892 7.6318 11.9858 7.6318C12.295 7.6318 12.5474 7.72961 12.743 7.92523C12.9449 8.12084 13.0459 8.37009 13.0459 8.67298V10.9352H15.3081C15.611 10.9352 15.8602 11.0361 16.0558 11.2381C16.2515 11.4337 16.3493 11.6861 16.3493 11.9953C16.3493 12.2918 16.2515 12.5411 16.0558 12.743C15.8602 12.9386 15.611 13.0364 15.3081 13.0364H13.0459V15.2986C13.0459 15.6015 12.9449 15.8508 12.743 16.0464C12.5474 16.242 12.295 16.3398 11.9858 16.3398C11.6892 16.3398 11.44 16.242 11.2381 16.0464C11.0424 15.8508 10.9446 15.6015 10.9446 15.2986V13.0364H8.68244C8.37956 13.0364 8.1303 12.9386 7.93469 12.743C7.73908 12.5411 7.64127 12.2918 7.64127 11.9953Z"
                fill="inherit"
            />
        </svg>
    );
};
