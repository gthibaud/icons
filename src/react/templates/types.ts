export const generateTypes = (): string => {
    return `export interface IconProps {
    color?: string; // Hexadecimal color
    size?: string | number; // Size in pixels
    width?: string | number; // Width in pixels
    height?: string | number; // Height in pixels
    className?: string; // CSS class name
    style?: React.CSSProperties; // CSS style
    arialLabel?: string; // Aria label
}`;
}