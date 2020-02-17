/** The first parameter can be used to specify which mesh to import. Here we import all meshes **/
BABYLON.SceneLoader.Append(
    "./scenes/main/",
    "Simple_Cube.babylon",
    scene,
    function (evt) {
        // scene.clearColor=new BABYLON.Color3(0.9,0.9,0.9);
        // scene.ambientColor = BABYLON.Color3.White();
           

        /* post-processes */

        // glow

            // var glowLayer = new BABYLON.GlowLayer("glowLayer", scene, {
            //      mainTextureFixedSize: 256,
            //       blurKernelSize: 40
            //     });
                // glowLayer.addIncludedOnlyMesh(scene.getMeshByName("furnitures.noLM.000"));

                /* tools */

                //scene.debugLayer.show();
        // ...
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
