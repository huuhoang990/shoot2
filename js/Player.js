function player(){
    this.x;
    this.y;
    this.r;

    this.dx;
    this.dy;
    this.speed;

    this.left;
    this.right
    this.up;
    this.down;

    this.lives;
    this.color1;
    this.color2;

    this.firing;
    this.firingTime;
    this.firingDelay;

    var Constructor = function(){
        this.x =  WIDTH_CANVAS/2;
        this.y = HEIGHT_CANVAS/2;
        this.r = 5;
        this.dx = 0;
        this.dy = 0;
        this.speed = 5;
        this.lives = 3;
        this.color1 = "rgb(255,255,255)";
        this.color2 = "rgb(255,0,0)";

        this.firing = false;
        this.firingTimer = Date.now();
        this.firingDelay = 200;
    }

    this.Constructor = Constructor;
    this.Constructor();
}

player.prototype.setLeft = function(i){
    this.left = i;
}
 
player.prototype.setRight = function(i){
    this.right = i;
}

player.prototype.setUp = function(i){
    this.up = i;
}

player.prototype.setDown = function(i){
    this.down = i;
}

player.prototype.setFiring = function(i){
    this.firing = i;
}

player.prototype.update = function(){
    if (this.left) {
        this.dx = -this.speed;
    }
    
    if (this.right) {
        this.dx = this.speed;
    }
    
    if (this.up) {
        this.dy = -this.speed;
    }

    if (this.down) {
        this.dy = this.speed;
    }
    
    this.x += this.dx;
    this.y += this.dy;

    if (this.x < this.r) {
        this.x = this.r;
    }

    if (this.y < this.r) {
        this.y = this.r;
    }

    if (this.x > WIDTH_CANVAS - this.r) {
        this.x = WIDTH_CANVAS - this.r;
    }

    if (this.y > HEIGHT_CANVAS - this.r) {
        this.y = HEIGHT_CANVAS - this.r;
    }
    
    this.dx = 0;
    this.dy = 0;


    //fight
    if(this.firing){
        var elapsed = Date.now() - this.firingTimer;
        if(elapsed > this.firingDelay){
            this.firingTimer = Date.now();
            var bullet_player = new bullet(270 * Math.PI/180, this.x, this.y );
            arr_bullets.push( bullet_player );
        }
        this.firing = false;
    }
}

player.prototype.draw = function(context){
    context.beginPath();
    context.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    context.fillStyle = this.color1;
    context.fill();
    context.closePath();
}
