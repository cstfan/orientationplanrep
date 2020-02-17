/** The first parameter can be used to specify which mesh to import. Here we import all meshes **/

function assignLightmapOnMaterial(material, lightmap) {
    material.lightmapTexture = lightmap;
    // we want using UV2
    material.lightmapTexture.coordinatesIndex = 0;
    // our lightmap workflow is a darken one
    material.useLightmapAsShadowmap = true;
}

// SceneLoader doc : http://doc.babylonjs.com/api/classes/babylon.sceneloader#append
BABYLON.SceneLoader.Append(
    "scenes/Steelcase/",
    "Steelcase_BJS_5.babylon",
    scene,
    function () {
    scene.clearColor = new BABYLON.Color3.FromHexString("#10111e");
    /** LIGHTMAP ASSIGNATION PROCESS **/
    scene.ambientColor = BABYLON.Color3.White();
    // lightmapped meshes list
    var lightmappedMeshes = ["Walls", "Furnitures"];
    // we start cycling through them
    for (var i = 0; i < lightmappedMeshes.length; i++) {
        var currentMesh = scene.getMeshByName(lightmappedMeshes[i]);
        // lightmap loading
        var currentMeshLightmap = new BABYLON.Texture(
            "scenes/Steelcase/Lightmaps/" + currentMesh.name + "_LM.jpg",
            scene
        );
        currentMeshLightmap.name = currentMesh.name + "_LM";
        // we start cycling through each mesh material(s)
        if (!currentMesh.material) {
            // no material so skipping
            continue;
        } else if (!currentMesh.material.subMaterials) {
            // no subMaterials
            assignLightmapOnMaterial(
                currentMesh.material,
                currentMeshLightmap
            );
        } else if (currentMesh.material.subMaterials) {
            // we cycle through subMaterials
            for (var j = 0; j < currentMesh.material.subMaterials.length; j++) {
                assignLightmapOnMaterial(
                    currentMesh.material.subMaterials[j],
                    currentMeshLightmap
                );
            }
        }
    }
    /** END OF LIGHTMAP ASSIGNATION PROCESS **/
}
);