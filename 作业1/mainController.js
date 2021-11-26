import {elements} from "./elements.js";
import {backGround} from "./resources.js";
import {constants} from "./constants.js";
import {Ball} from "./Ball.js";
class MainController{
    #timer
    #backGround
    /**
     * @type {Ball}
     */
    #ball
    
    init=()=>{
        elements.backGroundContext.drawImage(backGround,0,0);
        console.log("init completed");
        this.#ball=new Ball(0,0,0,0,0,"aqua")
    }

    clear = ()=>{
        elements.context.clearRect(0,0,elements.canvas.height,elements.canvas.width);
    }

    Run = ()=>{
        clearInterval(this.#timer);
        this.#timer = setInterval(()=>{
            this.clear()
            this.#ball.update();
        }, constants.FRAME_TIME * 1000)
    }
    setBall = (ball)=>{
        this.#ball=ball;
    }

}

export const mainController = new MainController();