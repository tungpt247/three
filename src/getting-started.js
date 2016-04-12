export default function() {
    let renderer
    let scene
    let camera

    function init() {
        scene = new THREE.Scene()
        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
        camera.position.x = 15
        camera.position.y = 16
        camera.position.z = 13
        camera.lookAt(scene.position)

        renderer = new THREE.WebGLRenderer()
        renderer.setClearColor(0x000000, 1.0)
        renderer.setSize(window.innerWidth, window.innerHeight)

        // create a cube and add to scene
        var cubeGeometry = new THREE.BoxGeometry(
            10 * Math.random(),
            10 * Math.random(),
            10 * Math.random())

        var cubeMaterial = new THREE.MeshNormalMaterial()
        var cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
        cube.name = 'cube'
        scene.add(cube)

        // add the output of the renderer to the html element
        document.body.appendChild(renderer.domElement)

        render()
        setupKeyLogger()
    }

    function render() {
        renderer.render(scene, camera)
        setupKeyControls()

        requestAnimationFrame(render)
    }

    function setupKeyControls() {
        var cube = scene.getObjectByName('cube')
        document.onkeydown = function(e) {
            switch (e.keyCode) {
                case 37:
                    cube.rotation.x += 0.1
                    break

                case 38:
                    cube.rotation.z -= 0.1
                    break

                case 39:
                    cube.rotation.x -= 0.1
                    break

                case 40:
                    cube.rotation.z += 0.1
                    break

                default:
                    break
            }
        }
    }

    function setupKeyLogger() {
        document.onkeydown = function(e) {
            console.log(e.keyCode)
        }
    }

    function onLoadCallback(loaded) {
        if (loaded.length) {
            console.console.log('Loaded', loaded.length);
        } else {
            console.log('Loaded', loaded)
        }
    }

    function onProgressCallback(progress) {
        console.log('Progress', progress)
    }

    function onErrorCallback(error) {
        console.log('Error', error)
    }


    window.onload = init
}
