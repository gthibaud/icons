import { IconProps } from './types';

export const Link = (props: IconProps) => {
    return (
        <svg
            width={props.width}
            width={props.height}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.32813 13.9458L10.8796 12.3943C9.88812 12.2933 9.11699 11.9445 8.58454 11.412C7.06983 9.89733 7.06983 7.77673 8.57536 6.27119L11.6691 3.17749C13.1838 1.67196 15.2952 1.67196 16.8099 3.17749C18.3338 4.70139 18.3246 6.822 16.8191 8.32753L15.4513 9.69537C15.7726 10.439 15.9011 11.3753 15.6899 12.1924L18.2604 9.62193C20.5738 7.33608 20.5738 4.05878 18.2512 1.73622C15.9286 -0.586347 12.6697 -0.567987 10.3747 1.72704L7.12491 4.96761C4.82988 7.27182 4.8207 10.5399 7.14327 12.8533C7.63899 13.3582 8.36422 13.7622 9.32813 13.9458ZM10.6684 6.05087L9.11699 7.61148C10.1084 7.71246 10.8796 8.05213 11.412 8.58457C12.9267 10.0993 12.9267 12.2291 11.4212 13.7254L8.3275 16.8191C6.81278 18.3247 4.69218 18.3338 3.18664 16.8191C1.66275 15.2952 1.67193 13.1838 3.17746 11.6783L4.5453 10.3104C4.224 9.56685 4.09547 8.62129 4.30662 7.80427L1.72701 10.3747C-0.577197 12.6697 -0.577197 15.9378 1.73619 18.2604C4.06793 20.583 7.32687 20.5738 9.6219 18.2696L12.8625 15.029C15.1667 12.7248 15.1759 9.46586 12.8533 7.1433C12.3576 6.63839 11.6323 6.23447 10.6684 6.05087Z"
                fill={props.color}
            />
        </svg>
    );
};