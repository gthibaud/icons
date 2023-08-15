// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const Bike: FC<IconProps> = ({
    size = '1em',
    width,
    height,
    color,
    className,
    style,
    arialLabel,
}) => {
    return (
        <svg
            className={className}
            style={{ display: 'inline', margin: '0px 0.4ch 1px 0.4ch', ...style }}
            aria-label={arialLabel || 'bike icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M5.31385 18.9769C4.71779 18.9769 4.15871 18.8638 3.63661 18.6376C3.11451 18.4157 2.65549 18.1068 2.25957 17.7108C1.86799 17.3149 1.55908 16.8581 1.33284 16.3403C1.11095 15.8182 1 15.2591 1 14.6631C1 14.067 1.11095 13.5101 1.33284 12.9923C1.55473 12.4702 1.86364 12.0112 2.25957 11.6153C2.65549 11.2194 3.11451 10.9126 3.63661 10.6951C4.15871 10.4732 4.71779 10.3623 5.31385 10.3623C5.90992 10.3623 6.469 10.4732 6.9911 10.6951C7.5132 10.9126 7.97004 11.2194 8.36161 11.6153C8.75754 12.0112 9.06645 12.4702 9.28834 12.9923C9.51023 13.5101 9.62118 14.067 9.62118 14.6631C9.62118 15.2591 9.50806 15.8182 9.28182 16.3403C9.05992 16.8581 8.75101 17.3149 8.35509 17.7108C7.96351 18.1068 7.50667 18.4157 6.98457 18.6376C6.46683 18.8638 5.90992 18.9769 5.31385 18.9769ZM5.31385 17.7174C5.73588 17.7174 6.13181 17.639 6.50163 17.4824C6.87145 17.3258 7.19559 17.1061 7.47404 16.8233C7.75685 16.5448 7.97656 16.2207 8.13319 15.8508C8.28982 15.481 8.36814 15.0851 8.36814 14.6631C8.36814 14.2454 8.28982 13.8516 8.13319 13.4818C7.97656 13.112 7.75685 12.7879 7.47404 12.5094C7.19559 12.2266 6.87145 12.0069 6.50163 11.8502C6.13181 11.6936 5.73588 11.6153 5.31385 11.6153C4.89617 11.6153 4.50025 11.6936 4.12608 11.8502C3.75625 12.0069 3.43212 12.2266 3.15366 12.5094C2.87521 12.7879 2.65549 13.112 2.49451 13.4818C2.33788 13.8473 2.25957 14.241 2.25957 14.6631C2.25957 15.0894 2.33788 15.4875 2.49451 15.8574C2.65549 16.2272 2.87521 16.5513 3.15366 16.8298C3.43212 17.1082 3.75625 17.3258 4.12608 17.4824C4.4959 17.639 4.89182 17.7174 5.31385 17.7174ZM18.6927 18.9769C18.0966 18.9769 17.5375 18.866 17.0154 18.6441C16.4933 18.4222 16.0343 18.1133 15.6384 17.7174C15.2425 17.3214 14.9314 16.8624 14.7051 16.3403C14.4832 15.8182 14.3723 15.2591 14.3723 14.6631C14.3723 14.067 14.4832 13.5101 14.7051 12.9923C14.9314 12.4702 15.2425 12.0134 15.6384 11.6218C16.0343 11.2259 16.4933 10.917 17.0154 10.6951C17.5375 10.4732 18.0966 10.3623 18.6927 10.3623C19.2887 10.3623 19.8456 10.4732 20.3634 10.6951C20.8855 10.917 21.3423 11.2259 21.7339 11.6218C22.1298 12.0134 22.4387 12.4702 22.6606 12.9923C22.8869 13.5101 23 14.067 23 14.6631C23 15.2591 22.8869 15.8182 22.6606 16.3403C22.4387 16.8581 22.1298 17.3149 21.7339 17.7108C21.338 18.1068 20.8811 18.4157 20.3634 18.6376C19.8456 18.8638 19.2887 18.9769 18.6927 18.9769ZM18.6927 17.7174C19.1147 17.7174 19.5085 17.639 19.8739 17.4824C20.2437 17.3258 20.5679 17.1061 20.8463 16.8233C21.1248 16.5448 21.3423 16.2207 21.499 15.8508C21.6599 15.481 21.7404 15.0851 21.7404 14.6631C21.7404 14.2454 21.6599 13.8538 21.499 13.4883C21.3423 13.1185 21.1248 12.7944 20.8463 12.5159C20.5679 12.2331 20.2437 12.0134 19.8739 11.8568C19.5085 11.6958 19.1147 11.6153 18.6927 11.6153C18.2706 11.6153 17.8725 11.6936 17.4984 11.8502C17.1285 12.0069 16.8044 12.2266 16.526 12.5094C16.2475 12.7879 16.0278 13.112 15.8668 13.4818C15.7102 13.8516 15.6319 14.2454 15.6319 14.6631C15.6319 15.2287 15.7689 15.7442 16.043 16.2098C16.3171 16.671 16.6848 17.0364 17.146 17.3062C17.6115 17.5803 18.1271 17.7174 18.6927 17.7174ZM12.3035 5.81999C12.3035 5.65031 12.3644 5.50456 12.4862 5.38273C12.608 5.26091 12.7538 5.2 12.9235 5.2H14.927C15.3404 5.2 15.6166 5.37185 15.7559 5.71557L19.2931 14.5978L18.1314 14.9959L14.7704 6.49872C14.753 6.45956 14.7204 6.43999 14.6725 6.43999H12.9235C12.7538 6.43999 12.608 6.38125 12.4862 6.26378C12.3644 6.14195 12.3035 5.99402 12.3035 5.81999ZM16.7152 10.2383L9.52981 11.2303V10.0686L16.7152 9.07659V10.2383ZM11.1418 15.381H5.41827V14.2193H11.1418V15.381ZM11.9249 16.1837C11.6421 16.1837 11.3854 16.1162 11.1549 15.9814C10.9286 15.8465 10.748 15.6659 10.6132 15.4397C10.4826 15.2091 10.4196 14.9589 10.4239 14.6892C10.4239 14.4107 10.4913 14.1605 10.6262 13.9387C10.7655 13.7124 10.946 13.534 11.1679 13.4035C11.3941 13.2686 11.6465 13.2012 11.9249 13.2012C12.199 13.2012 12.4492 13.2686 12.6755 13.4035C12.9017 13.534 13.0823 13.7124 13.2171 13.9387C13.352 14.1649 13.4195 14.4151 13.4195 14.6892C13.4195 14.9676 13.352 15.22 13.2171 15.4462C13.0823 15.6681 12.9017 15.8465 12.6755 15.9814C12.4492 16.1162 12.199 16.1837 11.9249 16.1837ZM11.9315 15.1525C12.062 15.1525 12.1708 15.109 12.2578 15.022C12.3448 14.9306 12.3883 14.824 12.3883 14.7022C12.3883 14.5673 12.3426 14.4564 12.2513 14.3694C12.1642 14.278 12.0576 14.2323 11.9315 14.2323C11.7966 14.2323 11.6835 14.278 11.5921 14.3694C11.5007 14.4608 11.4551 14.5717 11.4551 14.7022C11.4551 14.824 11.5007 14.9306 11.5921 15.022C11.6835 15.109 11.7966 15.1525 11.9315 15.1525ZM5.31385 15.6355C5.03975 15.6355 4.80698 15.5419 4.61554 15.3548C4.42846 15.1634 4.33709 14.9328 4.34144 14.6631C4.34579 14.3846 4.43934 14.154 4.62207 13.9713C4.80916 13.7842 5.03975 13.6907 5.31385 13.6907C5.58796 13.6907 5.81855 13.7842 6.00564 13.9713C6.19707 14.1584 6.29279 14.389 6.29279 14.6631C6.29279 14.9328 6.19707 15.1634 6.00564 15.3548C5.8142 15.5419 5.5836 15.6355 5.31385 15.6355ZM18.6927 15.642C18.4186 15.642 18.1858 15.5463 17.9944 15.3548C17.8029 15.1634 17.7094 14.9328 17.7137 14.6631C17.7181 14.3846 17.8138 14.154 18.0009 13.9713C18.1923 13.7885 18.4229 13.6972 18.6927 13.6972C18.9668 13.6972 19.1952 13.7907 19.3779 13.9778C19.565 14.1605 19.6586 14.389 19.6586 14.6631C19.6586 14.9328 19.565 15.1634 19.3779 15.3548C19.1908 15.5463 18.9624 15.642 18.6927 15.642ZM11.6182 13.6384L15.4752 9.61827L16.9502 9.64438L12.6624 14.2258L11.6182 13.6384ZM4.79175 14.3563L8.8054 10.0882L9.82349 10.7538L5.82943 14.9372L4.79175 14.3563ZM10.9134 14.3302L7.70246 8.21513L8.90982 7.95408L11.938 13.5928L10.9134 14.3302ZM6.35153 7.79092C6.35153 7.62124 6.41244 7.47548 6.53426 7.35366C6.65609 7.23184 6.80184 7.17093 6.97152 7.17093H9.88876C10.0584 7.17093 10.2042 7.23184 10.326 7.35366C10.4522 7.47548 10.5153 7.62124 10.5153 7.79092C10.5153 7.96495 10.4544 8.11288 10.3325 8.2347C10.2107 8.35218 10.0628 8.41091 9.88876 8.41091H6.97152C6.79749 8.41091 6.64956 8.35218 6.52774 8.2347C6.41026 8.11288 6.35153 7.96495 6.35153 7.79092Z"
                fill="inherit"
            />
        </svg>
    );
};
