import {load} from "./resources.js";
import {mainController} from "./mainController.js";
import {elements} from "./elements.js";
import {events} from "./event.js";
async function main() {
    elements.canvas.onclick = events.mouseClickToCreatABall;
    elements.GTxt.onchange=events.txtOnChange;
    elements.dxTxt.onchange=events.txtOnChange;
    window.onkeydown=events.doKeyDownToMoveCamera;
    await load();
    mainController.init();
    mainController.Run();   
    elements.continueButton.onclick=events.continueClick;
    elements.stopButton.onclick=events.stopClick;
}

main();