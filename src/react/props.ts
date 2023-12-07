export const addPropsToSVG = (iconSVGSource: string, iconName: string): string => {
    iconSVGSource = iconSVGSource.replace(/width="24"/g, 'width={width || size}');
    iconSVGSource = iconSVGSource.replace(/height="24"/g, 'height={height || size}');
    iconSVGSource = iconSVGSource.replace(/fill="black"/g, 'fill="inherit"');
    iconSVGSource = iconSVGSource.replace(/fill="#000000"/g, 'fill="inherit"');
    iconSVGSource = iconSVGSource.replace(/fill="none"/g, 'fill={color || "inherit"}');
    iconSVGSource = iconSVGSource.replace(/fill-rule/g, 'fillRule');
    iconSVGSource = iconSVGSource.replace(/fill-opacity/g, 'fillOpacity');
    iconSVGSource = iconSVGSource.replace(/clip-rule/g, 'clipRule');
    iconSVGSource = iconSVGSource.replace(/<svg /g, `<svg className={className} style={{ display:'inline', margin: '0px 0.4ch 1px 0.4ch', ...style}} aria-label={arialLabel || "${iconName} icon"} `);
    return iconSVGSource;
};