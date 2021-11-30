const canvas = document.getElementById('myCanvas');
const backGroundCanvas = document.getElementById('backGround');
const context = canvas.getContext('2d');
const backGroundContext = backGroundCanvas.getContext('2d');
const stopButton = document.getElementById('stop');
const continueButton = document.getElementById('continue');
let GTxt = document.getElementById('GTxt');
let dxTxt = document.getElementById('dxTxt');
export const elements = {
    canvas,
    context,
    backGroundCanvas,
    backGroundContext,
    stopButton,
    continueButton,
    GTxt,
    dxTxt
}


