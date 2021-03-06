# THREE.JS - MATERIALS AND TEXTURES

## Materials

Material is like the skin of the object. It defines the outer appearance of the geometry. Three.js provides a lot of materials to work with. We should choose the type of material according to our needs. In this chapter, we'll discuss the most commonly used materials in Three.js.

### MeshBasicMaterial

This is the very basic material in Three.js. It is used to create and display objects of solid color or wireframe. It is self-illuminating and is not affected by lighting.

```js
const geometry = new THREE.BoxGeometry(2, 2, 2)
const material = new THREE.MeshBasicMaterial({
  color: 0x87ceeb,
  wireframe: true,
  wireframeLinewidth: 2,
})

const cube = new THREE.Mesh(geometry, material)
```

Sometimes it’s hard to distinguish between two adjacent surfaces of the same color. If you create a sphere, it will appear like a 2D circle. Although it appears as 2D, it should be 3D.

### MeshDepthMaterial

This is a material that uses the distance from the camera to determine how to color your mesh in a greyscale. White is nearest, black is farthest.

```js
const geometry = new THREE.TorusKnotGeometry()
const material = new THREE.MeshDepthMaterial()

const torusKnot = new THREE.Mesh(geometry, material)
```

You can understand better about it's color in this example of torus-knot.

### MeshNormalMaterial

This material uses the magnitude of the x/y/z values of the faces’ normal vectors to calculate and set the red/green/blue values of the colors displayed on the face.

> How does it works? - x is `red`, y is `green`, and z is `blue` so things facing to the right will be `pink`, to the left will be `aqua`, up will be `light green`, down will be `purple`, and toward the screen will be `lavender`.

```js
const geometry = new THREE.BoxGeometry(2, 2, 2)
const material = new THREE.MeshBasicMaterial()

const cube = new THREE.Mesh(geometry, material)
```

In this example, you can see that every face has its color based on the normal of the face.

### MeshLambertMaterial

This material can be used to create dull-looking, non-shiny surfaces. This is a very easy-to-use material that responds to the lighting sources in the scene. It has two main properties:

- `color` - This is the color of the material.
- `emissive` - This is the color that the material emits. You can use this to create objects that look like they glow.

```js
const geometry = new THREE.BoxGeometry(2, 2, 2)
const material = new THREE.MeshLambertMaterial({ color, emissive })

const cube = new THREE.Mesh(geometry, material)
```

### MeshPhongMaterial

This material is similar to `MeshLambertMaterial` but can create more shiny surfaces. If you use this material without any lighting, nothing will be shown, it will be in black. You can use a white `AmbientLight` to make it visible.

```js
const geometry = new THREE.BoxGeometry(2, 2, 2)
const material = new THREE.MeshPhongMaterial({ color, emissive, shininess })

const cube = new THREE.Mesh(geometry, material)
```

### MeshStandardMaterial

It is similar but gives a more accurate and realistic looking result than the `MeshLambertMaterial` or `MeshPhongMaterial`. Instead of `shininess` it has two properties: `roughness` and `metalness`.

```js
const geometry = new THREE.BoxGeometry(2, 2, 2)
const material = new THREE.MeshStandardMaterial({ color, roughness, metalness })

const cube = new THREE.Mesh(geometry, material)
```

### MeshPhysicalMaterial

It is pretty similar to `MeshStandardMaterial`. You can control the reflectivity of the material. The default reflectivity is `0.5`, you can vary it between `0` and `1`.

```js
const geometry = new THREE.BoxGeometry(2, 2, 2)
const material = new THREE.MeshPhysicalMaterial({
  color,
  roughness,
  metalness,
  reflectivity,
})

const cube = new THREE.Mesh(geometry, material)
```

In this example you can experiment and understand the differences between `MeshLambertMaterial`, `MeshPhongMaterial`, `MeshStandardMaterial` and `MeshPhysicalMaterial`.

