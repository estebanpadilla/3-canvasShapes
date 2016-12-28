window.addEventListener('load', init, false);
var canvas = undefined;
const canvasXPos = 30;
const canvasYPos = 75;
const canvasWidth = 400;
const canvasHeight = 400;

var context = undefined;

function init() {
    console.log('load');

    var stats = new Stats();
    stats.showPanel(1);
    document.body.appendChild(stats.dom);

    canvas = createCanvas(canvasXPos, canvasYPos, canvasWidth, canvasHeight);
    context = canvas.getContext('2d');


    const redBox = new Box(10, 10, 20, 20, 'red');
    const blueBox = new Box(40, 10, 20, 20, 'blue');
    const greenBox = new Box(70, 10, 20, 20, 'green');

    function update() {
        stats.begin();

        //state 1 is red
        context.fillStyle = 'red';
        redBox.draw(context);
        context.save();

        context.fillStyle = 'blue';
        blueBox.draw(context);
        context.save();

        context.fillStyle = 'green';
        context.save();

        context.restore();//store green state.
        context.restore();//store blue state.
        context.restore();//store red state.

        greenBox.draw(context);

        //red circle
        // //reclip to the entire canvas
        // context.beginPath();
        // context.rect(0, 0, 500, 500);
        // context.clip();

        // //draw a blue line that is not clipped
        // context.beginPath();
        // context.strokeStyle = "blue";
        // context.lineWidth = 5;
        // context.arc(100, 100, 50, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false); //full circle
        // context.stroke();
        // context.closePath();

        requestAnimationFrame(update);
        stats.end();
    }

    update();
}

function createCanvas(x, y, width, height) {
    var canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.left = '' + x + 'px';
    canvas.style.top = '' + y + 'px';
    canvas.width = width;
    canvas.height = height;
    canvas.style.background = '#f6e6ca';
    document.body.appendChild(canvas);
    return canvas;
}

function Circle() {
    this.x = 0;
    this.y = 0;
    this.radius = 10;
    this.color = 'none';
}

Circle.prototype.draw = function draw(context) {

}

function Box(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
}

Box.prototype.draw = function draw(context) {
    //draw a big box on the screen
    //context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
    //context.save();
}

