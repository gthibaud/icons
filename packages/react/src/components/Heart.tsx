import { IconProps } from './types';

export const Heart = (props: IconProps) => {
    return (
        <svg
            width={props.width}
            width={props.height}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0 7.33496C0 11.4498 3.45455 15.5455 8.69856 18.9809C9.16746 19.2871 9.66507 19.5742 10 19.5742C10.3349 19.5742 10.8325 19.2871 11.2919 18.9809C16.5359 15.5455 20 11.4498 20 7.33496C20 3.54549 17.3493 1.00003 14.1627 1.00003C12.2488 1.00003 10.8325 1.83257 10 3.02874C9.16746 1.83257 7.7512 1.00003 5.82775 1.00003C2.64115 1.00003 0 3.54549 0 7.33496ZM2.7177 7.31582C2.7177 5.134 4.21053 3.62204 6.19139 3.62204C7.77033 3.62204 8.62201 4.52156 9.20574 5.3541C9.47368 5.73687 9.70335 5.90912 10 5.90912C10.2967 5.90912 10.4976 5.73687 10.7847 5.3541C11.4067 4.52156 12.2297 3.62204 13.799 3.62204C15.7799 3.62204 17.2727 5.134 17.2727 7.31582C17.2727 10.3397 14.2297 13.8804 10.1435 16.5981C10.0766 16.6364 10.0383 16.6651 10 16.6651C9.96172 16.6651 9.91388 16.6364 9.85646 16.5981C5.76077 13.8804 2.7177 10.3397 2.7177 7.31582Z"
                fill={props.color}
            />
        </svg>
    );
};