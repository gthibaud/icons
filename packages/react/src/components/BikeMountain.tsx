// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const BikeMountain: FC<IconProps> = ({
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
            aria-label={arialLabel || 'bike-mountain icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M5.84547 20.5831C5.23033 20.6861 4.63381 20.6659 4.05592 20.5226C3.47878 20.3838 2.95171 20.1443 2.47472 19.8041C2.00223 19.4631 1.60452 19.045 1.2816 18.5498C0.96242 18.0493 0.75135 17.4915 0.648389 16.8763C0.545429 16.2612 0.563729 15.6673 0.703291 15.0947C0.842101 14.5175 1.08161 13.9905 1.42182 13.5135C1.76203 13.0365 2.18275 12.6406 2.68398 12.3259C3.18447 12.0068 3.74228 11.7957 4.35742 11.6927C4.97257 11.5898 5.56871 11.6077 6.14585 11.7465C6.72224 11.8808 7.24668 12.1185 7.71918 12.4594C8.19617 12.7996 8.59425 13.22 8.91343 13.7205C9.23186 14.2165 9.44255 14.772 9.54551 15.3872C9.64847 16.0023 9.62831 16.5988 9.485 17.1767C9.34544 17.7494 9.10556 18.2742 8.76535 18.7512C8.42963 19.2274 8.01153 19.6251 7.51105 19.9443C7.0158 20.2672 6.46061 20.4802 5.84547 20.5831ZM5.6279 19.2832C6.06344 19.2103 6.45851 19.0611 6.81311 18.8356C7.16771 18.6101 7.46427 18.3273 7.70279 17.9874C7.94655 17.6512 8.11731 17.2787 8.21507 16.87C8.31283 16.4613 8.32527 16.0392 8.25237 15.6036C8.18022 15.1726 8.03138 14.7797 7.80586 14.4251C7.58033 14.0705 7.2976 13.774 6.95764 13.5355C6.62142 13.2917 6.24896 13.1209 5.84025 13.0232C5.43153 12.9254 5.00941 12.913 4.57387 12.9859C4.14282 13.058 3.74775 13.2072 3.38865 13.4335C3.03405 13.659 2.73749 13.9418 2.49898 14.2817C2.25971 14.6172 2.08895 14.9897 1.98669 15.3991C1.88818 15.8034 1.87537 16.2232 1.94827 16.6588C2.02192 17.0988 2.17151 17.4961 2.39703 17.8507C2.62705 18.2046 2.90979 18.5011 3.24525 18.7404C3.58072 18.9797 3.95281 19.1482 4.36152 19.2459C4.77023 19.3437 5.19236 19.3561 5.6279 19.2832ZM19.6525 18.2721C19.0374 18.3751 18.4412 18.3572 17.8641 18.2184C17.2869 18.0796 16.7599 17.8401 16.2829 17.4998C15.8059 17.1596 15.4056 16.7397 15.0819 16.2399C14.7627 15.7394 14.5517 15.1816 14.4487 14.5665C14.3457 13.9514 14.364 13.3575 14.5036 12.7848C14.6469 12.2069 14.889 11.6817 15.23 11.2092C15.5702 10.7322 15.9905 10.3341 16.491 10.015C16.9915 9.69579 17.5493 9.48472 18.1645 9.38176C18.7796 9.2788 19.3735 9.2971 19.9462 9.43666C20.5233 9.57547 21.0481 9.81535 21.5206 10.1563C21.9969 10.492 22.3946 10.9101 22.7137 11.4106C23.0367 11.9059 23.2496 12.4611 23.3526 13.0762C23.4555 13.6913 23.4353 14.2879 23.292 14.8657C23.1525 15.4384 22.9126 15.9632 22.5724 16.4402C22.2322 16.9172 21.8141 17.3149 21.3181 17.6333C20.8228 17.9562 20.2677 18.1692 19.6525 18.2721ZM19.4349 16.9723C19.8705 16.8994 20.2633 16.7505 20.6134 16.5258C20.968 16.3002 21.2646 16.0175 21.5031 15.6775C21.7424 15.3421 21.9109 14.97 22.0086 14.5613C22.1109 14.1518 22.1256 13.7293 22.0527 13.2938C21.9805 12.8627 21.8298 12.4725 21.6006 12.1231C21.375 11.7685 21.0945 11.4716 20.7591 11.2323C20.4229 10.9886 20.0504 10.8178 19.6417 10.7201C19.2367 10.6171 18.8165 10.602 18.3809 10.6749C17.9454 10.7478 17.5481 10.8974 17.189 11.1237C16.8344 11.3492 16.5378 11.6319 16.2993 11.9719C16.06 12.3073 15.8893 12.6798 15.787 13.0893C15.6892 13.498 15.6764 13.9179 15.7486 14.3489C15.8463 14.9326 16.0768 15.441 16.4401 15.8741C16.8026 16.3027 17.2451 16.6164 17.7677 16.8151C18.2955 17.0176 18.8512 17.07 19.4349 16.9723ZM10.7862 5.79773C10.7568 5.62262 10.7945 5.46168 10.8992 5.31491C11.0039 5.16815 11.1438 5.08011 11.3189 5.0508L13.3866 4.70472C13.8131 4.63332 14.128 4.76296 14.331 5.09362L19.5157 13.6492L18.3856 14.2607L13.4493 6.07206C13.4246 6.03466 13.3875 6.02009 13.3381 6.02836L11.5331 6.33048C11.358 6.35979 11.1974 6.32435 11.0514 6.22416C10.9046 6.11948 10.8162 5.97734 10.7862 5.79773ZM16.1023 9.59536L8.85826 11.8603L8.6576 10.6614L15.9016 8.39651L16.1023 9.59536ZM11.2388 15.8654L5.33209 16.854L5.13142 15.6552L11.0381 14.6665L11.2388 15.8654ZM12.1857 16.5585C11.8938 16.6074 11.6173 16.5821 11.356 16.4828C11.0992 16.3826 10.8817 16.2275 10.7034 16.0173C10.5289 15.8019 10.4206 15.5546 10.3784 15.2755C10.3303 14.9881 10.3567 14.7183 10.4576 14.466C10.5622 14.2084 10.7177 13.9932 10.9242 13.8201C11.1344 13.6418 11.3831 13.5287 11.6705 13.4806C11.9534 13.4332 12.2232 13.4596 12.48 13.5597C12.736 13.6553 12.9532 13.8082 13.1314 14.0184C13.3097 14.2286 13.4225 14.4751 13.4699 14.758C13.518 15.0454 13.492 15.3175 13.3919 15.5742C13.291 15.8265 13.1355 16.0418 12.9253 16.2201C12.7151 16.3984 12.4686 16.5112 12.1857 16.5585ZM12.0143 15.4932C12.149 15.4707 12.2537 15.407 12.3285 15.3022C12.4025 15.1929 12.429 15.0753 12.408 14.9496C12.3847 14.8104 12.3184 14.7038 12.209 14.6298C12.1035 14.5505 11.9856 14.5218 11.8554 14.5436C11.7162 14.5669 11.6073 14.6336 11.5288 14.7436C11.4503 14.8537 11.4223 14.9761 11.4449 15.1108C11.4659 15.2365 11.5315 15.3386 11.6415 15.4172C11.7509 15.4912 11.8751 15.5165 12.0143 15.4932ZM5.26829 17.1347C4.98541 17.1821 4.72903 17.1257 4.49915 16.9657C4.27301 16.8005 4.13889 16.5783 4.09678 16.2992C4.05317 16.011 4.10988 15.7569 4.2669 15.5368C4.42766 15.3114 4.64947 15.175 4.93235 15.1277C5.21523 15.0803 5.46936 15.137 5.69475 15.2978C5.92463 15.4578 6.06324 15.6792 6.11059 15.9621C6.15719 16.2405 6.09824 16.495 5.93374 16.7256C5.76849 16.9518 5.54667 17.0881 5.26829 17.1347ZM19.0765 14.8305C18.7936 14.8778 18.5368 14.8193 18.3062 14.6548C18.0756 14.4903 17.9392 14.2685 17.8971 13.9893C17.8535 13.7012 17.9124 13.4467 18.0739 13.2258C18.2399 13.0041 18.4621 12.87 18.7405 12.8234C19.0234 12.7761 19.2753 12.8331 19.4962 12.9947C19.7208 13.1509 19.8568 13.3705 19.9042 13.6534C19.9508 13.9318 19.8941 14.1859 19.734 14.4158C19.574 14.6457 19.3548 14.7839 19.0765 14.8305ZM11.4295 13.9848L14.7155 9.16971L16.2422 8.94188L12.6086 14.4106L11.4295 13.9848ZM4.50852 15.9048L7.91338 10.8068L9.07905 11.3179L5.67974 16.325L4.50852 15.9048ZM10.8216 14.8205L6.4516 9.06428L7.65251 8.58632L11.7516 13.8824L10.8216 14.8205ZM4.98415 8.85985C4.95484 8.68474 4.99253 8.5238 5.09721 8.37703C5.20189 8.23026 5.34178 8.14223 5.5169 8.11292L8.52751 7.60901C8.70262 7.5797 8.86356 7.61739 9.01033 7.72206C9.16158 7.82599 9.25186 7.96551 9.28117 8.14063C9.31124 8.32023 9.27393 8.48342 9.16925 8.63018C9.06382 8.77246 8.9213 8.85863 8.74169 8.88869L5.73109 9.39259C5.55148 9.42266 5.38867 9.38759 5.24266 9.2874C5.10038 9.18197 5.01421 9.03945 4.98415 8.85985Z"
                fill="inherit"
            />
        </svg>
    );
};