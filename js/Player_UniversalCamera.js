        // Add a UniversalCamera to the scene and attach it to the canvas
        var camera = new BABYLON.UniversalCamera("Camera", new BABYLON.Vector3(2, 2, 5), scene);
                
            
			// On demande à la caméra de regarder au point zéro de la scène
            //camera.setTarget(BABYLON.Vector3.Zero());
			camera.setTarget(new BABYLON.Vector3(-6, 1.75, -3));
			
			// Paramêtre de clipping
            camera.minZ = 0;
            camera.maxZ = 10;

            //Then apply collisions and gravity to the active camera
            //camera.checkCollisions = true;
            //camera.applyGravity = true;


            //Set the ellipsoid around the camera (e.g. your player's size)
            camera.ellipsoid = new BABYLON.Vector3(0.9, 0.5, 0.9);    

            camera.speed = 1;
            
            //camera.gamepadAngularSensibility = 1;
            camera.gamepadMoveSensibility = 20;
            //camera.touchAngularSensibility = 0.01;
            //camera.touchMoveSensibility = 0.01;
            
            // Touch or click the rendering canvas to enter VR Mode
            scene.onPointerDown = function () {
            scene.onPointerDown = undefined
            camera.attachControl(canvas, true);
            }