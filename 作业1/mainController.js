import {elements} from "./elements.js";
import {backGroundImg} from "./resources.js";
import {constants} from "./constants.js";
import {Ball} from "./Ball.js";
import { events } from "./event.js";
export let ballArray = [];
class MainController{
    #timer

    init=()=>{
        elements.backGroundContext.drawImage(backGroundImg,0,0);
        elements.backGroundContext.drawImage(backGroundImg,650,0);
        elements.backGroundContext.drawImage(backGroundImg,-650,0);
        //console.log("init completed");
    }

    clear = ()=>{
        elements.context.clearRect(-1300,0,5200,650);
        elements.backGroundContext.clearRect(-1300,0,5200,650);
    }

    Run = ()=>{
        clearInterval(this.#timer);
        this.setTimer();
    }
    drawFrame=()=>{
        this.clear();
        this.init();
        events.moveCamera();
        for(let n of ballArray){
            n.update();
        }
    }
    setBall = (ball)=>{
        ballArray.push(ball);
    }
    getTimer=()=>{
        return this.#timer;
    }
    setTimer=()=>{
        this.#timer = setInterval(this.drawFrame, constants.FRAME_TIME * 1000);
    }

}

export const mainController = new MainController();