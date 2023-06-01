// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const PlusRounded: FC<IconProps> = ({
    size = 24,
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
            style={{ display: 'inline', margin: '0px 3px', ...style }}
            aria-label={arialLabel || 'plus-rounded icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.9952 22C17.4759 22 21.9904 17.4758 21.9904 11.9952C21.9904 6.51459 17.4663 2 11.9952 2C6.51459 2 2 6.51459 2 11.9952C2 17.4758 6.51459 22 11.9952 22ZM11.9952 19.7523C7.70062 19.7523 4.25729 16.2898 4.25729 11.9952C4.25729 7.70062 7.69106 4.24773 11.9952 4.24773C16.2898 4.24773 19.7427 7.70062 19.7523 11.9952C19.7523 16.2898 16.2898 19.7523 11.9952 19.7523ZM11.9761 16.2802C12.5787 16.2802 12.9708 15.8594 12.9708 15.2472V12.99H15.3716C15.9742 12.99 16.4142 12.6074 16.4142 12.0239C16.4142 11.4213 15.9933 11.0292 15.3716 11.0292H12.9708V8.6571C12.9708 8.03539 12.5787 7.6241 11.9761 7.6241C11.3926 7.6241 11.01 8.05452 11.01 8.6571V11.0292H8.60928C7.98757 11.0292 7.56671 11.4213 7.56671 12.0239C7.56671 12.6074 8.0067 12.99 8.60928 12.99H11.01V15.2472C11.01 15.8498 11.3926 16.2802 11.9761 16.2802Z"
                fill="inherit"
            />
        </svg>
    );
};
