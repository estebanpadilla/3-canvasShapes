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

function QuadraticCurve(sx, sy, cx, cy, ex, ey, color) {
    this.sx = sx;
    this.sy = sy;
    this.cx = cx;
    this.cy = cy;
    this.ex = ex;
    this.ey = ey;
    this.color = color;
}

QuadraticCurve.prototype.draw = function draw(context) {
    context.strokeStyle = this.color;
    context.fillStyle = 'none';
    context.beginPath();
    context.moveTo(this.sx, this.sy)
    context.quadraticCurveTo(this.cx, this.cy, this.ex, this.ey);
    context.lineWidth = 4;
    context.lineCap = 'round';
    context.stroke();
}