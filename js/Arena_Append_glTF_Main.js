// Add autocompletion - Download file babylon.d.ts to https://github.com/BabylonJS/Babylon.js/tree/master/dist
/// <reference path="libs/babylon.d.ts" />

/** The first parameter can be used to specify which mesh to import. Here we import all meshes **/
BABYLON.SceneLoader.Append(
    "./scenes/main/",
    "Orientation_Plan_Republique.glb",
    scene,
    function () {    







        
    },
// Custom loading screen - Progress bar counter
    function (evt){
        if (evt.lengthComputable){
            loadedPercent = (evt.loaded * 100 / evt.total).toFixed();
        }
        else{
            var dlCount = evt.loaded / (1024 * 1024);
            loadedPercent = Math.floor(dlCount * 100.0) / 100.0;
        }
    }
);
