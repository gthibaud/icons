import { IconProps } from './types';

export const HeartFill = (props: IconProps) => {
    return (
        <svg
            width={props.width}
            width={props.height}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10 19.5742C10.3349 19.5742 10.8325 19.2871 11.2919 18.9809C16.5359 15.5455 20 11.4498 20 7.33496C20 3.54549 17.3493 1.00003 14.2105 1.00003C12.2488 1.00003 10.8325 2.08137 10 3.64118C9.16746 2.08137 7.7512 1.00003 5.78947 1.00003C2.64115 1.00003 0 3.54549 0 7.33496C0 11.4498 3.45455 15.5455 8.69856 18.9809C9.16746 19.2871 9.66507 19.5742 10 19.5742Z"
                fill={props.color}
            />
        </svg>
    );
};
