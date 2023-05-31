import { IconProps } from './types';

export const Facebook = (props: IconProps) => {
    return (
        <svg
            width={props.width}
            width={props.height}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10 3.05176e-05C4.4775 3.05176e-05 0 4.47753 0 10C0 15.0134 3.69333 19.1534 8.505 19.8767V12.65H6.03083V10.0217H8.505V8.27253C8.505 5.3767 9.91583 4.10586 12.3225 4.10586C13.475 4.10586 14.085 4.1917 14.3733 4.23003V6.5242H12.7317C11.71 6.5242 11.3533 7.49336 11.3533 8.58503V10.0217H14.3475L13.9417 12.65H11.3533V19.8975C16.2342 19.2359 20 15.0625 20 10C20 4.47753 15.5225 3.05176e-05 10 3.05176e-05Z"
                fill={props.color}
            />
        </svg>
    );
};
