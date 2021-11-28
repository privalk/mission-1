import {elements} from "./elements.js";
import {backGround} from "./resources.js";
import {constants} from "./constants.js";
import {Ball} from "./Ball.js";
let ballArray = [];
class MainController{
    #timer
    #backGround
    // /**
    //  * @type {Ball}
    //  */
    #balls=[];
    
    init=()=>{
        elements.backGroundContext.drawImage(backGround,0,0);
        console.log("init completed");
        this.#balls=new Ball(0,0,0,0,0,"aqua")
    }

    clear = ()=>{
        elements.context.clearRect(0,0,elements.canvas.height,elements.canvas.width);
    }

    Run = ()=>{
        clearInterval(this.#timer);
        this.#timer = setInterval(()=>{
            this.clear()
            for(let n of ballArray){
                n.update();
            }
            
        }, constants.FRAME_TIME * 1000)
    }
    setBall = (ball)=>{
        ballArray.push(ball);
    }

}

export const mainController = new MainController();