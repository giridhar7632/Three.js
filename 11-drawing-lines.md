# THREE.JS - DRAWING LINES

You have learned about quite a lot of materials in Three.js. Now let's see about some special materials that are used in drawing lines. We can draw various shapes and patterns using lines.

## Using `BufferGeometry`

`THREE.BufferGeometry` is the base class of all the built-in geometries in Three.js. You can create your own geometry by passing an array of vertices of the geometry.

Learn more about `BufferGeometry` [here](https://threejs.org/docs/index.html#api/en/core/BufferGeometry).

```js
const points = []
points.push(new THREE.Vector3(-10, 0, 0))
points.push(new THREE.Vector3(0, -10, 0))
points.push(new THREE.Vector3(10, 0, 0))
```

These are some additional elements Three.js provides us to create our geometries.
`THREE.Vector3(x, y, z)` - It creates a point in 3D space. In the above code, we are adding 3 points to the `points` array.

```js
const geometry = new THREE.BufferGeometry().setFromPoints(points)
```

`THREE.BufferGeometry()` as mentioned before it creates our geometry. We use the `setFromPoints` method to set the geometry using the array of points.

> Note that lines are drawn between each consecutive pair of vertices, but not between the first and last (the line is not closed.)

```js
const material = new THREE.LineBasicMaterial({
  // for normal lines
  color: 0xffffff,
  linewidth: 1,
  linecap: 'round', //ignored by WebGLRenderer
  linejoin: 'round', //ignored by WebGLRenderer
})
// or
const material = new THREE.LineDashedMaterial({
  // for dashed lines
  color: 0xffffff,
  linewidth: 1,
  scale: 1,
  dashSize: 3,
  gapSize: 1,
})
```

These are the special materials for lines. You can use any one of `THREE.LineBasicMaterial` or `THREE.LineDashedMaterial`. Their basic properties are mentioned in the above code.

```js
const line = new THREE.Line(geometry, material)
```

Now instead of using `THREE.Mesh`, we use `THREE.Line` for drawing lines. Now you see a `v` shape drawn using lines on the screen.

You can create any type of geometry wireframe using lines by specifying the vertices.
