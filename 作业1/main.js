import {load} from "./resources.js";
import {getMousePosition} from "./utils.js";
import {mainController} from "./mainController.js";
import {elements} from "./elements.js";
import {Ball} from "./Ball.js";
import {constants} from "./constants.js";

function mouseClickToCreatABall(event){
    console.log("Creat a ball");
    let pos = getMousePosition(event);
    let color = constants.COLORARRAY[Math.floor(Math.random() * constants.COLORARRAY.length)];
    mainController.setBall(new Ball(pos.x,pos.y,0,0,25,color));

}

async function main() {
    elements.canvas.onclick = mouseClickToCreatABall;
    await load();
    mainController.init();
    mainController.Run();
}

main();