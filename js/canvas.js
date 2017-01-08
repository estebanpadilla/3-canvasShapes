/*
OOP in javascript
Create shapes
Rect, Circle, Lines, CuadraticCurve, BezierCurve, TextBox
*/

window.addEventListener('load', init, false);

function init() {

    var canvas = null;
    var context = null;

    var xpos = 60;
    var ypos = 100;
    var width = window.innerWidth;
    var height = window.innerHeight;

    canvas = createCanvas(width, height);
    context = canvas.getContext('2d');

    var box = new Box(xpos, ypos, 40, 40, 'red', context).update();

    xpos += 80;
    var ball = new Ball(xpos, (ypos + 20), 20, 'blue', context).update();

    xpos += 40;
    const triangle = new Triangle(xpos, ypos, 40, 'green', context).update();

    xpos += 60;
    ypos += 40;
    const quadraticCurve = new QuadraticCurve(xpos, ypos, (xpos + 30), (ypos - 50), (xpos + 60), ypos, 'red', context).update();

    xpos += 80;
    const bezierCurve = new BezierCurve(xpos, ypos, xpos, (ypos - 50), (xpos + 60), (ypos - 50), (xpos + 60), ypos, 'blue', context).update();

    xpos = 60;
    ypos = 200;
    const text = new TextBox(xpos, ypos, 40, 'Hello World', 'white', context).update();

    ypos = 250;
    const line1 = new Line(xpos, ypos, (xpos + 200), (ypos + 100), 20, 'round', 'white', context).update();

    ypos = 280;
    const line2 = new Line(xpos, ypos, (xpos + 200), (ypos + 100), 20, 'butt', 'white', context).update();

    ypos = 310;
    const line3 = new Line(xpos, ypos, (xpos + 200), (ypos + 100), 20, 'round', 'white', context).update();

    xpos = 25;
    ypos = 25;
    const line4 = new Line(xpos, ypos, (xpos + 200), ypos, 50, 'round', '#ee3344', context).update();
}

function createCanvas(width, height) {
    var canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.style.position = 'absolute';
    canvas.width = width;
    canvas.height = height;
    canvas.style.background = '#2b0d3b';
    return canvas;
}


