import {elements} from "./elements.js";
import {getMousePosition} from "./utils.js";
import {mainController} from "./mainController.js";
import {ballArray} from "./mainController.js";
import {Ball} from "./Ball.js";
function txtOnChange(){
    for(let n of ballArray){
        n.setDx(parseFloat(elements.dxTxt.value));
    }
    for(let n of ballArray){
        n.setGravity(parseFloat(elements.GTxt.value));
    }
}
function mouseClickToCreatABall(event){
    console.log("Creat a ball");
    let pos = getMousePosition(event);
    mainController.setBall(new Ball(pos.x,pos.y,parseFloat(elements.dxTxt.value),0));
}
function stopClick(){
    clearInterval(mainController.getTimer());
}
function continueClick(){
    mainController.setTimer();
}
export const events={
    txtOnChange,
    mouseClickToCreatABall,
    stopClick,
    continueClick
}
