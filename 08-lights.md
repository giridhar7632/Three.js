# THREE.JS - LIGHTS AND SHADOWS

## Lights

Lights make the objects visible. Similarly, in Three.js `THREE.Light` lights up the scene and make some objects visible. Not all materials are affected by lighting. The `MeshBasicMaterial` and `MeshNormalMaterial` are self illuminating so they don't need lighting to be visible within a scene, but most of the other materials do, such as the `MeshLambertMaterial`, `MeshPhongMaterial`, `MeshStandardMaterial`, `MeshPhysicalMaterial` and `MeshToonMaterial`. We'll discuss more about materials in further chapters. In this chapter, we'll focus on different types of lights in Three.js.

Every light have `color` and `intensity` properties.

- `color` - (optional) hexadecimal color of the light. Default is 0xffffff (white).
- `intensity` - (optional) numeric value of the light's strength/intensity. Default is 1.

## Ambient Light

This is the most basic light, which illuminates the whole scene equally. Light is spread equally in all directions and distances, so it cannot cast shadows. Ambient light affects all lit objects in the scene equally, and it's color is added to the color of an object's material.

```js
const light = THREE.AmbientLight(color, intensity) 
```

Play around with the code in this example with different colors and intensities.

## Directional Light

Directional light comes from a specific point and is emitted directly from far away to the target. All the light rays it sends out are parallel to each other. A good example of this is the sun.

```js
const light = THREE.DirectionalLight(color, intensity)
light.position.set(2, 3, 4)
```

### Casting Shadows

Light that is coming from a specific direction cast shadows. First, we should make the scene ready for casting shadows.

#### Step - 1

We should first tell the renderer that we want to enable shadows. Casting shadows is an expensive operation. This functionality is only supported by `WebGLRenderer`. It uses [Shadow mapping](https://en.wikipedia.org/wiki/Shadow_mapping), a technique specific to WebGL, performed directly on the GPU.

```js
renderer.shadowMapEnabled = true
```

This tells renderer to cast shadows in the scene.

> Three.js by default uses shadow maps. The way a shadow map works is, for every light that casts shadows all objects marked to cast shadows are rendered from the point of view of the light.

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

This is another kind of light which comes from a specific direction in the shape of the cone.

- `distance` - Maximum range of the light. Default is `0` (no limit).
- `angle` - Maximum angle of light dispersion from its direction whose upper bound is `Math.PI/2`.
- `penumbra` - Percent of the spotlight cone that is attenuated due to penumbra. Takes values between zero and `1`. Default is `0`.
-``decay` - The amount the light dims along the distance of the light.

```js
const spotLight = new THREE.SpotLight( 0xffffff )
spotLight.position.set( 1, 10, 10)

spotLight.castShadow = true

spotLight.shadow.camera.near = 5
spotLight.shadow.camera.far = 400
spotLight.shadow.camera.fov = 30
```

The area where shadows can appear is defined with the `shadow.camera.near`, `shadow.camera.far`, and `shadow.camera.fov` properties.
