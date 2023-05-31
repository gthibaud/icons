import { IconProps } from './types';

export const Comment = (props: IconProps) => {
    return (
        <svg
            width={props.width}
            width={props.height}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M5.93023 19.5081C6.55635 19.5081 7.05725 19.2487 7.82648 18.5778L10.8408 15.9392H15.5903C18.3274 15.9392 20 14.2487 20 11.5385V4.40075C20 1.69055 18.3274 3.05176e-05 15.5903 3.05176e-05H4.40072C1.67263 3.05176e-05 0 1.6816 0 4.40075V11.5385C0 14.2576 1.78891 15.9392 4.23077 15.9392H4.47227V17.8981C4.47227 18.8999 5.02683 19.5081 5.93023 19.5081ZM6.50268 16.8515V14.3918C6.50268 13.7746 6.20751 13.5421 5.6619 13.5421H4.56172C3.1127 13.5421 2.39714 12.8176 2.39714 11.3864V4.5528C2.39714 3.12168 3.1127 2.38822 4.56172 2.38822H15.4383C16.8784 2.38822 17.6029 3.12168 17.6029 4.5528V11.3864C17.6029 12.8176 16.8784 13.5421 15.4383 13.5421H10.6619C10.0358 13.5421 9.7585 13.6673 9.30233 14.1235L6.50268 16.8515Z"
                fill={props.color}
            />
        </svg>
    );
};
