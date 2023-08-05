class main {
    constructor(){
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.color = 'white';
        this.aw = document.documentElement.clientWidth || document.body.clientWidth;
        this.ah = document.documentElement.clientHeight || document.body.clientHeight;
        this.r = 2;
        this.stars = [];
        this.mouseStar = null;
        this.init();
    }
    init(){
        this.changeCanvas();
        this.setStyle();
        this.setEvent();
        this.createStars();
        this.timer();
    }
    setEvent(){
        window.onresize = ()=>{
            this.changeCanvas();
            this.setStyle();
        };
        window.onmousemove = (e)=>{
            let x = e.clientX;
            let y = e.clientY;
            this.mouseStar.x = x;
            this.mouseStar.y = y;
        };
        window.onclick = (e)=>{
            let x = e.clientX;
            let y = e.clientY;
            for (let i=0;i<5;i++){
                this.stars.push(new star(this.r,x,y));
                let mouse = this.stars.shift();
                if(mouse.mouse){
                    this.stars.push(mouse);
                    this.stars.shift();
                }
            }
        };
    }
    timer(){
        window.setInterval(()=>{
            this.ctx.clearRect(0,0,this.aw,this.ah);
            //每个星星的移动
            this.stars.forEach(star => star.timer());
            //星星连线
            this.drawLine();
        },33);
    }
    drawLine(){
        this.stars.forEach((star,key)=>{
            for (let i=key+1;i<this.stars.length;i++){
                //看是不是鼠标，是鼠标的话连线距离远一点
                let dis = star.mouse||this.stars[i].mouse?120:50;
                //看距离连线
                if(Math.abs(star.x-this.stars[i].x)<dis&&Math.abs(star.y-this.stars[i].y)<dis)
                    new line(star.x,star.y,this.stars[i].x,this.stars[i].y);
            }
        });
    }
    changeCanvas(){
        this.aw = document.documentElement.clientWidth || document.body.clientWidth;
        this.ah = document.documentElement.clientHeight || document.body.clientHeight;
        this.canvas.width = this.aw;
        this.canvas.height = this.ah;
    }
    setStyle(){
        this.ctx.fillStyle = this.color;
        this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = 1;
    }
    createStars(){
        for (let i=0;i<100;i++) this.stars.push(new star(this.r));

        this.mouseStar = new star(this.r+1,0,0,true);
        this.stars.push(this.mouseStar);
    }
}


