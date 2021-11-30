import {elements} from "./elements.js";
import {constants} from "./constants.js";
import {ballImg} from "./resources.js";

export class Ball{
    Gravity = parseFloat(elements.GTxt.value);    //小球下落速度 越小越慢
    Firction = 0.9;    //摩擦 小球弹跳力度 越大越高
    constructor(x, y, dx, dy){
        this.x = x;
        this.y = y;
        this.dy = dy;
        this.dx = dx;
    }
    setDx=(dx)=>{
        this.dx=dx;
    } 
    setGravity=(Gravity)=>{
        this.Gravity=Gravity;
    }
    draw =()=> {
        elements.context.drawImage(ballImg,this.x,this.y,70,70);
    }
    update=()=>{
        //y 轴临界值判断
        //如果小球在下降过程中到达底部时(及绘制小球的中心坐标位置超出窗口高度时)
        if (this.y + 70 + this.dy  > elements.canvas.clientHeight) {
            //小球 y轴方向改变 （往上）
            this.dy = -this.dy;
            this.dy *= this.Firction;
            this.dx *= this.Firction;
        }
        else {
            //小球  y轴坐标递增 (往下)
            this.dy += this.Gravity* constants.FRAME_TIME;
        }
        //x 轴临界值判断
        if (this.x  + this.dx >= elements.canvas.clientWidth*2) {
            //小球从左边出来
            this.x = -elements.canvas.clientWidth;
        }
        else if(this.x +70 + this.dx <= -650){
            this.x=elements.canvas.clientWidth*2;
        }
         //小球 x,y坐标位置改变（因为之前的 dy,dx有取反过，所以此处会实现上下，左右的运动路线）
         this.y += this.dy;
         this.x += this.dx;
         //根据改变后的坐标位置绘图
         this.draw(); 
    }
}
