var canvas = document.getElementById("render3D"); // Get the canvas element 

var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

var camera, test, miModelo2;
var nombre;
BABYLON.SceneLoader.ShowLoadingScreen = false; //Quitar pantalla de carga
/******* Add the create scene function ******/
var createScene = function(nombre) {
    if (nombre == null) {
        nombre = "Standard MR";
    }
    // Create the scene space
    scene = new BABYLON.Scene(engine);
    scene.autoClear = false; //Transparencia

    // Add a camera to the scene and attach it to the canvas
    camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, 15 * Math.PI / 32, 25, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    // Add lights to the scene
    /*
    var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
    var light2 = new BABYLON.PointLight("Omni0", new BABYLON.Vector3(0, 1, -1), scene);*/


    //GLB modelo
    test = BABYLON.SceneLoader.Append("karts/" + nombre + "/", nombre + ".glb", scene, function(miModelo) {
        // Create a default arc rotate camera and light.
        scene.createDefaultCameraOrLight(true, true, true);

        // The default camera looks at the back of the asset.
        // Rotate the camera by 180 degrees to the front of the asset.
        scene.activeCamera.alpha += 3.8;
        scene.activeCamera.radius = 1.76;
    });

    return scene;

};

/******* End of the create scene function ******/

var scene = createScene(); //Call the createScene function

engine.runRenderLoop(function() { // Register a render loop to repeatedly render the scene
    scene.render();
});


window.addEventListener("resize", function() { // Watch for browser/canvas resize events
    engine.resize();
});