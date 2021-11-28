import {elements} from "./elements.js";
import {constants} from "./constants.js";

export class Ball{
    Gravity = constants.G;    //小球下落速度 越小越慢
    Firction = 0.9;    //小球弹跳力度 越大越高
    constructor(x, y, dx, dy, radius, color){
        this.x = x;
        this.y = y;
        this.dy = dy
        this.dx = dx;
        this.radius = radius;
        this.color = color;
    }

    draw =()=> {
        elements.context.beginPath();
        elements.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        elements.context.fillStyle = this.color;
        elements.context.fill();
        elements.context.closePath();
    }
    update=()=>{
        //y 轴临界值判断
        //如果小球在下降过程中到达底部时(及绘制小球的中心坐标位置超出窗口高度时)
        if (this.y + this.radius + this.dy + this.Gravity > elements.canvas.clientHeight) {
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
        if (this.x + this.radius + this.dx >= elements.canvas.clientWidth || this.x - this.radius + this.dx <= 0) {
            //小球 x轴方向改变
            this.dx = -this.dx;
        }
         //小球 x,y坐标位置改变（因为之前的 dy,dx有取反过，所以此处会实现上下，左右的运动路线）
         this.y += this.dy;
         this.x += this.dx;
         //根据改变后的坐标位置绘图
         this.draw(); 
    }
}
