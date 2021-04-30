# THREE.JS - CAMERAS & CONTROLS

## Cameras

### PerspectiveCamera

There are a few different cameras in Three.js. The most common camera and the one we've been using is the `PerspectiveCamera`.

```js
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
```

The first attribute is the **Field of View** (FOV). FOV is the part of the scene that is seen on the display at any given moment. The value is in degrees. Humans have an almost 180-degree FOV. But since a normal computer screen doesn’t fill our vision, a smaller value is often chosen. Generally, for games, a FOV between 60 and 90 degrees is chosen.

> **Good default:** `50`

The second one is the **Aspect ratio**. It is the ratio between the horizontal and vertical sizes of the area where we’re rendering the output.

> **Good default:** `window.innerWidth / window.innerHeight`

The next two attributes are the `near` and `far` clipping plane. The area between the near plane and the far plane will be rendered on the screen.

The `near` property defines by how close to the camera Three.js should render the scene. Normally, we set this to a very small value to directly render everything from the position of the camera.

> **Good default:** `0.1`

The `far` property defines how far the camera can see from the position of the camera. If we set this too low, a part of our scene might not be rendered, and if we set it too high, in some cases, it might affect the rendering performance.

> **Good default:** `1000 `

![prespective camera](/assests/07-prespective-cam.png)

### OrthographicCamera

The 2nd most common camera is the `OrthographicCamera`. It specifies a box with the settings left, right top, bottom, near, and far. It represents three-dimensional objects in two dimensions.

```js
const camera = new THREE.OrthographicCamera(left, right, top, bottom, near, far)
```

All the six attributes are the borders of the box, only the objects that are inside the box will be rendered.

- `left` - Camera left plane.
- `right` - Camera right plane.
- `top` - Camera top plane.
- `bottom` - Camera bottom plane.
- `near` - Camera near plane.
- `far` - Camera far plane.

![orthographic camera](/assests/07-orthographic-cam.png)

### Making the camera follow an object

```js
function animate() {
  const object = scene.getObjectByName('sphere')
  renderer.render(scene, camera)
  camera.lookAt(object.position)

  requestAnimationFrame(render)
}
```

In the `animation` function, we use the `camera.lookAt` function to point the camera to the position function of the object. As we do this in every frame that we render, it will look like camera is exactly following the position of the object.

## Controls

You can move the camera around the scene using camera controls. Three.js has a number of camera controls you can use to control the camera throughout a scene. You have to get the controls separately. These are not included in Three.js library. [Controls](https://github.com/mrdoob/three.js/blob/master/examples/js/controls)

### Orbit controls

Orbit controls allow the camera to orbit around the center of the scene. You can also provide a target to move around. You can add `Orbitcontrols` in a few simple steps.

Create a new instance of the orbit controls and pass the camera.

```js
const controls = new THREE.OrbitControls(camera, render.domElement)
```

Update the controls for every frame. You can simply do it in your animation loop.

```js
function animate() {
  // any other animations
  controls.update()

  requestAnimationFrame(render)
}
```

Refer to this [example]() for some basic settings.

There are many other settings to make your experience better. The code is well-documented, you can refer more [here](https://github.com/mrdoob/three.js/blob/master/examples/js/controls/OrbitControls.js).

### Trackball controls

TrackballControls is similar to OrbitControls. However, it does not maintain a constant camera up vector. That means that the camera can orbit past its polar extremes. It won't flip to stay the right side up. You can add it just like the previous one.

```js
const controls = new THREE.TrackballControls(camera, render.domElement)
```

### Fly controls

These are flight simulator-like controls. Move and steer with the keyboard and the mouse. You can arbitrarily transform the camera in 3D space without any limitations (e.g. focus on a specific target).

```js
const controls = new THREE.FlyControls(camera, render.domElement)
```

### PointerLock controls

The `PointerLockControls` implements the in-built browsers [Pointer Lock API](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API). It allows you to control the camera just like in a first-person in 3D games.

```js
const controls = new PointerLockControls(camera, document.body)

// add event listener to show/hide a UI (e.g. the game's menu)
controls.addEventListener('lock', function () {
  menu.style.display = 'none'
})
controls.addEventListener('unlock', function () {
  menu.style.display = 'block'
})
```

This is a simple 3D game created using PointerLock controls.

We have seen the most useful controls in this chapter. Some developers are creating more useful controls for Three.js. You can see some other controls [here](https://github.com/mrdoob/three.js/blob/master/examples/js/controls) well documented and easy to use.
