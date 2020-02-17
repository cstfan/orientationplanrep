//Ground
var ground = BABYLON.Mesh.CreatePlane("ground", 20.0, scene);
    ground.material = new BABYLON.StandardMaterial("groundMat", scene);
    ground.material.diffuseColor = new BABYLON.Color3(1, 1, 1);
    ground.material.backFaceCulling = false;
    ground.position = new BABYLON.Vector3(0, 0, 0);
    ground.rotation = new BABYLON.Vector3(Math.PI / 2, 0, 0);

ground.checkCollisions = true;

var box = BABYLON.Mesh.CreateBox("box", 1, scene);
    box.material = new BABYLON.StandardMaterial("groundMat2", scene);
    //box.material.backFaceCulling = false;
    box.material.diffuseColor = new BABYLON.Color3(1, 1, 1);
    box.position = new BABYLON.Vector3(0, 1, 0);
    box.checkCollisions = true;