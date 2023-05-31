# Icons

Grégoire's icons and packages.

## Add an icon

Add the SVG icon to the folder [/icons](/icons). The icon **must**:

-   Have a width, size and box of 20 pixels;
-   Have a fill property (that will be replaced with a variable value).

To generate the SVG packages (for now only React), run `yarn generate`. The command `yarn release` will generate and publish the package all at once.

## Issues

Si la hauteur ou la largeur d’une icone est à 21 pixels, saisir toutes les icones, puis les faire glisser à droite ou à gauche sur la grille, puis réexporter. Le problème est dû au fait que le plugin LilGrid induit des mini décalages dans le positionnement des icônes ce qui les décale sur la grille (source : https://forum.figma.com/t/svg-exports-at-a-different-size-to-w-h-values-in-editor/1941/9)
