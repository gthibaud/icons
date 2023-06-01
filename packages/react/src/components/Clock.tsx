// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const Clock: FC<IconProps> = ({
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
            aria-label={arialLabel || 'clock icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.10885 13.2046H11.9855C12.2048 13.2046 12.3886 13.1305 12.537 12.9821C12.6854 12.8337 12.7596 12.6499 12.7596 12.4306V6.09289C12.7596 5.88002 12.6854 5.6994 12.537 5.55104C12.3886 5.40268 12.2048 5.3285 11.9855 5.3285C11.7726 5.3285 11.592 5.40268 11.4436 5.55104C11.2953 5.6994 11.2211 5.88002 11.2211 6.09289V11.6662H7.10885C6.88953 11.6662 6.70569 11.7404 6.55733 11.8887C6.40897 12.0306 6.33478 12.2113 6.33478 12.4306C6.33478 12.6499 6.40897 12.8337 6.55733 12.9821C6.70569 13.1305 6.88953 13.2046 7.10885 13.2046ZM11.9952 21.9903C13.3627 21.9903 14.6496 21.7291 15.8558 21.2066C17.0621 20.6905 18.1264 19.9713 19.0489 19.0489C19.9713 18.1264 20.6938 17.0621 21.2163 15.8558C21.7388 14.6496 22 13.3627 22 11.9952C22 10.6276 21.7388 9.34075 21.2163 8.13449C20.6938 6.92824 19.9713 5.86712 19.0489 4.95114C18.1264 4.02871 17.0621 3.30624 15.8558 2.78374C14.6496 2.26125 13.3595 2 11.9855 2C10.618 2 9.33108 2.26125 8.12482 2.78374C6.92501 3.30624 5.86389 4.02871 4.94146 4.95114C4.02548 5.86712 3.30624 6.92824 2.78374 8.13449C2.26125 9.34075 2 10.6276 2 11.9952C2 13.3627 2.26125 14.6496 2.78374 15.8558C3.30624 17.0621 4.02548 18.1264 4.94146 19.0489C5.86389 19.9713 6.92824 20.6905 8.13449 21.2066C9.34075 21.7291 10.6276 21.9903 11.9952 21.9903ZM11.9952 20.0164C10.8857 20.0164 9.8439 19.81 8.86986 19.3972C7.90227 18.9844 7.0508 18.4103 6.31543 17.6749C5.58652 16.9395 5.01564 16.0881 4.60281 15.1205C4.18997 14.1529 3.98355 13.1111 3.98355 11.9952C3.98355 10.8857 4.18997 9.84712 4.60281 8.87954C5.01564 7.9055 5.58652 7.0508 6.31543 6.31543C7.04435 5.58007 7.8926 5.00597 8.86018 4.59313C9.83422 4.18029 10.876 3.97388 11.9855 3.97388C13.1014 3.97388 14.1432 4.18029 15.1108 4.59313C16.0784 5.00597 16.9299 5.58007 17.6652 6.31543C18.407 7.0508 18.9844 7.9055 19.3972 8.87954C19.81 9.84712 20.0164 10.8857 20.0164 11.9952C20.0164 13.1111 19.81 14.1529 19.3972 15.1205C18.9844 16.0881 18.4103 16.9395 17.6749 17.6749C16.946 18.4103 16.0945 18.9844 15.1205 19.3972C14.1529 19.81 13.1111 20.0164 11.9952 20.0164Z"
                fill="inherit"
            />
        </svg>
    );
};
