function Box(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
}

Box.prototype.draw = function draw(context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
}

function Ball(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
}

Ball.prototype.draw = function draw(context) {
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, (2 * Math.PI), false);
    context.fill();
}

function Triangle(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
}

Triangle.prototype.draw = function draw(context) {
    context.fillStyle = this.color;
    context.beginPath();
    context.moveTo((this.x + this.size / 2), this.y);
    context.lineTo((this.x + this.size), (this.y + this.size));
    context.lineTo(this.x, (this.y + this.size));
    context.closePath();
    context.fill();
}

function QuadraticCurve(sx, sy, cp1x, cp1y, ex, ey, color) {
    this.sx = sx;
    this.sy = sy;
    this.cp1x = cp1x;
    this.cp1y = cp1y;
    this.ex = ex;
    this.ey = ey;
    this.color = color;
}

QuadraticCurve.prototype.draw = function draw(context) {
    context.strokeStyle = this.color;
    context.fillStyle = 'none';
    context.beginPath();
    context.moveTo(this.sx, this.sy)
    context.quadraticCurveTo(this.cp1x, this.cp1y, this.ex, this.ey);
    //context.closePath();
    context.lineWidth = 4;
    context.lineCap = 'round';
    context.stroke();
}

function BezierCurve(sx, sy, cp1x, cp1y, cp2x, cp2y, ex, ey, color) {
    this.sx = sx;
    this.sy = sy;
    this.cp1x = cp1x;
    this.cp1y = cp1y;
    this.cp2x = cp2x;
    this.cp2y = cp2y;
    this.ex = ex;
    this.ey = ey;
    this.color = color;
}

BezierCurve.prototype.draw = function draw(context) {
    context.strokeStyle = this.color;
    context.fillStyle = 'none';
    context.beginPath();
    context.moveTo(this.sx, this.sy);
    context.bezierCurveTo(this.cp1x, this.cp1y, this.cp2x, this.cp2y, this.ex, this.ey);
    //context.closePath();
    context.lineWidth = 4;
    context.lineCap = 'round';
    context.stroke();
}

function Line(x1, y1, x2, y2, lineWidth, lineCap, color) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.lineWidth = lineWidth;
    this.lineCap = lineCap;
    this.color = color;
}

Line.prototype.draw = function draw(context) {
    context.beginPath()
    context.strokeStyle = this.color;
    context.lineWidth = this.lineWidth;
    context.lineCap = this.lineCap;
    context.moveTo(this.x1, this.y1);
    context.lineTo(this.x2, this.y2);
    context.stroke();
}

function Text(x, y, size, text, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.text = text;
    this.color = color;
}

Text.prototype.draw = function draw(context) {
    context.fillStyle = this.color;
    context.font = '' + this.size + 'px Lato';
    context.textAlign = 'left';
    context.fillText(this.text, this.x, this.y);

}