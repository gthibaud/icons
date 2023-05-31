import { IconProps } from './types';

export const ChevronBottom = (props: IconProps) => {
    return (
        <svg
            width={props.width}
            width={props.height}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.99445 15.6917C10.4714 15.6917 10.8819 15.5031 11.2479 15.137L19.5563 6.61789C19.8447 6.32948 20 5.97452 20 5.553C20 4.68777 19.3123 4.00003 18.4581 4.00003C18.0366 4.00003 17.6373 4.16642 17.3267 4.47701L10.0055 12.02L2.67332 4.47701C2.36273 4.17751 1.97449 4.00003 1.54187 4.00003C0.687743 4.00003 0 4.68777 0 5.553C0 5.97452 0.155297 6.32948 0.443705 6.62898L8.75208 15.137C9.14032 15.5142 9.52856 15.6917 9.99445 15.6917Z"
                fill={props.color}
            />
        </svg>
    );
};
