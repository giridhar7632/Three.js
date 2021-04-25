# THREE.JS - INSTALLATION

There are a lot of ways to include Three.js in your project. You can use any of these following methods to get started using Three.js. Then open your favorite code editor and get going.

## Download the complete Three.js project

Download the complete Three.js project into your system. You can download it either from the [website](https://github.com/mrdoob/three.js/archive/master.zip) or [GitHub](https://github.com/mrdoob/three.js/). Extract the `three.js-master.zip` file and look inside the build folder. You will find two `three.js`, `three.min.js` which is just a minified version. Add any of these two files into your project folder and link them to your HTML file. Now you are good to use Three.js in your project.

**Note:** I recommend using the minified version as it loads faster.

Insert the following `<script>` tag into the `<head>` element of your HTML with path to the `threejs.min.js` file.

```js
<script src = "/path/to/threejs.min.js"></script>
```

## Use CDN links

You can link the files from a CDN (Content Delivery Network), which is a remote site dedicated to hosting files so that you can use them on a website. You can use any of these websites:

- [cdnjs.com](https://cdnjs.com/libraries/three.js/) 
- [jsdelivr.com](https://www.jsdelivr.com/package/npm/three)

Insert any of the following `<script>` tags into the `<head>` element of your HTML.

```js
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r127/three.min.js"></script>
or
<script src="https://cdn.jsdelivr.net/npm/three@0.127.0/build/three.min.js"></script>
```

## Install the package of Three.js

Three.js is also available as a [package on NPM](https://www.npmjs.com/package/three). This means that if you have Node.js and NPM set up on your computer, you can install it using npm or yarn.

```bash
npm install three
or
yarn add three
```

Then, you can import three.js from the three.module.js file into your JavaScript file.

```js
import * as THREE from "three";
```

This means you can use Three.js along with any JavaScript framework like React, Angular, Vue, etc.

Once you finish setting up your project, let's start creating.
 