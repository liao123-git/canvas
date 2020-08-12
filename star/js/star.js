class star extends main{
    constructor(r,x=false,y=false,mouse=false){
        super('');
        this.x =  x?x:Math.random()*this.aw;
        this.y = y?y:Math.random()*this.ah;
        this.speedX = (Math.random()*3)*Math.pow(-1,Math.round(Math.random()));
        this.speedY = (Math.random()*3)*Math.pow(-1,Math.round(Math.random()));
        this.r = r;
        this.mouse = mouse;
        this.init();
    }
    init(){
        this.renderStar();
        this.timer();
    }
    timer(){
        if(!this.mouse) this.move();
        this.renderStar();
    }
    renderStar(){
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
        this.ctx.fill();
        this.ctx.closePath();
    }
    move(){
        this.x -= this.speedX;
        this.y -= this.speedY;
        if(this.x<0||this.x>=this.aw) this.speedX *= -1;
        if(this.y<0||this.y>=this.ah) this.speedY *= -1;
    }
}
