# THREE.JS - INTRODUCTION

All modern browsers became more powerful and became more accessible directly using JavaScript. They have adopted [WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API) (Web Graphics Library), a JavaScript API, which allows you to render high-performance interactive 3D and 2D graphics within any compatible web browser using the capabilities of the [GPU](https://www.intel.com/content/www/us/en/products/docs/processors/what-is-a-gpu.html) (Graphics Processing Unit). But WebGL is a very low-level system that only draws basic objects like point, square and line. However, programming WebGL directly from JavaScript is a very complex and verbose process. You need to know the inner details of WebGL and learn a complex shader language to get the most out of WebGL. This is where Three.js comes into light.

## What is Three.js?

[Three.js](https://threejs.org) is an open-source, lightweight, cross-browser, general-purpose JavaScript library. Three.js uses WebGL behind the scenes, so you can use it to render Graphics on HTML `<canvas>` element in the browser. Since Three.js uses JavaScript, you can interact with other elements of the webpage, add animations and interactions, and even create a game with some logic.

## Why use Three.js?

The following features make Three.js a good library to use.

- You can create complex 3D graphics by just using JavaScript.
- You can create Virtual Reality (VR) and Augmented Reality (AR) scenes inside the browser. 
- Since it uses WebGL, it has cross-browser support and is supported by many browsers.
- You can add various materials, textures and animate 3D objects.
- You can also load and work on objects from other 3D modeling software.

With a couple of lines of JavaScript and simple logic, you can create anything, from high-performance interactive 3D models to photorealistic real-time scenes.

These are some awesome websites created using Three.js:

- [Moments of Happiness](https://moments.epic.net/#home)
- [Garden Eight](https://garden-eight.com/)
- [Interland](https://beinternetawesome.withgoogle.com/en_us/interland)
- [Under Neon Lights](https://within-unlimited.github.io/neon-lights/release/)

You can find many other examples created using Three.js on the official website of [Three.js](https://threejs.org/).

## Browser support

All modern browsers on desktop, as well as on mobile, currently support WebGL. The only browser where you have to take care of is the mobile Opera Mini browser.  For IE 10 and older, there is the IEWebGL plugin, which you can get from [https://github.com/iewebgl/iewebgl](https://github.com/iewebgl/iewebgl). You can find detailed information about the WebGL browser support [here](https://caniuse/webgl).

Once you understand what Three.js is, you can continue to the next chapter about setting up a project to start working with Three.js.
