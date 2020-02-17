// On click event, request pointer lock
scene.onPointerDown = function (evt) {
    console.log( evt );
    if (!engine.isFullscreen) {
        engine.switchFullscreen(true); //true = requestPointerLock.
    }
    else if(!engine.isPointerLock && canvas.requestPointerLock){
        //Back-up pointerlock request in-case fullscreen pointerlock request fails. (*cough* Edge)
        canvas.requestPointerLock();
    }
    
};