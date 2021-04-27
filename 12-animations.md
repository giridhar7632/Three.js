# THREE.JS - ANIMATIONS

Animations gives life to our websites. As you can see that most of the examples uses animations. Let's see how to add basic animations to our Three.js web application. 

If you want to add animations to your Three.js scene you'll need to render the scene multiple times. To do that you should use the standard HTML5 `requestAnimationFrame` functionality. 

```js
function animate(){
  // schedule mltiple rendering
  requestAnimationFrame(animate)

  renderer.render(scene, camera)
}
```

The code above executes the argument passes to `requestAnimationFrame`, `animate` function, at regular intervals and the scene is also rendered multiple times (every 60ms). 

You will now have your own animation loop, so any changes made to your model, camera, or other objects in the scene can now be done from within the `animate` function.

Let's create a simple rotating animation.

```js
function animate() {
  requestAnimationFrame(animate)

  // rotating the cube
  cube.rotation.x += 0.005
  cube.rotation.y += 0.01

  renderer.render(scene, camera)
}
```

The above code creates a rotating cube. Everytime the `animate` is rendered, the cube rotates by the specified values, which will repeat as infinite loop.

You can also add animation to any other element in the scene. Check out this example and play around the scene exploring different animations.

You can also use different animation libraries like `Tween.js`, `greensock` etc, to create professional animations using Three.js.

In the following section, let's use `tween.js` to add animations to our 3D objects.

## Using Twee.js in Three.js project

First things first, you should include the library to your project. Add a script tag or install from [npm](https://www.npmjs.com/package/@tweenjs/tween.js).

```html
<script src="path/to/tween.js"></script>
```

To use this library, we need to first create an instance of a TWEEN.Tween object.

```js
const initial = {x:0 , y:1.25, z:0, rot: 0}
const final = {x:5, y:15, z:-10, rot: 2*Math.PI}

const tween = new TWEEN.Tween(initial)
```

This creates a `TWEEN.Tween` instance. We can use this instance to move the provided properties from the initial value to the final value.

```js
tween.to(final)
```

With `to` function, we tell the tween object that we want to slowly change the initial values to final values. So, we change the `x` property from `0` to `5`. The second parameter, which is `5000`, defines how many `milliseconds` this change should take.

You can also choose how the value changes over time. You can for instance use a linear easing function, which changes the values at a constant rate, a quadratic one, which starts with small changes and quickly increases, or even use an easing function that bounces (overshoots) at the end. There are many more easing functions that are predefined in `TWEEN`.

```js
tween.easing(TWEEN.Easing.Elastic.InOut)
```

To make the 3D object animate, we need to be notified at every change. This is done with `onUpdate()`. If you want to be notified at the end of the tween, use `onComplete()`.

```js
tween.onUpdate(function() {
  cube.position.set(this.x, this.y, this.z);
  cube.rotation.set(this.rot, this.rot, this.rot);
})
```

There are a number of other settings you can use on the `tween` object to control how the animation behaves. In this case, we tell the `tween` object to repeat its animation `indefinitely` and use a `yo-yo` effect that reverses the animation each time it is repeated.

```js
tween.repeat(Infinity)
tween.yoyo(true)
```

Finally, we can start the tween object by calling the start function.

```js
tween.start()
```

At this point, nothing will happen. You have to update the `tween` so that it updated everytime when the scene render. You can call it in the `animate` function.

```js
function animate(){
  requestAminationFrame(animate)

  TWEEN.update()
}
```

Now you can see the effect. Similarly, you can use any animation library with Three.js.
