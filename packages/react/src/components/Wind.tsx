// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const Wind: FC<IconProps> = ({
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
            aria-label={arialLabel || 'wind icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3.5892 9.38173C3.33184 9.45954 3.10739 9.44757 2.91587 9.34582C2.72434 9.24407 2.59865 9.08247 2.5388 8.86101C2.47296 8.64555 2.49391 8.44205 2.60164 8.25052C2.70938 8.05899 2.88295 7.93031 3.12236 7.86447C3.82861 7.66098 4.55283 7.50237 5.29499 7.38865C6.03716 7.26894 6.77335 7.20909 7.50354 7.20909C8.06616 7.20909 8.58986 7.23004 9.07467 7.27194C9.56546 7.31383 10.0383 7.35573 10.4932 7.39763C10.954 7.43952 11.4239 7.46047 11.9027 7.46047C12.2857 7.46047 12.588 7.35872 12.8094 7.15522C13.0369 6.94574 13.1506 6.66743 13.1506 6.32028C13.1506 5.97314 13.0429 5.69782 12.8274 5.49432C12.6119 5.29083 12.3426 5.18908 12.0194 5.18908C11.7979 5.18908 11.5915 5.25192 11.3999 5.37761C11.2084 5.5033 11.0677 5.65892 10.978 5.84446C10.8523 6.0719 10.6787 6.21854 10.4573 6.28437C10.2418 6.35021 10.0353 6.32627 9.83778 6.21255C9.64626 6.10482 9.52655 5.9492 9.47867 5.7457C9.43677 5.54221 9.4667 5.33871 9.56845 5.13521C9.7899 4.68632 10.1221 4.31823 10.565 4.03093C11.0079 3.74364 11.4927 3.6 12.0194 3.6C12.5281 3.6 12.986 3.71671 13.393 3.95013C13.806 4.18356 14.1322 4.50676 14.3716 4.91974C14.617 5.32674 14.7397 5.79358 14.7397 6.32028C14.7397 6.83501 14.62 7.29887 14.3806 7.71185C14.1412 8.12483 13.809 8.45103 13.384 8.69044C12.9591 8.92984 12.4653 9.04955 11.9027 9.04955C11.388 9.04955 10.8972 9.0286 10.4303 8.9867C9.96347 8.94481 9.49363 8.90291 9.0208 8.86101C8.54797 8.81912 8.04221 8.79817 7.50354 8.79817C6.18679 8.79817 4.88201 8.99269 3.5892 9.38173ZM17.7383 13.8617C16.9602 13.8617 16.2001 13.7839 15.4579 13.6282C14.7157 13.4726 13.9676 13.2931 13.2135 13.0896C12.4653 12.8801 11.6932 12.6975 10.8972 12.5419C10.1011 12.3863 9.2632 12.3085 8.38337 12.3085C7.50953 12.3085 6.68057 12.3684 5.89651 12.4881C5.11843 12.6078 4.35232 12.8023 3.59818 13.0716C3.35279 13.1554 3.12834 13.1494 2.92484 13.0537C2.72733 12.9519 2.59865 12.7903 2.5388 12.5689C2.47296 12.3534 2.49092 12.1529 2.59266 11.9673C2.7004 11.7758 2.87397 11.6382 3.11338 11.5544C3.94533 11.279 4.79822 11.0696 5.67206 10.9259C6.54591 10.7823 7.44968 10.7104 8.38337 10.7104C9.28714 10.7104 10.155 10.7913 10.9869 10.9529C11.8189 11.1085 12.6209 11.288 13.393 11.4915C14.1651 11.695 14.9103 11.8776 15.6285 12.0392C16.3527 12.1948 17.056 12.2726 17.7383 12.2726C18.3967 12.2726 18.9234 12.108 19.3184 11.7788C19.7134 11.4436 19.9109 11.0067 19.9109 10.468C19.9109 10.1149 19.8331 9.80369 19.6775 9.53435C19.5219 9.26502 19.3064 9.05553 19.0311 8.9059C18.7618 8.75627 18.4625 8.68146 18.1333 8.68146C17.87 8.68146 17.6216 8.73532 17.3881 8.84306C17.1607 8.95079 16.9632 9.10042 16.7956 9.29195C16.634 9.48348 16.5203 9.70493 16.4545 9.95631C16.3826 10.2137 16.245 10.3992 16.0415 10.5129C15.844 10.6207 15.6345 10.6416 15.413 10.5758C15.2095 10.5099 15.0599 10.3813 14.9641 10.1897C14.8744 9.99821 14.8624 9.78573 14.9282 9.55231C15.0479 9.07947 15.2604 8.65752 15.5656 8.28643C15.8769 7.91535 16.251 7.62506 16.6879 7.41558C17.1308 7.20011 17.6126 7.09238 18.1333 7.09238C18.7618 7.09238 19.3304 7.23902 19.8391 7.53229C20.3478 7.82557 20.7518 8.22658 21.0511 8.73532C21.3504 9.24407 21.5 9.82164 21.5 10.468C21.5 11.1264 21.3384 11.71 21.0152 12.2187C20.692 12.7275 20.2461 13.1285 19.6775 13.4218C19.1149 13.715 18.4685 13.8617 17.7383 13.8617ZM11.9117 20.4245C11.2712 20.4245 10.7206 20.2329 10.2597 19.8499C9.80486 19.4668 9.49962 18.988 9.344 18.4134C9.26021 18.18 9.26021 17.9616 9.344 17.7581C9.43378 17.5486 9.59538 17.4109 9.82881 17.3451C10.0562 17.2792 10.2627 17.3002 10.4483 17.4079C10.6338 17.5097 10.7625 17.6683 10.8343 17.8837C10.9181 18.183 11.0498 18.4164 11.2293 18.584C11.4149 18.7576 11.6423 18.8444 11.9117 18.8444C12.2169 18.8444 12.4713 18.7456 12.6748 18.5481C12.8843 18.3506 12.989 18.0783 12.989 17.7311C12.989 17.1446 12.57 16.6777 11.7321 16.3306C10.8942 15.9834 9.70012 15.8099 8.14995 15.8099C7.3599 15.8099 6.57883 15.8757 5.80673 16.0074C5.04062 16.1331 4.30444 16.3186 3.59818 16.564C3.35279 16.6538 3.12834 16.6478 2.92484 16.546C2.72733 16.4443 2.59865 16.2827 2.5388 16.0612C2.47296 15.8518 2.49092 15.6513 2.59266 15.4597C2.7004 15.2682 2.87397 15.1335 3.11338 15.0557C3.89146 14.7924 4.71742 14.5889 5.59126 14.4452C6.47109 14.2956 7.32399 14.2208 8.14995 14.2208C10.2149 14.2208 11.8009 14.526 12.9082 15.1365C14.0215 15.741 14.5781 16.6059 14.5781 17.7311C14.5781 18.2518 14.4614 18.7127 14.2279 19.1137C13.9945 19.5207 13.6743 19.8409 13.2673 20.0743C12.8663 20.3078 12.4144 20.4245 11.9117 20.4245Z"
                fill="inherit"
            />
        </svg>
    );
};
