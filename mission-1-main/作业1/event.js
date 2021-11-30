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
    mainController.setBall(new Ball(pos.x-50,pos.y-50,parseFloat(elements.dxTxt.value),0));
}
function stopClick(){
    clearInterval(mainController.getTimer());
}
function continueClick(){
    clearInterval(mainController.getTimer());
    mainController.setTimer();
}
let sumMove=0;
function doKeyDownToMoveCamera(e){
    let KeyID=e.KeyCode?e.KeyCode:e.which;
    let moveL_R=0;
    if(KeyID===65){
        if(sumMove+50<=650){
            moveL_R+=50;
            sumMove+=50;
        }
        elements.context.translate(moveL_R,0);
        elements.backGroundContext.translate(moveL_R,0);
        mainController.init();
        for(let n of ballArray){
            n.update();
        }
        console.log("A");
    }
    if(KeyID===68){
        if(sumMove-50>=-650){
            moveL_R-=50;
            sumMove-=50;
        }
        elements.context.translate(moveL_R,0);
        elements.backGroundContext.translate(moveL_R,0);
        mainController.init();
        for(let n of ballArray){
            n.update();
        }
        console.log("D");
    }
}
function getSumMove(){
    return sumMove;
}
export const events={
    txtOnChange,
    mouseClickToCreatABall,
    stopClick,
    continueClick,
    doKeyDownToMoveCamera,
    getSumMove
}
