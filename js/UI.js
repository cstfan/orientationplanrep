/******* Call Functions ******/

// *** Top Menu ***
// leftMenuDisplay();

initFullScreen();
togglecam();

// *** Left Menu ***

// leftMenuItem1();

/******* Functions ******/

// *** Top Menu ***
function leftMenuDisplay() {
    
    var fsButton = document.getElementById('leftmenu_button');
    if (!fsButton) return;
    var trigger = 1;
        leftmenu_button.addEventListener('click', function(event) {
        event.stopPropagation();
        // console.log("Left Menu");
        
        if (trigger == 1) {
            document.getElementById("leftMenu").style.display = "none";
            trigger = 0;
        }
        else {
            document.getElementById("leftMenu").style.display = "flex";
            trigger = 1;
        }

    });

}


// ****** Fullscreen switch *******
function initFullScreen() {

    var fsButton = document.getElementById('fullscreen_button');
    if (!fsButton) return;

        fullscreen_button.addEventListener('click', function(event) {
        event.stopPropagation();
        if (document.fullscreenElement || 
                document.webkitFullscreenElement ||
                document.mozFullScreenElement ||
                document.msFullscreenElement) {
            exitFullscreen();
        } else
            requestFullscreen(document.body);
    });



    // if (document.fullscreenEnabled || 
    //         document.webkitFullscreenEnabled ||
    //         document.mozFullScreenEnabled ||
    //         document.msFullscreenEnabled)
    //     fullscreen_button.style.display = 'inline';

    // fullscreen_button.addEventListener('click', function(event) {
    //     event.stopPropagation();
    //     if (document.fullscreenElement || 
    //             document.webkitFullscreenElement ||
    //             document.mozFullScreenElement ||
    //             document.msFullscreenElement) {
    //         exitFullscreen();
    //     } else
    //         requestFullscreen(document.body);
    // });

    // function changeFullscreen() {
    //     if (document.fullscreenElement || 
    //             document.webkitFullscreenElement ||
    //             document.mozFullScreenElement ||
    //             document.msFullscreenElement)
    //         fullscreen_button.className = 'fullscreen-close';
    //     else
    //         fullscreen_button.className = 'fullscreen-open';
    // }

    // document.addEventListener('webkitfullscreenchange', changeFullscreen);
    // document.addEventListener('mozfullscreenchange', changeFullscreen);
    // document.addEventListener('msfullscreenchange', changeFullscreen);
    // document.addEventListener('fullscreenchange', changeFullscreen);

    // function requestFullscreen(elem) {
    //     if (elem.requestFullscreen)
    //         elem.requestFullscreen();
    //     else if (elem.mozRequestFullScreen)
    //         elem.mozRequestFullScreen();
    //     else if (elem.webkitRequestFullscreen) 
    //         elem.webkitRequestFullscreen();
    //     else if (elem.msRequestFullscreen)
    //         elem.msRequestFullscreen();
    // }
    
    // function exitFullscreen() {
    //     if (document.exitFullscreen)
    //         document.exitFullscreen();
    //     else if (document.mozCancelFullScreen)
    //         document.mozCancelFullScreen();
    //     else if (document.webkitExitFullscreen)
    //         document.webkitExitFullscreen();
    //     else if (document.msExitFullscreen)
    //         document.msExitFullscreen();
    // }
}


function requestFullscreen(elem) {
    if (elem.requestFullscreen)
        elem.requestFullscreen();
    else if (elem.mozRequestFullScreen)
        elem.mozRequestFullScreen();
    else if (elem.webkitRequestFullscreen) 
        elem.webkitRequestFullscreen();
    else if (elem.msRequestFullscreen)
        elem.msRequestFullscreen();
}


function exitFullscreen() {
    if (document.exitFullscreen)
        document.exitFullscreen();
    else if (document.mozCancelFullScreen)
        document.mozCancelFullScreen();
    else if (document.webkitExitFullscreen)
        document.webkitExitFullscreen();
    else if (document.msExitFullscreen)
        document.msExitFullscreen();
}


// ****** Toogle Cam *******
function togglecam() {

    var fsButton = document.getElementById('togglecam_button');
    if (!fsButton) return;

    togglecam_button.addEventListener('click', function(event) {
        event.stopPropagation();
        // BJS api
        console.log("Toogle Cam");
        // window.close();
        open(location, '_self').close();
        
        // var speed = 45;
        // var frameCount = 200;
        // var animateCameraTargetToPosition = function(cam, speed, frameCount, newPos) {
        //     var ease = new BABYLON.CubicEase();
        //     ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
        //     BABYLON.Animation.CreateAndStartAnimation('at5', cam, 'target', speed, frameCount, cam.target, newPos, 0, ease);
        // }
        // animateCameraTargetToPosition(camera, speed, frameCount, new BABYLON.Vector3(2, 0, 0));


    });

}



// *** Left Menu ***

function leftMenuItem1(){
    console.log("Left Menu Item 1");
}


