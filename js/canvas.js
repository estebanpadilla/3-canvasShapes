window.addEventListener('load', init, false);
var canvas = undefined;
var context = undefined;

const canvasXPos = 30;
const canvasYPos = 75;
const canvasWidth = 400;
const canvasHeight = 400;

function init() {
    console.log('load');

    var stats = new Stats();
    stats.showPanel(1);
    document.body.appendChild(stats.dom);

    canvas = createCanvas(canvasXPos, canvasYPos, canvasWidth, canvasHeight);
    context = canvas.getContext('2d');

    const box = new Box(10, 10, 40, 40, 'red');
    const ball = new Ball(80, 30, 20, 'blue');
    const triangle = new Triangle(110, 10, 40, 'green');
    const quadraticCurve = new QuadraticCurve(160, 50, 210, 0, 260, 50, 'red');

    function update() {
        stats.begin();

        box.draw(context);
        ball.draw(context);
        triangle.draw(context);
        quadraticCurve.draw(context);

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


