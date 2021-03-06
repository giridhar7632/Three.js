# THREE.JS - LIGHTS AND SHADOWS

## Lights

Lights make the objects visible. Similarly, in Three.js `THREE.Light` lights up the scene and make some objects visible. Not all materials are affected by lighting. The `MeshBasicMaterial` and `MeshNormalMaterial` are self-illuminating so they don't need lighting to be visible within a scene, but most of the other materials do, such as the `MeshLambertMaterial`, `MeshPhongMaterial`, `MeshStandardMaterial`, `MeshPhysicalMaterial` and `MeshToonMaterial`. We'll discuss more materials in further chapters. In this chapter, we'll focus on different types of lights in Three.js.

Every light has `color` and `intensity` properties.

- `color` - (optional) hexadecimal color of the light. Default is 0xffffff (white).
- `intensity` - (optional) numeric value of the light's strength/intensity. Default is 1.

## Ambient Light

This is the most basic light, which illuminates the whole scene equally. Light is spread equally in all directions and distances, so it cannot cast shadows. Ambient light affects all lit objects in the scene equally, and its color is added to the color of an object's material.

```js
const light = THREE.AmbientLight(color, intensity)
```

Play around with the code in this [example](/examples/08-lights/01-ambient.html) with different colors and intensities.

## Directional Light

Directional light comes from a specific point and is emitted directly from far away to the target. All the light rays it sends out are parallel to each other. A good example of this is the sun.

![Directional Light](/assests/08-directional-light.png)

```js
const light = THREE.DirectionalLight(color, intensity)
light.position.set(2, 3, 4)
```

### Casting Shadows

The light that is coming from a specific direction cast shadows. First, we should make the scene ready for casting shadows.

#### Step - 1

We should first tell the renderer that we want to enable shadows. Casting shadows is an expensive operation. This functionality is only supported by `WebGLRenderer`. It uses [Shadow mapping](https://en.wikipedia.org/wiki/Shadow_mapping), a technique specific to WebGL, performed directly on the GPU.

```js
renderer.shadowMapEnabled = true
```

This tells the renderer to cast shadows in the scene.

> Three.js by default uses shadow maps. A shadow map works is, for every light that casts shadows all objects marked to cast shadows are rendered from the point of view of the light.

If your shadow looks a bit blocky around its edges, it means the shadow map is too small. To increase the shadow map size. You can define `shadowMapHeight` and `shadowMapWidht` properties for the light. Alternatively, you can also try to change the `shadowMapType` property of `WebGLRenderer`. You can set this to `THREE.BasicShadowMap`, `THREE.PCFShadowMap`, or `THREE.PCFSoftShadowMap`.

```js
// to antialias the shadow
renderer.shadowMapType = THREE.PCFSoftShadowMap
// or
directionalLight.shadowMapWidth = 2048
directionalLight.shadowMapHeight = 2048
```

#### Step - 2

You should configure objects to cast shadows. You can inform Three.js which objects can cast shadows and which objects can receive shadows.

```js
object.castShadow = true
object.recieveShadow = true
```

#### Step - 3

All the above steps are same for every light. The next step is to set up the shadow-related properties.

```js
light.castShadow = true
light.shadow.camera.near = 10
light.shadow.camera.far = 100
light.shadow.camera.left = -50
light.shadow.camera.right = 50
light.shadow.camera.top = 50
light.shadow.camera.bottom = -50
```

The first property, `castShadow`, tells Three.js that this light casts shadows. As casting shadows is an expensive operation, we need to define the area where shadows can appear. This is done with the `shadow.camera.near`, `shadow.camera.far`, and `shadow.camera.left`, etc properties. With the above properties, we create a box-like area where Three.js will render shadows.

Explore more in this example.

## Spotlight

This is another kind of light that comes from a specific direction in the shape of the cone.

![Spot-light](/assests/08-spot-light.png)

- `distance` - Maximum range of the light. Default is `0` (no limit).
- `angle` - Maximum angle of light dispersion from its direction whose upper bound is `Math.PI/2`.
- `penumbra` - Percent of the spotlight cone that is attenuated due to penumbra. Takes values between zero and `1`. Default is `0`.
- `decay` - The amount the light dims along with the distance of the light.

```js
const light = new THREE.SpotLight(color, intensity)
light.position.set(1, 10, 10)

light.castShadow = true

light.shadow.camera.near = 5
light.shadow.camera.far = 400
light.shadow.camera.fov = 30
```

The area where shadows can appear is defined with the `shadow.camera.near`, `shadow.camera.far`, and `shadow.camera.fov` properties.

Example.

## Point Light

Point light is a light source that emits light in all directions from a single point. It is very similar to the light bulb in the normal world. It can cast shadows because it is a type of directional light.

![point Light](/assests/08-point-light.png)

```js
const light = new THREE.PointLight(color, intensity, distance, decay)

light.castShadow = true

light.shadow.camera.near = 0.5 // default
light.shadow.camera.far = 500 // default
```

Example.

## Hemisphere Light

This is a special light for creating natural lighting. If you look at the lighting outside, you'll see that the lights don't come from a single direction. Part of the sunlight is reflected by Earth, and other parts are scattered by the atmosphere. The result is a very soft light coming from lots of directions. In Three.js, we can create something similar using `THREE.HemisphereLight`.

```js
const light = new THREE.HemisphereLight(color, groundColor, intensity)
```

The first argument sets the color of the sky, and the second color sets the color reflected from the floor. And the last argument is its intensity.

Most often it is used along with some other lights, which can cast shadows for the best outdoor lighting effect.

Example.

## RectArea Light

With `THREE.RectAreaLight`, we can define a rectangular area that emits light.

```js
const light = new THREE.RectAreaLight(color, intensity, width, height)
```

Explore more in this example.

Experiment with the examples of each light and try to understand clearly.
