# THREE.JS - HELLO CUBE APP

Like any other programming language, let’s start learning Three.js by creating "Hello cube!" app.

## The HTML

```html
/index.html
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta charset="UTF-8" />
  <title>Three.js - Hello cube</title>
  <style>
    /* Our CSS goes here */
  </style>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r127/three.min.js">
</script>
</head>

<body>
  <div id="threejs-container">
    <!-- Our output will be rendered here -->
  </div>


<script>
  // our JavaScript code goes here
</script>
</body>

</html>
```

As you can see, it’s just a simple HTML file with Three.js CDN.

## The CSS

```css
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html,
body {
  height: 100vh;
  width: 100vw;
}

#threejs-container{
  position: block;
  width: 100%;
  height: 100%;
}
</style>
```

This is just the basic styling of the HTML page. The threejs-container is made to take up the whole screen.

## The JavaScript

This is where our three.js app comes into life. The code below will render a single cube in the middle of the screen. All the code below goes into the empty `<script>` tag in the HTML.

```js
const width = window.innerWidth
const height = window.innerHeight
// Scene
const scene = new THREE.Scene()
scene.background = new THREE.Color('#00b140')

// Camera
const fov = 45 // AKA Field of View 
const aspect = window.innerWidth / window.innerHeight
const near = 0.1 // the near clipping plane 
const far = 100; // the far clipping plane 

const camera = new PerspectiveCamera(fov, aspect, near, far)
camera.position.set(0, 0, 10)

// Renderer
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// Creating a cube
const geometry = new THREE.BoxGeometry(2, 2, 2)
const material = new THREE.MeshBasicMaterial({ wireframe: true })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

// Rendering the scene
const container = document.querySelector('#threejs-container')
container.append(renderer.domElement)
renderer.render(scene, camera)
```


Let’s discuss the code one step at a time and then you can get more information about each element in the upcoming chapters.
The first thing we need to do is to create a scene, a camera, and a renderer. These are the basic components that make up every Three.js app.

### The Scene

```js
const scene = new THREE.Scene()
scene.background = new THREE.Color('#00b140')
```

The `scene` serves as the container for everything we can see on the screen. Without a `THREE.Scene` object, Three.js cannot render anything. The background color to green, so that we can see the cube.

### The Camera

```js
const camera = new PerspectiveCamera(fov, aspect, near, far)
camera.position.set(0, 0, 10)
```

The camera object defines what we’ll see when we render a scene. There are not many but different types of cameras, but for this example, you’ll use a `PerspectiveCamera`, which is designed to match the way our eyes see the world.

### The Renderer

```js
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
```

The renderer object is responsible for calculating what the scene object will look like in the browser-based on what the camera is looking at. There are different types of renderers but we mainly use `WebGLRenderer` since most of the browsers support WebGL. 

In addition to creating the renderer instance, we also need to set the size at which we want it to render our app. It's a good idea to use the width and height of the area we want to fill with our app - in this case, the width and height of the browser window.

### The Cube

```js
const geometry = new THREE.BoxGeometry(2, 2, 2)
const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)
```

This creates a simple cube at the center of the screen. We can create any object using `THREE.Mesh`. The Mesh takes two objects, `geometry` and `material`. The geometry of a mesh defines its shape and materials define the surface properties of objects.

To create a cube, we need BoxGeometry and a basic material (`MeshBasicMaterial`) with the color `0xffffff`. If the `wireframe` property is set to true, it tells Three.js to show us a wireframe and not a solid object.

### Rendering the scene

```js
const container = document.querySelector('#threejs-container')
container.append(renderer.domElement)
renderer.render(scene, camera)
```

Last but not least, we add the renderer element to our HTML document. This is a `<canvas>` element the renderer uses to display the scene to us. In this case, the `<canvas>` element will be appended to the reference container in the HTML.

### The Result

The output looks like this if everything is working properly. Play around with the code to get a better understanding of how it works.

![Cube app]()

You have now completed creating your first three.js application. Let's go ahead and add more beauty to the app.
