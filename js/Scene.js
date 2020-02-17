// Add autocompletion - Download file babylon.d.ts to https://github.com/BabylonJS/Babylon.js/tree/master/dist
/// <reference path="libs/babylon.d.ts" />

/******* Add the create scene function ******/
    var createScene = function () {

    /** Create the scene space **/
    var scene = new BABYLON.Scene(engine);
   
    /** Enable Gravity **/
    //scene.gravity = new BABYLON.Vector3(0, -0.9, 0);
    
    //** Enable Collisions **/
    //scene.collisionsEnabled = true;

    /** Blackground Color RVB between 0 et 1 e.g. (0.9,0.9,0.9) for light grey **/
    // It's not apply if use append object, use this parametre in call back function in append object
    // scene.clearColor=new BABYLON.Color3(0.9,0.9,0.9);

    /** Define a general environment texture **/
    // hdrTexture = BABYLON.CubeTexture.CreateFromPrefilteredData("hdr/environment.dds", scene);
    // scene.environmentTexture = hdrTexture;
    // scene.createDefaultSkybox(hdrTexture, true, 100, 0.7);

    // scene.ambientColor = BABYLON.Color3.White();

    /** Call functions **/
    // createGroundGray();
                     
    return scene;

    };

/******* Functions ******/
        
/** Création d'un ground gray **/
var createGroundGray = function () {
var helper = scene.createDefaultEnvironment({
    skyboxSize: 1500,
    groundShadowLevel: 0.5,
    });       
helper.setMainColor(BABYLON.Color3.Gray());
helper.checkCollisions = true;
};


/**** End of the create scene function ****/ 
    
    /** Call the createScene function **/
    var scene = createScene();
    
    /** Register a render loop to repeatedly render the scene **/
    scene.executeWhenReady(function () {
        // run the render loop
        engine.runRenderLoop(function () {
            scene.render();
        });
    });

    /** Watch for browser/canvas resize events */
    window.addEventListener("resize", function () {
        engine.resize();
    });

/**** tools ****/
    
    // scene.debugLayer.show();
    // scene.debugLayer.show({embedMode:true});
    // console.log(scene.animationGroups);