class line extends main{
    constructor(startX,startY,endX,endY){
        super('');
        this.startX =  startX;
        this.startY = startY;
        this.endX = endX;
        this.endY = endY;
        this.init();
    }
    init(){
        this.renderLine();
    }
    renderLine(){
        this.ctx.beginPath();
        this.ctx.moveTo(this.startX,this.startY);
        this.ctx.lineTo(this.endX,this.endY);
        this.ctx.stroke();
        this.ctx.closePath();
    }
}
