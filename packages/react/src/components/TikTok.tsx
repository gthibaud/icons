import { IconProps } from './types';

export const TikTok = (props: IconProps) => {
    return (
        <svg
            width={props.width}
            width={props.height}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M17.619 6.10352e-05H2.38095C1.0681 6.10352e-05 0 1.06816 0 2.38101V17.6191C0 18.932 1.0681 20.0001 2.38095 20.0001H17.619C18.9319 20.0001 20 18.932 20 17.6191V2.38101C20 1.06816 18.9319 6.10352e-05 17.619 6.10352e-05ZM15.7171 8.7253C15.609 8.7353 15.4995 8.74197 15.3886 8.74197C14.1395 8.74197 13.0419 8.09958 12.4033 7.12863C12.4033 9.67578 12.4033 12.5739 12.4033 12.6224C12.4033 14.8648 10.5852 16.6829 8.34286 16.6829C6.10048 16.6829 4.28238 14.8648 4.28238 12.6224C4.28238 10.3801 6.10048 8.56197 8.34286 8.56197C8.42762 8.56197 8.51048 8.56958 8.59381 8.57482V10.5758C8.51048 10.5658 8.42857 10.5505 8.34286 10.5505C7.1981 10.5505 6.27048 11.4782 6.27048 12.6229C6.27048 13.7677 7.1981 14.6953 8.34286 14.6953C9.48762 14.6953 10.4986 13.7934 10.4986 12.6486C10.4986 12.6034 10.5186 3.31816 10.5186 3.31816H12.431C12.611 5.02816 13.9914 6.37768 15.7171 6.50149V8.7253Z"
                fill={props.color}
            />
        </svg>
    );
};