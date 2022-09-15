# Info...

BB-Social-Widget.zip is an example OCM Component package that can be deployed - it is a zip of all the assets including the BB-Social-Widget folder.

Make sure you update BB-Social-Widget.zip\BB-Social-Widget\assets\build\ folder.

And add the following 2 files from the ./dist folder into the build folder.

- ocm-social-widget.js
- ocm-social-widget.umd.cjs

Also rename .cjs to .js

Without these the component will not work.

# Generate dist folder

Run the build script to generate the dist folder with the component scripts.

```
npm run build
```
