# Icons

Grégoire's icons and packages.

## Add an icon

Add the SVG icon to the folder [/icons](/icons). The icon **must**:
- Have a width, size and box of 20 pixels;
- Have a fill property (that will be replaced with a variable value).

To generate the SVG packages (for now only React), run `yarn generate`. The command `yarn release` will generate and publish the package all at once.