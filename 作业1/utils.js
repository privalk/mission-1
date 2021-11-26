import {elements} from "./elements.js";

const {canvas} = elements
//返回鼠标位置
export const getMousePosition = (event)=>{
        let rectangle = canvas.getBoundingClientRect();
        let mouseX = (event.pageX - rectangle.left) * (canvas.width / rectangle.width);
        let mouseY = (event.pageY - rectangle.top) * (canvas.width / rectangle.width);
        return {x: mouseX, y: mouseY}
}
// 随机生成一个 lower ~ upper 的整数
export const randomIntFronRange=(lower, upper)=>{
        return Math.floor(Math.random() * (upper - lower)) + lower;
}