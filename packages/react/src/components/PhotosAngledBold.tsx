// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const PhotosAngledBold: FC<IconProps> = ({
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
            aria-label={arialLabel || 'photos-angled-bold icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.68148 19.1367C9.06258 19.1367 8.60555 18.9796 8.31038 18.6654C8.01522 18.3559 7.86764 17.8703 7.86764 17.2086L10.0385 15.2662C10.1623 15.1662 10.2885 15.09 10.417 15.0377C10.5503 14.9805 10.6812 14.952 10.8098 14.952C10.9526 14.952 11.0907 14.9782 11.224 15.0305C11.362 15.0829 11.4906 15.1662 11.6096 15.2805L12.6807 16.2517L15.3729 13.8737C15.5062 13.7547 15.6467 13.669 15.7943 13.6166C15.9418 13.5595 16.0942 13.5309 16.2513 13.5309C16.4179 13.5309 16.575 13.5595 16.7226 13.6166C16.8749 13.6737 17.0154 13.7618 17.1439 13.8808L20.4574 16.9729V17.2728C20.4574 17.9013 20.3051 18.3678 20.0004 18.6725C19.7004 18.9819 19.2482 19.1367 18.6436 19.1367H9.68148ZM12.2808 14.0236C11.8762 14.0236 11.5286 13.8784 11.2382 13.588C10.9478 13.2929 10.8026 12.9406 10.8026 12.5311C10.8026 12.1312 10.9478 11.7861 11.2382 11.4957C11.5286 11.2053 11.8762 11.0601 12.2808 11.0601C12.5522 11.0601 12.7998 11.1267 13.0235 11.26C13.2473 11.3933 13.4258 11.5719 13.5591 11.7956C13.6924 12.0194 13.759 12.2645 13.759 12.5311C13.759 12.9406 13.6138 13.2929 13.3234 13.588C13.0378 13.8784 12.6903 14.0236 12.2808 14.0236ZM3.75436 15.4162L2.5618 8.64639C2.41898 7.85134 2.52371 7.20388 2.87601 6.70401C3.2283 6.20413 3.80435 5.88278 4.60415 5.73996L14.1518 4.0618C14.9564 3.91898 15.6086 4.02371 16.1085 4.37601C16.6083 4.72354 16.9273 5.29483 17.0654 6.08987L17.4938 8.475H15.6229L15.3015 6.63259C15.2444 6.33267 15.1278 6.12558 14.9516 6.01132C14.7802 5.89706 14.5541 5.86374 14.2732 5.91134L5.12545 7.51809C4.83981 7.57046 4.6351 7.68234 4.51132 7.85372C4.38754 8.02035 4.35421 8.25362 4.41134 8.55355L5.52536 14.8734C5.58248 15.1686 5.69674 15.3757 5.86813 15.4947C6.03951 15.609 6.26803 15.6423 6.55367 15.5947L7.81765 15.3733V17.2443L6.66793 17.4442C5.86337 17.5823 5.21115 17.4775 4.71127 17.13C4.21615 16.7825 3.89718 16.2112 3.75436 15.4162ZM9.24587 19.9293C8.42702 19.9293 7.80099 19.7151 7.36776 19.2866C6.93929 18.8582 6.72506 18.2369 6.72506 17.4228V10.5531C6.72506 9.74373 6.93929 9.12484 7.36776 8.69637C7.80099 8.26315 8.42702 8.04653 9.24587 8.04653H18.9792C19.7933 8.04653 20.4169 8.26315 20.8502 8.69637C21.2834 9.1296 21.5 9.7485 21.5 10.5531V17.4228C21.5 18.2369 21.2834 18.8582 20.8502 19.2866C20.4169 19.7151 19.7933 19.9293 18.9792 19.9293H9.24587ZM9.44582 18.0869H18.7721C19.0577 18.0869 19.2767 18.0155 19.4291 17.8727C19.5814 17.7299 19.6576 17.5061 19.6576 17.2014V10.7816C19.6576 10.4769 19.5814 10.2531 19.4291 10.1103C19.2767 9.96273 19.0577 9.88894 18.7721 9.88894H9.44582C9.16018 9.88894 8.94118 9.96273 8.78884 10.1103C8.64126 10.2531 8.56746 10.4769 8.56746 10.7816V17.2014C8.56746 17.5061 8.64126 17.7299 8.78884 17.8727C8.94118 18.0155 9.16018 18.0869 9.44582 18.0869Z"
                fill="inherit"
            />
        </svg>
    );
};
