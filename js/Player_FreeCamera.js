        // On crée la caméra
        camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 5, -10), scene);

        // On demande à la caméra de regarder au point zéro de la scène
        camera.setTarget(BABYLON.Vector3.Zero());

        // On affecte le mouvement de la caméra au canvas
        camera.attachControl(canvas, true);