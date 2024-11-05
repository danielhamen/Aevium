# Aevium Icon Library

The Aevium API includes its own Icon library.

## `libraries`

**NOTE THIS SECTION IS FOR LOW-LEVEL DEVEELOPMENT; FOR ANY ICON DESIGNS, USE THE PORTAL**

Inside the `/assets/icons` directory, there is a folder called `libraries`; this folder contains all icon files.

To design and publish an icon, follow these steps:

1. *ENSURE ICON DOES NOT EXIST AND IS NEEDED*: Most importantly, to ensure time is not wasted, if you are not working off of the [Work Board](/), post an [Icon Request](/).
2. After approval of the icon, first, create your working directory by creating a folder in the `/libraries` directory. Your folder name should be lowercase and follow `[a-z\.0-9]*` (e.g. "home", "mountain.2". etc), but it is advised to always check the current [Icon Library Parent Directory Convention](/) in case of any changes.
3. Next open up the `IconTemplate.ai` file and *Save As* inside the working directory (the directory just created).
4. Use the Pen tool to create the icon inside the `Curves` group.
5. When the Icon is completed, ensure the icon's styles follow: `border=0`, `corner_radius=0`, and `fill=#282828`.
6. Create the `manifest.json` file that follows the `IconLibraryManifest`.
7. Add the icon to the registry.
