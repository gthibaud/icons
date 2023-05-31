import { IconProps } from './types';

export const Factory = (props: IconProps) => {
    return (
        <svg
            width={props.width}
            width={props.height}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M20 20H0V8.00003L7 5.00003V7.00003L12 5.00003V8.00003H15L16 3.05176e-05H19L20 8.00003V20ZM10 7.95003L5 9.95003V8.00003L2 9.32003V18H18V10H10V7.95003ZM9 16H11V12H9V16ZM5 16H7V12H5V16ZM15 12H13V16H15V12Z"
                fill={props.color}
            />
        </svg>
    );
};
