// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const CommentFill: FC<IconProps> = ({
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
            aria-label={arialLabel || 'comment-fill icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.87449 20.666C7.62078 20.666 7.42105 20.5824 7.2753 20.415C7.13495 20.2531 7.06478 20.0318 7.06478 19.7511V17.4191H6.78138C6.01484 17.4191 5.34818 17.2652 4.78138 16.9575C4.21457 16.6498 3.77463 16.2072 3.46154 15.6296C3.15385 15.052 3 14.3583 3 13.5486V7.20854C3 6.39883 3.15115 5.70517 3.45344 5.12757C3.76113 4.54997 4.20378 4.10733 4.78138 3.79964C5.35897 3.48655 6.05533 3.33 6.87045 3.33H17.1215C17.942 3.33 18.641 3.48655 19.2186 3.79964C19.7962 4.10733 20.2362 4.54997 20.5385 5.12757C20.8462 5.70517 21 6.39883 21 7.20854V13.5486C21 14.3583 20.8462 15.052 20.5385 15.6296C20.2362 16.2072 19.7962 16.6498 19.2186 16.9575C18.641 17.2652 17.942 17.4191 17.1215 17.4191H11.9393L8.91903 20.1235C8.7085 20.3179 8.52497 20.4555 8.36842 20.5365C8.21727 20.6229 8.05263 20.666 7.87449 20.666Z"
                fill="inherit"
            />
        </svg>
    );
};
