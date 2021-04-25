# THREE.JS - GEOMETRIES

Geometries are used to create and define shapes in Three.js. Three.js has many types of built-in geomettries both 2D and 3D.

In this chapter, we'll discuss about basic built-in geometries. We’ll first look at the 2D geometries and after that, we’ll explore all the basic 3D geometries that are available.

## Plane Geometry

The `THREE.PlaneGeometry` is used to create a simple 2D rectangle. It takes four arguments, the `width`, `height` are mandatory and the `widthSegments`, `heightSegments` are optional.

- `width` -  the width of the rectangle.
- `height` -  the height of the rectangle.
- `widthSegments` - the number of segments the width should be divided into. This defaults to `1`.
- `heightSegments` - the number of segments the height should be divided into. This defaults to `1`.

```js
const plane = new THREE.PlaneGeometry(width, height, widthSegments, heightSegments)
```

Example: [Plane Geometry]()

## Circle Geometry

The `THREE.CircleGeometry` is used to create a simple 2D circle. It takes four arguments and all are optional.

- `radius` - The radius of a circle defines its size. The default value is `1`.
- `segments` - the number of faces that are used to create the circle. The default value is `8`. The more the segments the a smoother circle is.
- `thetaStart` - The position from which to start drawing the circle. This value can range from `0` to `2 * PI`, and the default value is `0`.
- `thetaLength` - This property defines to what extent the circle is completed. The default value is `2 * PI`.

```js
const circle = new THREE.CircleGeometry(radius, segments, thetaStart, thetaLength)
```

Example: [Circle Geometry]()

## Ring Geometry

The `THREE.RingGeometry` creates 2D disc with a hole in the center. This is very similar to circle geometry.

- `innerRadius` - The inner radius of a circle defines the size of the hole in the center. `0` means, no hole. The default value is `0.5`.
- `outerRadius` - The outer radius of a circle defines its size. The default value is `1`.
- `thetaSegments` - the number of diagonal segments that are used to create the circle. The default value is `8`. The more the segments the a smoother circle is.
- `phiSegments` -  the number of segments required to be used along the length of the ring. The default value is `8`.
- `thetaStart` - The position from which to start drawing the circle. This value can range from `0` to `2 * PI`, and the default value is `0`.
- `thetaLength` - This property defines to what extent the circle is completed. The default value is `2 * PI`.

```js
const ring = new THREE.RingGeometry(
    innerRadius, outerRadius,
    thetaSegments, phiSegments,
    thetaStart, thetaLength)
```

Example: [Ring Geometry]()

## Box Geometry

The `THREE.BoxGeometry` creates a simple 3D box with specified dimensions. This is the expanded version of `PlaneGeometry` in `z` axis as `depth`.

```js
const box = new THREE.CubeGeometry(
    width, height, depth, 
    widthSegments, heightSegments, depthSegments
)
```

Example: [Rubix cube]()
In this example, I created a Rubix cube using Three.js.

## Sphere Geometry

The `THREE.SphereGeometry` is used to create 3D sphere geometries.  You can create different types of sphere-related geometries by passing the arguments.

- `radius` - The radius of a circle defines its size. The default value is `1`.
- `widthSegments` - number of segments to be used vertically. This defaults to `8`.
- `heightSegments` -  the number of segments to be used horizontally. This defaults to `6`.
- `phiStart` - The position from which to start drawing the circle. This value can range from `0` to `2 * PI`, and the default value is `0`.
- `phiLength` - This property defines to what extent the circle is completed. The default value is `2 * PI`.
- `thetaStart` - The position from which to start drawing the circle. This value can range from `0` to `2 * PI`, and the default value is `0`.
- `thetaLength` - This property defines to what extent the circle is completed. The default value is `2 * PI`.

```js
const sphere = new THREE.SphereGeometry(
    radius, 
    widthSegments, heightSegments, 
    phiStart, phiLength, 
    thetaStart, thetaLength
)
```

## Cylinder Geometry