There are many other materials in Three.js. You can learn more [here](https://threejsfundamentals.org/threejs/lessons/threejs-materials.html).

## Using Multiple Materials

Until now while creating a `Mesh`, you added a single material to it. There are also cases where you want to combine multiple materials. You can do that by passing an array of materials. But you should not use `Mesh`, instead you can use `createMultipleMaterialObject` of `SceneUtils`. For example, the following code combines `THREE.MeshLambertMaterial` with a material that shows you the wireframe of the geometry.

```js
const geometry = new THREE.BoxGeometry(1, 1, 1)

const material1 = new THREE.MeshLambertMaterial({
  color: 0xff0000,
  transparent: true,
  opacity: 0.7,
})
const material2 = new THREE.MeshBasicMaterial({ wireframe: true })

const cube = THREE.SceneUtils.createMultiMaterialObject(cylinderGeometry, [
  material1,
  material2,
])
```

## Textures

The texture is an image or color added to the material to give more detail or beauty. Texture is a large topic in Three.js. In this section we'll see how to apply a basic texture to our material.

## Basic texture

First, you should create a `loader`. Three.js has built-in function `TextureLoader()` to load textures into your Three.js project. Then you can load any texture or image by specifying its path in the `load()` function.

```js
const loader = new THREE.TextureLoader()
texture = loader.load('/path/to/the/image')
```

Then set the map property of the material to this texture. That's it, you applied a texture to the plane geometry.

```js
const geometry = new THREE.PlaneGeometry(2, 2)
const material = new THREE.MeshSandardMaterial({
  map: texture,
})
```

Textures have settings for repeating, offsetting, and rotating a texture. By default textures in three.js do not repeat. To set whether a texture repeats there are 2 properties, `wrapS` for horizontal wrapping and `wrapT` for vertical wrapping. And set the repeating mode to `THREE.ReaptWrapping`.

```js
texture.wrapS = THREE.RepeatWrapping
texture.wrapT = THREE.RepeatWrapping
texture.magFilter = THREE.NearestFilter
```

In Three.js you can choose what happens both when the texture is drawn larger than its original size and what happens when it's drawn smaller than its original size.

For setting the filter when the texture is drawn larger than its original size you set `texture.magFilter` property to either `THREE.NearestFilter` or `THREE.LinearFilter`.

- `NearestFilter` - This filter uses the color of the nearest texel that it can find.
- `LinearFilter` - This filter is more advanced, it and uses the color values of the four neighboring texels to determine the correct color.

And you can add how many times to repeat the texture.

```js
const timesToRepeatHorizontally = 4
const timesToRepeatVertically = 2
texture.repeat.set(timesToRepeatHorizontally, timesToRepeatVertically)
```

![checker-board](./assests/checker-board.png)

## Texture mapping

## `base color map`

It is the basic colored image you add to the object to the texture. With `base color map` we add colors to the surface.

```js
const textureMap = new THREE.TextureLoader().load('/path/to/texture-map')
material.map = textureMap
```

You can add the effect of depth using a `bump map` or `normal map` or `distance map`.

## `bump map`

A bump map is a grayscale image, where the intensity of each pixel determines the height. You can just set the material `bumpMap` property to the texture. It adds fine details to the texture.

```js
const textureBumpMap = new THREE.TextureLoader().load('/path/to/bump-map')
material.bumpMap = textureBumpMap
```

## `normal maps`

A normal map describes the normal vector for each pixel, which should be used to calculate how light affects the material used in the geometry. It creates an illlusion of depthness to the flat surface.

```js
const textureNormalMap = new THREE.TextureLoader().load('/path/to/normal-map')
material.normalMap = textureNormalMap
```

## `displacement map`

While the normal map gives an illusion of depth, we change the model's shape, with a displacement map based on the information from the texture.

```js
const textureDisplacementMap = new THREE.TextureLoader().load(
  '/path/to/displacement-map'
)
material.displacemetMap = textureDisplacementMap
```

## `roughness map`

The roughness map defines which areas are rough and that effects the reflection sharpness from the surface.

```js
const textureRoughnessMap = new THREE.TextureLoader().load(
  '/path/to/roughness-map'
)
material.roughnessMap = textureRoughnessMap
```

## `ambient occlusion map`

It highlights the shadow areas of the object. It requires a second set of UVs.

```js
const textureAmbientOcclusionMap = new THREE.TextureLoader().load(
  '/path/to/AmbientOcclusion-map'
)
material.aoMap = textureAmbientOcclusionMap

// second UV
mesh.geometry.attributes.uv2 = mesh.geometry.attributes.uv
```

If you compare the objects with roughness map and ambient occlusion map, you can observe that The shadows are more highlighted after using `aoMap`.

## `metalness map`

It defines how much the material is like a metal.

```js
const textureMetalnessMap = new THREE.TextureLoader().load(
  '/path/to/metalness-map'
)
material.metalnessMap = textureMetalnessMap
```

There are some other maps for creating a real-world model in computer graphics. You can learn more [here](http://wiki.polycount.com/wiki/Texture_Types).
