const canvas = document.getElementById('myCanvas');
const backGroundCanvas = document.getElementById('backGround');
const context = canvas.getContext('2d');
const backGroundContext = backGroundCanvas.getContext('2d');

export const elements = {
    canvas,
    context,
    backGroundCanvas,
    backGroundContext
}