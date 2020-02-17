// Rendering pipelines
// Doc: https://doc.babylonjs.com/how_to/using_default_rendering_pipeline
// API: https://doc.babylonjs.com/api/classes/babylon.defaultrenderingpipeline

// Create an instance of BABYLON.DefaultRenderingPipeline named renderingpipeline
var renderingpipeline = new BABYLON.DefaultRenderingPipeline(
    "default", // The name of the pipeline
    true, // Do you want HDR textures ?
    scene, // The scene instance
    [camera] // The list of cameras to be attached to
);
renderingpipeline.grainEnabled = true;