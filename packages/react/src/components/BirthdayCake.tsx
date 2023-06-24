// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const BirthdayCake: FC<IconProps> = ({
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
            aria-label={arialLabel || 'birthday-cake icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12.0036 6.54694C11.6936 6.54694 11.4271 6.42966 11.2043 6.19512C10.9863 5.95588 10.8773 5.6627 10.8773 5.31558C10.8773 4.96376 10.9354 4.66589 11.0517 4.42196C11.1679 4.17804 11.3181 3.94818 11.5022 3.7324C11.6524 3.57291 11.8244 3.49551 12.0182 3.5002C12.2168 3.50489 12.3888 3.59636 12.5341 3.77462C12.7231 3.98571 12.8684 4.21322 12.9701 4.45714C13.0767 4.69638 13.13 4.98252 13.13 5.31558C13.13 5.6627 13.021 5.95588 12.803 6.19512C12.5898 6.42966 12.3234 6.54694 12.0036 6.54694ZM11.4368 9.95252V5.50556H12.5559V9.95252H11.4368ZM6.88777 13.5622V11.6342C6.88777 10.8555 7.09608 10.2668 7.51272 9.86809C7.93419 9.46467 8.5543 9.26296 9.37303 9.26296H14.6342C15.453 9.26296 16.0707 9.46467 16.4873 9.86809C16.9088 10.2668 17.1195 10.8555 17.1195 11.6342V13.5622H15.5862V11.7046C15.5862 11.3809 15.5038 11.1417 15.3391 10.9869C15.1744 10.8274 14.9322 10.7476 14.6124 10.7476H9.39483C9.07509 10.7476 8.83286 10.8274 8.66815 10.9869C8.50343 11.1417 8.42107 11.3809 8.42107 11.7046V13.5622H6.88777ZM4.28623 19.9512V15.3635C4.28623 14.5801 4.49697 13.989 4.91845 13.5903C5.33993 13.1916 5.95761 12.9922 6.7715 12.9922H17.2358C18.0545 12.9922 18.6722 13.1939 19.0888 13.5973C19.5055 13.9961 19.7138 14.5848 19.7138 15.3635V19.9512H18.1732V15.4338C18.1732 15.1102 18.0908 14.8709 17.9261 14.7161C17.7662 14.5566 17.5264 14.4769 17.2067 14.4769H6.7933C6.47356 14.4769 6.23133 14.5566 6.06661 14.7161C5.90674 14.8709 5.82681 15.1102 5.82681 15.4338V19.9512H4.28623ZM12.0109 16.8974C11.8413 16.8974 11.6766 16.942 11.5168 17.0311C11.3569 17.1155 11.1873 17.2117 11.0081 17.3196C10.8337 17.4322 10.6375 17.5307 10.4195 17.6151C10.2015 17.6995 9.94954 17.7418 9.66371 17.7418C9.38757 17.7418 9.14534 17.6995 8.93702 17.6151C8.7287 17.5307 8.54219 17.4322 8.37747 17.3196C8.21276 17.2117 8.05531 17.1155 7.90513 17.0311C7.75979 16.942 7.60961 16.8974 7.45458 16.8974C7.29471 16.8974 7.13969 16.942 6.9895 17.0311C6.84417 17.1155 6.6843 17.2117 6.50989 17.3196C6.33549 17.4322 6.13686 17.5307 5.91401 17.6151C5.69116 17.6995 5.42713 17.7418 5.12192 17.7418H4.85305V16.4963H5.12192C5.30117 16.4963 5.47315 16.4541 5.63787 16.3697C5.80743 16.2852 5.97941 16.1891 6.15382 16.0812C6.32822 15.9686 6.51958 15.8701 6.7279 15.7857C6.94106 15.7012 7.18329 15.659 7.45458 15.659C7.72588 15.659 7.96084 15.7012 8.15947 15.7857C8.35809 15.8701 8.53492 15.9686 8.68995 16.0812C8.84982 16.1891 9.00484 16.2852 9.15503 16.3697C9.31005 16.4541 9.47961 16.4963 9.66371 16.4963C9.88656 16.4963 10.0828 16.4541 10.2523 16.3697C10.4219 16.2852 10.589 16.1891 10.7537 16.0812C10.9184 15.9686 11.1001 15.8701 11.2987 15.7857C11.4974 15.7012 11.7348 15.659 12.0109 15.659C12.2822 15.659 12.5172 15.7012 12.7158 15.7857C12.9144 15.8701 13.0961 15.9686 13.2608 16.0812C13.4255 16.1891 13.5927 16.2852 13.7622 16.3697C13.9366 16.4541 14.1328 16.4963 14.3508 16.4963C14.5349 16.4963 14.7021 16.4541 14.8522 16.3697C15.0073 16.2852 15.1647 16.1891 15.3246 16.0812C15.4845 15.9686 15.6637 15.8701 15.8623 15.7857C16.061 15.7012 16.2935 15.659 16.56 15.659C16.8312 15.659 17.0711 15.7012 17.2794 15.7857C17.4925 15.8701 17.6863 15.9686 17.8607 16.0812C18.04 16.1891 18.2095 16.2852 18.3694 16.3697C18.5341 16.4541 18.7085 16.4963 18.8926 16.4963H19.1106V17.7418H18.8926C18.5874 17.7418 18.3234 17.6995 18.1005 17.6151C17.8777 17.5307 17.679 17.4322 17.5046 17.3196C17.3302 17.2117 17.1679 17.1155 17.0178 17.0311C16.8676 16.942 16.715 16.8974 16.56 16.8974C16.4049 16.8974 16.2523 16.942 16.1021 17.0311C15.9568 17.1155 15.8018 17.2117 15.6371 17.3196C15.4723 17.4322 15.2858 17.5307 15.0775 17.6151C14.8692 17.6995 14.627 17.7418 14.3508 17.7418C14.065 17.7418 13.8131 17.6995 13.5951 17.6151C13.3771 17.5307 13.1784 17.4322 12.9992 17.3196C12.8248 17.2117 12.6577 17.1155 12.4978 17.0311C12.3428 16.942 12.1805 16.8974 12.0109 16.8974ZM3.76302 20.5C3.5547 20.5 3.37545 20.4249 3.22527 20.2748C3.07509 20.1294 3 19.9559 3 19.7541C3 19.5477 3.07509 19.3718 3.22527 19.2264C3.37545 19.0857 3.5547 19.0153 3.76302 19.0153H20.237C20.4501 19.0153 20.6294 19.0857 20.7747 19.2264C20.9249 19.3718 21 19.5477 21 19.7541C21 19.9559 20.9249 20.1294 20.7747 20.2748C20.6294 20.4249 20.4501 20.5 20.237 20.5H3.76302Z"
                fill="inherit"
            />
        </svg>
    );
};
