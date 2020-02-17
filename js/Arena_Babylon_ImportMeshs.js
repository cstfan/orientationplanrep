/** The first parameter can be used to specify which mesh to import. Here we import all meshes **/
    BABYLON.SceneLoader.ImportMesh("", "./scenes/object_1/", "Simple_Cube.babylon", scene,
        function (newMeshes) {
        /** Set the target of the camera to the first imported mesh **/
        /** Be carefull if use override parameter of Camera **/
        /** Target to Cube **/
        //camera.target = newMeshes[1];
        /** Target to Front **/
        //camera.target = newMeshes[0];
        }
    );