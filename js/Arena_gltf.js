// Add light type 1 to the scene
    BABYLON.SceneLoader.ImportMesh("", "./scenes/", "Skateboard_From_FBX_Nodegroup_glTF.gltf", scene, function (meshes) {
    // ou version Append : chercher la différence              
    //BABYLON.SceneLoader.Append("scenes/skateboard/","Skateboard_From_FBX_Nodegroup_glTF.gltf", scene, function (meshes) {
    /** Si j'active les 2 lignes ci-dessous, les paramêtres de camera ne fonctionnent pas (voir pourquoi) **/
    //scene.createDefaultCameraOrLight(true, true, true);
    //scene.createDefaultEnvironment();
    });