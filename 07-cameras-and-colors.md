# THREE.JS - CAMERAS & CONTROLS

## Cameras

### PerspectiveCamera

There are a few different cameras in Three.js. The most common camera and the one we've been using is the `PerspectiveCamera`.

```js
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
```

The first attribute is the **Field of View** (FOV). FOV is the part of the scene that is seen on the display at any given moment. The value is in degrees.  Humans have an almost 180-degree FOV. But since a normal computer screen doesn’t completely fill our vision, a smaller value is often chosen. Generally, for games, a FOV between 60 and 90 degrees is chosen.

> **Good default:** `50`

The second one is the **Aspect ratio**. It is the ratio between the horizontal and vertical sizes of the area where we’re rendering the output.

> **Good default:** `window.innerWidth / window.innerHeight`

The next two attributes are the `near` and `far` clipping plane. The area between the near plane and the far plane will be rendered on the screen.

The `near` property defines by how close to the camera Three.js should render the scene. Normally, we set this to a very small value to directly render everything from the position of the camera.

> **Good default:** `0.1`

The `far` property defines how far the camera can see from the position of the camera. If we set this too low, a part of our scene might not be rendered, and if we set it too high, in some cases, it might affect the rendering performance. 

> **Good default:** `1000 `

![prespective camera]()

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

![orthographic camera]()

## Color