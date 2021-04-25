import * as THREE from 'three'
import * as dat from 'dat.gui'

const gui = new dat.GUI()

const width = window.innerWidth
const height = window.innerHeight

const scene = new THREE.Scene()
scene.background = new THREE.Color('skyblue')

const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
camera.position.set(0, 0, 10)

const geometry = new THREE.BoxGeometry(2, 2, 2)
const material = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  wireframe: true
})
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)
gui.add(cube.position, 'x')
gui.add(cube.position, 'y')
gui.add(cube.position, 'z')

const renderer = new THREE.WebGL1Renderer()
renderer.setSize(width, height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

const container = document.querySelector('#container')
container.append(renderer.domElement)
renderer.render(scene, camera)
