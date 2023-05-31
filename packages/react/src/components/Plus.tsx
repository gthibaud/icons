import { IconProps } from './types';

export const Plus = (props: IconProps) => {
    return (
        <svg
            width={props.width}
            width={props.height}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.99409 20.0001C10.8565 20.0001 11.5653 19.2775 11.5653 18.4849V11.5502H18.4525C19.2794 11.5502 20 10.8509 20 10.0001C20 9.1609 19.2794 8.44994 18.4525 8.44994H11.5653V1.51521C11.5653 0.699362 10.8565 6.10352e-05 9.99409 6.10352e-05C9.14353 6.10352e-05 8.43473 0.699362 8.43473 1.51521V8.44994H1.54755C0.744241 8.44994 0 9.1609 0 10.0001C0 10.8509 0.744241 11.5502 1.54755 11.5502H8.43473V18.4849C8.43473 19.2775 9.14353 20.0001 9.99409 20.0001Z"
                fill={props.color}
            />
        </svg>
    );
};