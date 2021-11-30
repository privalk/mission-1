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
let isMoveRight=false;
let isMoveLeft=false;
function moveLROrder1(e){
    let KeyID=e.KeyCode?e.KeyCode:e.which;
    if(KeyID===65){
        isMoveLeft=true;
    }
    if(KeyID===68){
        isMoveRight=true;
    }
}
function moveLROrder0(e){
    let KeyID=e.KeyCode?e.KeyCode:e.which;
    if(KeyID===65){
        isMoveLeft=false;
    }
    if(KeyID===68){
        isMoveRight=false;
    }
}
function moveCamera(){
    let moveL_R=0;
    let movedegree=3;
    if(isMoveLeft&&!isMoveRight){
        if(sumMove+movedegree<=650){
            moveL_R+=movedegree;
            sumMove+=movedegree;
        }
        elements.context.translate(moveL_R,0);
        elements.backGroundContext.translate(moveL_R,0);
        mainController.init();
        for(let n of ballArray){
            n.update();
        }
        console.log("A");
    }
    if(isMoveRight&&!isMoveLeft){
        if(sumMove-movedegree>=-650){
            moveL_R-=movedegree;
            sumMove-=movedegree;
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
    moveCamera,
    getSumMove,
    moveLROrder1,
    moveLROrder0
}
