/**
 * Created by Павел on 19.03.2017.
 */
function drawReact(context, x, y, color){
    context.fillStyle = color;
    context.fillRect(Math.floor(x/100)*100+1, Math.floor(y/100)*100+1, 99, 99);
}

$(document).ready(() => {
    let start = new Date;
    let $canvas = $("canvas"), ctx = $canvas[0].getContext("2d"), width = $(window).width()-50,
        height = $(window).height()-50;
    $canvas[0].width=width;
    $canvas[0].height=height;
    $canvas.click((e)=>{
        let  color = "#f00", pixel = ctx.getImageData(e.pageX-e.target.offsetLeft,e.pageY-e.target.offsetTop,1,1).data;
        if(pixel[0]===255&&pixel[1]===0&&pixel[2]===0) {
            color = "#fff";
        }
        drawReact(ctx,e.pageX-e.target.offsetLeft,e.pageY-e.target.offsetTop,color)
    });
    ctx.beginPath();
    ctx.strokeStyle="#ff0000";
    for (let x = 0.5; x < width; x += 100) {
        ctx.moveTo(x,1);
        ctx.lineTo(x,height);
    }
    for (let y = 0.5; y < height; y += 100) {
        ctx.moveTo(1,y);
        ctx.lineTo(width,y);
    }
    ctx.stroke();
    console.log(new Date() - start);
});