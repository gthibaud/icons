// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const Gear: FC<IconProps> = ({
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
            aria-label={arialLabel || 'gear icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.071 21.9818H12.929C13.3236 21.9818 13.6667 21.8664 13.9581 21.6357C14.2495 21.411 14.4378 21.1105 14.5228 20.734L14.878 19.1858L15.0874 19.122L16.4353 19.9417C16.7632 20.1542 17.1093 20.2331 17.4736 20.1785C17.844 20.1299 18.1688 19.966 18.4481 19.6867L19.7322 18.4116C20.0115 18.1263 20.1724 17.8014 20.2149 17.4371C20.2635 17.0668 20.1846 16.7176 19.9781 16.3898L19.1403 15.0601L19.2222 14.8688L20.7523 14.5045C21.1287 14.4134 21.4293 14.2222 21.6539 13.9308C21.8846 13.6393 22 13.2963 22 12.9016V11.1165C22 10.7219 21.8846 10.3788 21.6539 10.0874C21.4293 9.79596 21.1287 9.60471 20.7523 9.51363L19.2313 9.14022L19.1494 8.93986L19.9872 7.61017C20.1937 7.2823 20.2726 6.93622 20.224 6.57192C20.1815 6.20762 20.0176 5.87975 19.7322 5.58831L18.4481 4.30416C18.1749 4.03093 17.8531 3.87004 17.4827 3.82146C17.1184 3.76682 16.7723 3.84271 16.4444 4.04915L15.0965 4.87793L14.878 4.79596L14.5228 3.24769C14.4378 2.87125 14.2495 2.5707 13.9581 2.34605C13.6667 2.11533 13.3236 1.99997 12.929 1.99997H11.071C10.6764 1.99997 10.3333 2.11533 10.0419 2.34605C9.75046 2.57678 9.56223 2.87732 9.47723 3.24769L9.11293 4.79596L8.89435 4.87793L7.55556 4.04915C7.22161 3.84271 6.8725 3.76682 6.5082 3.82146C6.1439 3.87004 5.8221 4.03093 5.5428 4.30416L4.26776 5.58831C3.98239 5.87975 3.81542 6.20762 3.76685 6.57192C3.72435 6.93622 3.80631 7.2823 4.01275 7.61017L4.84153 8.93986L4.76867 9.14022L3.24772 9.51363C2.86521 9.60471 2.56163 9.79596 2.33698 10.0874C2.11233 10.3788 2 10.7219 2 11.1165V12.9016C2 13.2963 2.11233 13.6393 2.33698 13.9308C2.5677 14.2222 2.87128 14.4134 3.24772 14.5045L4.77778 14.8688L4.85064 15.0601L4.02186 16.3898C3.80935 16.7176 3.72435 17.0668 3.76685 17.4371C3.81542 17.8014 3.98239 18.1263 4.26776 18.4116L5.55191 19.6867C5.82514 19.966 6.1439 20.1299 6.5082 20.1785C6.87857 20.2331 7.23376 20.1542 7.57377 19.9417L8.91257 19.122L9.11293 19.1858L9.47723 20.734C9.56223 21.1105 9.75046 21.411 10.0419 21.6357C10.3333 21.8664 10.6764 21.9818 11.071 21.9818ZM11.3625 20.1603C11.2168 20.1603 11.1318 20.0904 11.1075 19.9508L10.5701 17.7195C10.2726 17.6587 9.98118 17.5707 9.69581 17.4553C9.41651 17.3339 9.15847 17.1973 8.92168 17.0455L6.96357 18.2477C6.85428 18.3266 6.74499 18.3145 6.6357 18.2113L5.74317 17.3187C5.65209 17.2277 5.63995 17.1184 5.70674 16.9909L6.91803 15.0419C6.77838 14.8051 6.65088 14.5501 6.53552 14.2768C6.42016 13.9975 6.32908 13.7091 6.26229 13.4116L4.02186 12.8834C3.88828 12.8591 3.82149 12.7741 3.82149 12.6284V11.3807C3.82149 11.241 3.88828 11.159 4.02186 11.1348L6.25319 10.5974C6.31998 10.2878 6.41409 9.99329 6.53552 9.71399C6.65695 9.42863 6.78142 9.17665 6.90893 8.95808L5.70674 7.00908C5.62781 6.88157 5.63388 6.76925 5.72495 6.6721L6.62659 5.79778C6.72981 5.70064 6.84214 5.68546 6.96357 5.75225L8.90346 6.93622C9.11597 6.80264 9.37098 6.67514 9.66849 6.5537C9.97207 6.4262 10.2757 6.32602 10.5792 6.25316L11.1075 4.03093C11.1318 3.89129 11.2168 3.82146 11.3625 3.82146H12.6375C12.7832 3.82146 12.8652 3.89129 12.8834 4.03093L13.4299 6.27137C13.7395 6.33816 14.031 6.43227 14.3042 6.5537C14.5835 6.67514 14.8415 6.80568 15.0783 6.94532L17.0273 5.76135C17.1488 5.69457 17.2611 5.70671 17.3643 5.79778L18.2568 6.68121C18.354 6.77835 18.3631 6.88764 18.2842 7.00908L17.082 8.95808C17.2095 9.17665 17.3339 9.42863 17.4554 9.71399C17.5768 9.99329 17.6709 10.2847 17.7377 10.5883L19.9781 11.1348C20.1117 11.159 20.1785 11.241 20.1785 11.3807V12.6284C20.1785 12.7741 20.1117 12.8591 19.9781 12.8834L17.7377 13.4116C17.6648 13.7031 17.5707 13.9915 17.4554 14.2768C17.34 14.5561 17.2125 14.8111 17.0729 15.0419L18.275 16.9909C18.354 17.1123 18.3449 17.2185 18.2477 17.3096L17.3552 18.2022C17.252 18.3054 17.1427 18.3175 17.0273 18.2386L15.0783 17.0455C14.8355 17.1973 14.5774 17.3309 14.3042 17.4462C14.031 17.5616 13.7395 17.6527 13.4299 17.7195L12.8834 19.9508C12.8652 20.0904 12.7832 20.1603 12.6375 20.1603H11.3625ZM12 15.4426C12.6315 15.4426 13.2083 15.2878 13.7304 14.9781C14.2526 14.6624 14.6685 14.2434 14.9781 13.7213C15.2878 13.1991 15.4426 12.6223 15.4426 11.9909C15.4426 11.3655 15.2878 10.7917 14.9781 10.2696C14.6685 9.74739 14.2526 9.33148 13.7304 9.02183C13.2083 8.71217 12.6315 8.55735 12 8.55735C11.3685 8.55735 10.7917 8.71217 10.2696 9.02183C9.74742 9.33148 9.32848 9.74739 9.01275 10.2696C8.7031 10.7917 8.54827 11.3655 8.54827 11.9909C8.54827 12.6223 8.7031 13.1991 9.01275 13.7213C9.32848 14.2434 9.74742 14.6624 10.2696 14.9781C10.7917 15.2878 11.3685 15.4426 12 15.4426ZM12 13.7668C11.6782 13.7668 11.3837 13.6879 11.1166 13.53C10.8494 13.3661 10.6339 13.1505 10.4699 12.8834C10.3121 12.6162 10.2332 12.3187 10.2332 11.9909C10.2332 11.6691 10.3121 11.3746 10.4699 11.1074C10.6339 10.8403 10.8494 10.6278 11.1166 10.4699C11.3837 10.3121 11.6782 10.2331 12 10.2331C12.3157 10.2331 12.6041 10.3151 12.8652 10.479C13.1324 10.6369 13.3449 10.8494 13.5027 11.1165C13.6667 11.3776 13.7486 11.6691 13.7486 11.9909C13.7486 12.3127 13.6667 12.6102 13.5027 12.8834C13.3449 13.1505 13.1324 13.3661 12.8652 13.53C12.6041 13.6879 12.3157 13.7668 12 13.7668Z"
                fill="inherit"
            />
        </svg>
    );
};
