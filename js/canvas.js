/*
OOP in javascript
Create shapes
Rect, Circle, Lines, CuadraticCurve, BezierCurve
Apply drop shadow.
*/

window.addEventListener('load', init, false);

function init() {

    var canvas = undefined;
    var context = undefined;

    var xpos = 60;
    var ypos = 100;
    var width = window.innerWidth;
    var height = window.innerHeight;

    canvas = createCanvas(width, height);
    context = canvas.getContext('2d');

    const box = new Box(xpos, ypos, 40, 40, 'red');
    xpos += 80;
    const ball = new Ball(xpos, (ypos + 20), 20, 'blue');
    xpos += 40;
    const triangle = new Triangle(xpos, ypos, 40, 'green');
    xpos += 60;
    ypos += 40;
    const quadraticCurve = new QuadraticCurve(xpos, ypos, (xpos + 30), (ypos - 50), (xpos + 60), ypos, 'red');
    xpos += 80;
    const bezierCurve = new BezierCurve(xpos, ypos, xpos, (ypos - 50), (xpos + 60), (ypos - 50), (xpos + 60), ypos, 'blue');
    xpos = 60;
    ypos = 200;
    const text = new Text(xpos, ypos, 40, 'Hello World', 'black');
    ypos = 250;
    const line1 = new Line(xpos, ypos, (xpos + 200), (ypos + 100), 20, 'round', 'brown');
    ypos = 280;
    const line2 = new Line(xpos, ypos, (xpos + 200), (ypos + 100), 20, 'butt', 'black');
    ypos = 310;
    const line3 = new Line(xpos, ypos, (xpos + 200), (ypos + 100), 20, 'round', 'blue');

    xpos = 25;
    ypos = 25;
    const line4 = new Line(xpos, ypos, (xpos + 200), ypos, 50, 'round', '#ee3344');

    ball.draw(context);
    triangle.draw(context);
    quadraticCurve.draw(context);
    bezierCurve.draw(context);
    line1.draw(context);
    line2.draw(context);
    line3.draw(context);
    line4.draw(context);

    //Apply a drop shawdow
    context.shadowColor = 'rgba(0, 0, 0, 0.25)';
    context.shadowBlur = 10;
    context.shadowOffsetX = 5;
    context.shadowOffsetY = 5;
    box.draw(context);

    //Disable the drop shadow
    context.shadowColor = 'none';
    context.shadowBlur = 0;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;

    text.draw(context);
}

function createCanvas(width, height) {
    var canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.left = '0px';
    canvas.style.top = '0px';
    canvas.width = width;
    canvas.height = height;
    canvas.style.background = '#f6e6ca';
    document.body.appendChild(canvas);
    return canvas;
}


