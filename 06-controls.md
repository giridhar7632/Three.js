# THREE.JS - CONTROLS

## Using Dat.GUI 

It will be hard for experimenting our code values of variables like `width` or `height` until you get something that you like. It's kind of a slow and overwhelming process. The `dat.gui` is a very useful tool, that allows you to very easily create a basic user interface component that can change variables in your code.

### Installation

To use `dat.gui` in your project, you can download it [here](https://github.com/dataarts/dat.gui). Then add the `<script>` tag to the HTML file.

```js
<script type='text/javascript' src="path/to/dat.gui.min.js"></script>
```

Or you can use CDN, add the following `<script>` tag inside your HTML. 

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.7/dat.gui.min.js"></script>
```

If you are using Three.js in a node app, use the following command to install `dat.gui`.

```bash
npm install -D dat.gui
or
yarn add dat.gui
```

Then, you can easliy import it into your JavaScript file.

```js
import * as dat from 'dat.gui'
```

### Usage
 
First, you should initialize the object itself. It will create a widget and display it on the screen top right corner.

```js
const gui = new 
```

Then you can add the parameter you want to control and the variable. For example, the following code is to control the `y` position of the cube.

```js
gui.add(cube.position, 'y')
```

Try adding other position variables. Refer to this working code example.

You can customize the label displayed using the `name` attribute. To change the label on the variable line, use `.name("your label")`.

```js
gui.add(cube.position, 'y').name('cube-y')
```

You can set up min/max limits and steps for getting the slider. This one will allows values from `1` to `10`, increasing the value by `1` at a time.

```js
gui.add(cube.position, 'y').min(1).max(10).step(1)
// or
gui.add(cube.position, 'y', 1, 10, 1)
```

If there are many varibles with same name, you may find difficult to differentiaite among them. In that case, you can add folders for every object. All the variables related to an object will be in one folder.

```js
// creating a folder
const cube1 = gui.addFolder('Cube 1')

cube1.add(redCube.position, 'y').min(1).max(10).step(1)
cube1.add(redCube.position, 'x').min(1).max(10).step(1)
cube1.add(redCube.position, 'z').min(1).max(10).step(1)

// another folder
const cube2 = gui.addFolder('Cube 2')

cube2.add(greenCube.position, 'y').min(1).max(10).step(1)
cube2.add(greenCube.position, 'x').min(1).max(10).step(1)
cube2.add(greenCube.position, 'z').min(1).max(10).step(1)
```

You can also add some callback functions.
`onChange` is triggered once the value is changed.

```js
gui.add(cube.position, 'y').onChange(function(){
    // refresh based on the new value of y
})
```

Let's see another example of changing color using `dat.gui` and `callbacks`.

```js
// parameter
const bgColor = {
  color: 0xff0000
}

gui.addColor(bgColor, 'color')
  .onChange(() => {
    // callback
    cube.color.set(bgColor.color)
  })
```

The above callback `.onChange` notifies Three.js to change the color of cube when the color is changed.

We are going to use this `dat.gui` a lot from now. Make sure you get to used to it by experimenting with "Hello Cube!" app.