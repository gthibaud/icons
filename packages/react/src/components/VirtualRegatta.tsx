// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const VirtualRegatta: FC<IconProps> = ({
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
            aria-label={arialLabel || 'virtual-regatta icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.3244 8.98002L12.7498 3.09843L15.8635 3.09936L14.4324 9.33498C14.0169 10.9784 12.461 12.0694 10.7747 11.8952C9.09959 12.0731 7.55396 10.9756 7.17012 9.33498L5.69995 2H8.82102L10.2847 8.98002C10.3191 9.13933 10.6257 9.57349 10.7775 9.57349H10.8306C10.9834 9.57349 11.2899 9.13933 11.3244 8.98002ZM16.2687 22L15.2998 18.6283L15.2951 18.6162C15.9976 18.5258 16.6544 18.223 17.178 17.7479C17.7221 17.2942 18.0994 16.6737 18.2532 15.9824L18.2774 15.8408C18.3128 15.674 18.3314 15.5072 18.3314 15.3377C18.3445 14.7638 18.1246 14.2132 17.7203 13.8088C17.3168 13.3961 16.7597 13.1706 16.1839 13.1883H10.0406L8.18003 22H11.1092L11.821 18.6386H12.3259L13.2837 22H16.2687ZM12.5337 15.2855H14.8656C14.9038 15.279 14.9458 15.279 14.984 15.2836C15.2169 15.3144 15.3809 15.5287 15.3492 15.7607C15.3454 15.96 15.2616 16.1492 15.1172 16.2852C14.9821 16.4324 14.792 16.5209 14.5927 16.5228H12.27L12.5337 15.2855Z"
                fill="inherit"
            />
        </svg>
    );
};
