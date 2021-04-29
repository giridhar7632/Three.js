# THREE.JS - CREATING TEXT

Often you neeed to add text to your scene. In this chapter, let's see some of the ways of adding text to our scene.

## Draw text to canvas and use as a Texture

This is the easiest way to add 2D text to your scene. you can create `canvas` using JavaScript andd add it to the dom.

```js
const canvas = document.createElement('canvas')
const context = canvas.getContext('2d')
```

The code above creates a `canvas` element and we set the context to `2d`. The `canvas.getContext()` method returns an object that provides methods and properties for drawing on the canvas, which can be used to draw text, lines, boxes, circles, and more.

```js
context.fillStyle = 'green'
context.font = '60px san-serif'
context.fillText('Hello World!', 0, 60)
```

The `fillText()` is a method of a 2D drawing context. The `fillText()` method allows you to draw a text string at a coordinate with the fill (color) that is derived from the `fillStyle` you provided. You can set the font of the test using the `font` property.

The above code set the font to `60-pixel-tall san-serif` and the fill style to `green`. The text `'Hello, World!'` is drawn starting at the coordinates `(0, 60)`.

```js
// canvas contents will be used for a texture
const texture = new THREE.Texture(canvas)
texture.needsUpdate = true
```

To create a texture from a canvas element, all we need to do is create a new instance of `THREE.Texture` and pass in the `canvas` element we created. The code above creates a texture using the canvas (in this case, our text). The `needsUpdate` parameter of the texture is set to `true`. This informs Three.js that our canvas texture has changed and needs to be updated the next time the scene is rendered.

Now create a plane geometry and add this as a texture to the material.

```js
var material = new THREE.MeshBasicMaterial({
  map: texture,
  side: THREE.DoubleSide,
})
material.transparent = true

var mesh = new THREE.Mesh(new THREE.PlaneGeometry(50, 10), material)
```

## Using Text Geometry

`THREE.TextGeometry` is another type of geometry that is used to generate text as a single geometry. This takes two arguments, `text` - the text you want to render and other `parameters` object.

#### `Parameters`

- `font` - This is the name of the font to be used.
- `size` - Size of the text. Default is `100`.
- `height` - The height property defines the depth of the text, in other words, how far the text is extruded to make it 3D. This defaults to `50`.
- `curveSegments` - Number of points on the curves. Default is `12`.
- `bevelEnabled` - A bevel provides a smooth transition from the front of the text to the side. If you set this value to true, a bevel will be added to the rendered text. By default it is set to `false`.
- `bevelThickness` - If you've set bevelEnabled to true, it defines how deep the bevel is. Defaut is `10`.
- `bevelSize` - It defines how high the bevel is. Default is equal to `8`.
- `bevelOffset` - How far from text outline bevel starts. Default is `0`.
- `bevelSegments` - The number of bevel segments. Default is `3`.

You need to use `THREE.FontLoader` to load fonts from their `typeface.json` files.

```js
const loader = new THREE.FontLoader()

loader.load('fonts/helvetiker_regular.typeface.json', function (font) {
  const geometry = new THREE.TextGeometry('Hello Three.js!', {
    font: font,
    size: 80,
    height: 5,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 10,
    bevelSize: 8,
    bevelOffset: 0,
    bevelSegments: 5,
  })
})
```

Now you should some material to it and create a mesh.

```js
const material = new THREE.MeshFaceMaterial([
  new THREE.MeshPhongMaterial({
    color: 0xff22cc,
    shading: THREE.FlatShading,
  }), // front
  new THREE.MeshPhongMaterial({
    color: 0xff22cc,
    shading: THREE.SmoothShading,
  }), // side
])
const mesh = new THREE.Mesh(geometry, material)
mesh.name = 'text'
scene.add(mesh)
```

> **Note:** There is one thing you need to take into account when working with `THREE.TextGeometry` and materials. It can take two materials as an array: one for front of rendered text and another for side of the text. If you just pass in one material, it is applied to both the front and the side.

Now you can see the text rendered to the scene.

You can add custom fonts by using their `typeface` files. You can find some at [http://typeface.neocracy.org/fonts.html](http://typeface.neocracy.org/fonts.html). You can add different textures to the text just like we added to other materials.
