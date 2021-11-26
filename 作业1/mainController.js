import {elements} from "./elements.js";
import {backGround} from "./resources.js";
import {constants} from "./constants.js";

class MainController{
    #timer
    #backGround
    
    init=()=>{
        elements.backGroundContext.drawImage(backGround,0,0);
        console.log("init completed")
    }

    clear = ()=>{
        elements.context.clearRect(0,0,elements.canvas.height,elements.canvas.width);
    }

    mainRun = ()=>{
        clearInterval(this.#timer);
        this.#timer = setInterval(()=>{
            this.clear()
        }, constants.FRAME_TIME * 1000)
    }


}

export const mainController = new MainController();