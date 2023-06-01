// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const Megaphone: FC<IconProps> = ({
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
            aria-label={arialLabel || 'megaphone icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2 11.9896C2 13.1861 2.32682 14.1029 2.98047 14.7399C3.63966 15.3714 4.58967 15.6871 5.83049 15.6871H8.79684C9.55574 15.7758 10.3174 15.9059 11.0818 16.0777C11.8463 16.2494 12.6079 16.4654 13.3668 16.7258C14.1257 16.9806 14.8763 17.2797 15.6186 17.6232C16.3609 17.9666 17.0893 18.3516 17.8039 18.7781V16.8753C17.1115 16.4654 16.4024 16.0998 15.6768 15.7785C14.9567 15.4517 14.2171 15.1692 13.4582 14.931C12.7049 14.6928 11.9349 14.4934 11.1483 14.3327C10.3673 14.1721 9.57236 14.0502 8.76361 13.9671H5.83049C5.0716 13.9671 4.53151 13.8176 4.21022 13.5185C3.88893 13.2138 3.72829 12.7042 3.72829 11.9896V10.7598C3.72829 10.0508 3.88893 9.54671 4.21022 9.24758C4.53151 8.94291 5.0716 8.79058 5.83049 8.79058H8.67221C9.49758 8.70749 10.3091 8.58562 11.1068 8.42498C11.9044 8.2588 12.6855 8.05661 13.4499 7.81842C14.2199 7.58022 14.9677 7.30048 15.6934 6.9792C16.4191 6.65237 17.1226 6.28677 17.8039 5.8824V3.963C17.1392 4.38399 16.4301 4.76898 15.6768 5.11796C14.929 5.4614 14.1617 5.76607 13.3752 6.03196C12.5886 6.29231 11.8103 6.51112 11.0403 6.68838C10.2759 6.86564 9.54466 6.99028 8.8467 7.06229H5.83049C4.58967 7.06229 3.63966 7.3808 2.98047 8.01784C2.32682 8.65487 2 9.56887 2 10.7598V11.9896ZM10.4171 15.3382H8.77191L9.52804 19.1188C9.56682 19.3182 9.53635 19.4761 9.43664 19.5924C9.34247 19.7087 9.2123 19.7669 9.04612 19.7669C8.89655 19.7669 8.77745 19.7281 8.68882 19.6506C8.60573 19.573 8.52264 19.4484 8.43955 19.2767L6.51184 15.172H4.75031L6.81928 19.7586C7.06855 20.3125 7.37322 20.7252 7.73328 20.9966C8.09888 21.2681 8.54203 21.4038 9.06273 21.4038C9.51143 21.4038 9.90749 21.2985 10.2509 21.088C10.5944 20.8831 10.8464 20.5923 11.0071 20.2156C11.1732 19.8445 11.2065 19.4068 11.1068 18.9028L10.4171 15.3382ZM7.45077 7.76025V14.9892H9.17906V7.76025H7.45077ZM17.2306 17.6065C17.2306 18.0718 17.3331 18.4818 17.538 18.8363C17.743 19.1963 18.0255 19.4789 18.3855 19.6838C18.7456 19.8888 19.1555 19.9912 19.6153 19.9912C20.0806 19.9912 20.4905 19.8888 20.845 19.6838C21.2051 19.4789 21.4876 19.1963 21.6926 18.8363C21.8975 18.4818 22 18.0718 22 17.6065V5.08472C22 4.61941 21.8975 4.2095 21.6926 3.85498C21.4876 3.49492 21.2051 3.21241 20.845 3.00745C20.4905 2.80249 20.0806 2.70001 19.6153 2.70001C19.1555 2.70001 18.7456 2.80249 18.3855 3.00745C18.0255 3.21241 17.743 3.49492 17.538 3.85498C17.3331 4.2095 17.2306 4.61941 17.2306 5.08472V17.6065ZM18.9589 17.6065V5.08472C18.9589 4.88531 19.0198 4.72743 19.1417 4.6111C19.2635 4.48924 19.4214 4.4283 19.6153 4.4283C19.8092 4.4283 19.967 4.48924 20.0889 4.6111C20.2108 4.72743 20.2717 4.88531 20.2717 5.08472V17.6065C20.2717 17.8004 20.2108 17.9583 20.0889 18.0802C19.967 18.202 19.8092 18.263 19.6153 18.263C19.4214 18.263 19.2635 18.202 19.1417 18.0802C19.0198 17.9583 18.9589 17.8004 18.9589 17.6065Z"
                fill="inherit"
            />
        </svg>
    );
};
