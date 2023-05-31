import { IconProps } from './types';

export const Edit = (props: IconProps) => {
    return (
        <svg
            width={props.width}
            width={props.height}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M18.0899 4.54768L19.4854 3.15196C20.1519 2.48534 20.1728 1.70415 19.5375 1.05837L18.9439 0.454252C18.3086 -0.19153 17.5067 -0.129035 16.8402 0.516747L15.4447 1.90205L18.0899 4.54768ZM3.78062 18.8591L16.7881 5.82883L14.1533 3.19362L1.1458 16.2134L0.0418804 19.1194C-0.155992 19.6507 0.385553 20.1402 0.864611 19.9631L3.78062 18.8591Z"
                fill={props.color}
            />
        </svg>
    );
};
