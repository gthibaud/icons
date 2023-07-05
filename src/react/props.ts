export const addPropsToSVG = (iconSVGSource: string, iconName: string): string => {
    iconSVGSource = iconSVGSource.replace('width="24"', 'width={width || size}');
    iconSVGSource = iconSVGSource.replace('height="24"', 'height={height || size}');
    iconSVGSource = iconSVGSource.replace('fill="black"', 'fill="inherit"');
    iconSVGSource = iconSVGSource.replace('fill="#000000"', 'fill="inherit"');
    iconSVGSource = iconSVGSource.replace('fill="none"', 'fill={color || "inherit"}');
    iconSVGSource = iconSVGSource.replace('fill-rule', 'fillRule');
    iconSVGSource = iconSVGSource.replace('clip-rule', 'clipRule');
    iconSVGSource = iconSVGSource.replace('<svg ', `<svg className={className} style={{ display:'inline', margin: '0px 0.4ch 1px 0.4ch', ...style}} aria-label={arialLabel || "${iconName} icon"} `);
    return iconSVGSource;
};