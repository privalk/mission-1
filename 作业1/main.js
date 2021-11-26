import {load} from "./resources.js";
import {mainController} from "./mainController.js";
import {elements} from "./elements.js";

async function main() {
    await load()
    mainController.init()
}
main();