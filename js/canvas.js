window.addEventListener('load', init, false);

function init() {

    var canvas = undefined;
    var context = undefined;

    const canvasXPos = 30;
    const canvasYPos = 75;
    const canvasWidth = 400;
    const canvasHeight = 400;
    console.log('load');

    var stats = new Stats();
    stats.showPanel(1);
    document.body.appendChild(stats.dom);

    canvas = createCanvas(canvasXPos, canvasYPos, canvasWidth, canvasHeight);
    context = canvas.getContext('2d');

    const box = new Box(10, 10, 40, 40, 'red');
    const ball = new Ball(80, 30, 20, 'blue');
    const triangle = new Triangle(110, 10, 40, 'green');
    const star = new Star(170, 30, 25, 10, 5, 'orange', -90);
    const quadraticCurve = new QuadraticCurve(200, 50, 225, 20, 250, 50, 'red');
    const bezierCurve = new BezierCurve(270, 50, 270, 20, 320, 20, 320, 50, 'blue');

    const allStar = new Star(200, 230, 50, 30, 5, '#ee3344', -90);

    const text = new Text(200, 360, 40, 'Hello World', '#ee3344');

    function update() {
        stats.begin();

        context.clearRect(0, 0, canvas.width, canvas.height);

        box.draw(context);
        ball.draw(context);
        triangle.draw(context);
        quadraticCurve.draw(context);
        bezierCurve.draw(context);
        star.draw(context);

        //Apply a drop shawdow
        context.shadowColor = 'rgba(0, 0, 0, 0.25)';
        context.shadowBlur = 10;
        context.shadowOffsetX = 5;
        context.shadowOffsetY = 5;
        allStar.draw(context);

        //Disable the drop shadow
        context.shadowColor = 'none';
        context.shadowBlur = 0;
        context.shadowOffsetX = 0;
        context.shadowOffsetY = 0;

        text.draw(context);

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


