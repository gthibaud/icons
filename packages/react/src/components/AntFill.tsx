// organize-imports-ignore
import React, { FC } from 'react';
import { IconProps } from './../types';

export const AntFill: FC<IconProps> = ({
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
            aria-label={arialLabel || 'ant-fill icon'}
            width={width || size}
            height={height || size}
            viewBox="0 0 24 24"
            fill={color || 'inherit'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.9723 22C12.5639 22 13.1248 21.8549 13.655 21.5646C14.1908 21.28 14.6652 20.8865 15.0782 20.3842C15.4912 19.8875 15.8149 19.3238 16.0493 18.6931C16.2893 18.0625 16.4093 17.4039 16.4093 16.7174C16.4093 16.5053 16.3898 16.31 16.3507 16.1314C16.3116 15.9528 16.2558 15.7882 16.1833 15.6375C16.3061 15.671 16.4261 15.7044 16.5433 15.7379C16.6661 15.7658 16.786 15.7965 16.9033 15.83C17.1935 15.9082 17.386 16.0142 17.4809 16.1481C17.5814 16.2765 17.6121 16.4663 17.573 16.7174L16.9619 20.7275C16.9228 20.9675 16.9646 21.1544 17.0874 21.2884C17.2158 21.4223 17.3776 21.4893 17.573 21.4893C17.7795 21.4893 17.933 21.4279 18.0334 21.3051C18.1339 21.1879 18.2009 21.0261 18.2344 20.8196L18.9208 16.4746C18.999 15.9835 18.932 15.5984 18.7199 15.3194C18.5134 15.0347 18.1423 14.831 17.6065 14.7082L13.8308 13.8292L13.8225 13.7455C14.0066 13.6562 14.1573 13.5334 14.2745 13.3771C14.3917 13.2153 14.4782 13.0395 14.5341 12.8497L17.1042 12.4813C17.6288 12.4088 18.0111 12.2274 18.2511 11.9372C18.4967 11.647 18.6195 11.2423 18.6195 10.7233V7.82668C18.6195 7.62575 18.5636 7.46948 18.452 7.35786C18.3404 7.24066 18.1841 7.18205 17.9832 7.18205C17.7823 7.18205 17.626 7.24066 17.5144 7.35786C17.4028 7.46948 17.347 7.62575 17.347 7.82668V10.4638C17.347 10.7596 17.2716 10.9689 17.1209 11.0916C16.9702 11.2088 16.7581 11.287 16.4847 11.326L14.5675 11.5856C14.5229 11.4572 14.4587 11.3372 14.375 11.2256C14.2913 11.114 14.1936 11.0191 14.082 10.9409V10.8572C14.7964 10.7289 15.3461 10.4582 15.7312 10.0452C16.1163 9.62659 16.3089 9.09917 16.3089 8.46292C16.3089 7.92714 16.214 7.41925 16.0242 6.93927C15.84 6.4593 15.5833 6.03234 15.254 5.6584L15.3294 5.5998C15.7368 5.30958 15.9768 4.95797 16.0493 4.54497C16.1219 4.12638 16.027 3.68547 15.7647 3.22224L15.2708 2.41018C15.1145 2.13671 14.9136 1.99997 14.668 1.99997C14.495 1.99997 14.3499 2.05578 14.2327 2.1674C14.1211 2.27903 14.0652 2.41576 14.0652 2.57762C14.0652 2.65017 14.0708 2.71435 14.082 2.77017C14.0987 2.82598 14.1322 2.89574 14.1824 2.97946L14.6178 3.64082C14.7517 3.85849 14.8159 4.0622 14.8103 4.25196C14.8047 4.43614 14.7154 4.60357 14.5424 4.75426C14.5201 4.771 14.4978 4.79054 14.4755 4.81286C14.4531 4.82961 14.428 4.84635 14.4001 4.86309C14.0541 4.62868 13.6746 4.4473 13.2616 4.31893C12.8486 4.18498 12.4188 4.11801 11.9723 4.11801C11.5314 4.11801 11.1072 4.18498 10.6998 4.31893C10.2924 4.4473 9.91846 4.62589 9.57801 4.85472C9.55568 4.84356 9.53057 4.82681 9.50266 4.80449C9.48034 4.78217 9.45802 4.76263 9.43569 4.74589C9.26826 4.5952 9.17896 4.42776 9.1678 4.24359C9.16221 4.05941 9.22919 3.85849 9.36872 3.64082L9.80405 2.97946C9.84869 2.89574 9.87939 2.82598 9.89613 2.77017C9.91288 2.71435 9.92125 2.65017 9.92125 2.57762C9.92125 2.41576 9.86265 2.27903 9.74544 2.1674C9.63382 2.05578 9.4915 1.99997 9.31849 1.99997C9.06734 1.99997 8.86641 2.13671 8.71572 2.41018L8.22179 3.22224C7.95948 3.68547 7.8646 4.12638 7.93716 4.54497C8.00971 4.95797 8.2497 5.30958 8.65712 5.5998L8.71572 5.64166C8.38086 6.0156 8.11575 6.44534 7.92041 6.9309C7.73065 7.41646 7.63577 7.92714 7.63577 8.46292C7.63577 9.09917 7.82832 9.62659 8.21342 10.0452C8.6041 10.4582 9.15663 10.7289 9.87102 10.8572V10.9409C9.75382 11.0191 9.65335 11.114 9.56964 11.2256C9.4915 11.3372 9.43011 11.4572 9.38546 11.5856L7.46834 11.326C7.19486 11.287 6.98278 11.2088 6.83209 11.0916C6.6814 10.9689 6.60605 10.7596 6.60605 10.4638V7.82668C6.60605 7.62575 6.55024 7.46948 6.43862 7.35786C6.327 7.24066 6.17073 7.18205 5.9698 7.18205C5.76888 7.18205 5.61261 7.24066 5.50099 7.35786C5.38937 7.46948 5.33355 7.62575 5.33355 7.82668V10.7233C5.33355 11.2423 5.45355 11.647 5.69354 11.9372C5.93911 12.2274 6.32421 12.4088 6.84883 12.4813L9.41895 12.8497C9.47476 13.0395 9.56127 13.2153 9.67847 13.3771C9.79567 13.5334 9.94636 13.6562 10.1305 13.7455V13.8292L6.34653 14.7082C5.80516 14.831 5.43122 15.0347 5.22472 15.3194C5.01822 15.5984 4.95404 15.9835 5.03217 16.4746L5.71865 20.8196C5.74656 21.0261 5.81074 21.1879 5.9112 21.3051C6.01724 21.4279 6.17352 21.4893 6.38002 21.4893C6.57536 21.4893 6.73442 21.4223 6.85721 21.2884C6.98557 21.1544 7.03022 20.9675 6.99115 20.7275L6.38002 16.7174C6.34095 16.4663 6.36886 16.2765 6.46374 16.1481C6.5642 16.0142 6.75954 15.9082 7.04975 15.83C7.16696 15.7965 7.28416 15.7658 7.40137 15.7379C7.52415 15.7044 7.64415 15.671 7.76135 15.6375C7.68879 15.7882 7.63298 15.9528 7.59392 16.1314C7.56043 16.31 7.54369 16.5053 7.54369 16.7174C7.54369 17.4039 7.66089 18.0625 7.8953 18.6931C8.13529 19.3238 8.46178 19.8875 8.87479 20.3842C9.28779 20.8865 9.7594 21.28 10.2896 21.5646C10.8198 21.8549 11.3807 22 11.9723 22Z"
                fill="inherit"
            />
        </svg>
    );
};
