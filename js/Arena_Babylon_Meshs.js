    var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter:2}, scene);
    sphere.position.y = 1;
    var ground = BABYLON.MeshBuilder.CreateGround("ground", {width:50, height:100}, scene);