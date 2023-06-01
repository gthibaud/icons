// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const Comment: FC<IconProps> = ({
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
            aria-label={arialLabel || 'comment icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8.33721 22C8.90072 22 9.35152 21.7606 10.0438 21.1416L12.7567 18.707H17.0313C19.4946 18.707 21 17.1471 21 14.6465V8.06049C21 5.5598 19.4946 3.99997 17.0313 3.99997H6.96064C4.50537 3.99997 3 5.55155 3 8.06049V14.6465C3 17.1554 4.61002 18.707 6.80769 18.707H7.02504V20.5144C7.02504 21.4388 7.52415 22 8.33721 22ZM8.85242 19.5488V17.2792C8.85242 16.7097 8.58676 16.4952 8.09571 16.4952H7.10555C5.80143 16.4952 5.15742 15.8267 5.15742 14.5062V8.20079C5.15742 6.8803 5.80143 6.20355 7.10555 6.20355H16.8945C18.1905 6.20355 18.8426 6.8803 18.8426 8.20079V14.5062C18.8426 15.8267 18.1905 16.4952 16.8945 16.4952H12.5957C12.0322 16.4952 11.7826 16.6107 11.3721 17.0316L8.85242 19.5488Z"
                fill="inherit"
            />
        </svg>
    );
};
