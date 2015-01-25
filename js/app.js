// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // I decided to create an 'x' and 'y' variable for each block
    // and set them equal to the starting block they should occupy
    this.x = x*101;
    this.y = y*83;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.x <= 606) {
        this.x = this.x + dt * this.speed;
    }else {
        this.x = -100;
    }

}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.x = 202;
    this.y = 332;
    this.spritePlayer = 'images/char-boy.png';
}

Player.prototype.update = function() {

    //If the player object reaches the water, which is at a y-value of less than 83, then
    //the player should return to start. I could edit this later if I want to change the game.
    if(player.y < 83) {
        player.x = 202;
        player.y = 332;
    }
    if(player.x <0 || player.x > 505) {
        player.x = 202;
        player.y = 332;
    }
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.spritePlayer), this.x, this.y);
}

Player.prototype.handleInput = function(keyCode) {
    switch(keyCode) {
        case 'left':
            this.x = this.x - 101;
            break;
        case 'up':
            this.y = this.y - 83;
            break;
        case 'right':
            this.x = this.x +101;
            break;
        case 'down':
            this.y = this.y + 83;
            break;
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [
    new Enemy(2,1,100),
    new Enemy(0,2,200),
    new Enemy(0,3,150),
    new Enemy(3,2,300)
];

// Place the player object in a variable called player

var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
