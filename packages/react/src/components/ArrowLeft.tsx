import { IconProps } from './types';

export const ArrowLeft = (props: IconProps) => {
    return (
        <svg
            width={props.width}
            width={props.height}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8.1775 2.00003C7.88167 2.00003 7.59641 2.11625 7.34284 2.35925L0.38035 9.32174C0.13735 9.55418 0 9.87113 0 10.1881C0 10.5156 0.13735 10.8326 0.38035 11.065L7.32171 18.0064C7.59641 18.2705 7.88167 18.3867 8.1775 18.3867C8.85367 18.3867 9.33967 17.9113 9.33967 17.2668C9.33967 16.9287 9.20233 16.6435 8.99102 16.4321L6.61384 14.0233L3.54992 11.2235L6.00106 11.3714H18.8061C19.514 11.3714 20 10.8854 20 10.1881C20 9.50135 19.514 9.01535 18.8061 9.01535H6.00106L3.54992 9.16326L6.61384 6.36348L8.99102 3.9546C9.20233 3.7433 9.33967 3.45804 9.33967 3.11995C9.33967 2.47547 8.85367 2.00003 8.1775 2.00003Z"
                fill={props.color}
            />
        </svg>
    );
};