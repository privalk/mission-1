import {load} from "./resources.js";
import {getMousePosition} from "./utils.js";
import {mainController} from "./mainController.js";
import {elements} from "./elements.js";
import {Ball} from "./Ball.js";

function mouseClickToCreatABall(event){
    console.log("Creat a ball");
    let pos = getMousePosition(event);
    mainController.setBall(new Ball(pos.x,pos.y,0,1,50,"aqua"));
}

async function main() {
    elements.canvas.onclick = mouseClickToCreatABall;
    await load()
    mainController.init()
    mainController.Run();
}

main();