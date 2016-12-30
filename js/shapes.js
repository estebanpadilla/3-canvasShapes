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
    context.closePath();
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
    context.closePath();
    context.lineWidth = 4;
    context.lineCap = 'round';
    context.stroke();
}

function Star(x, y, size, innerSize, piers, color, starAngle) {
    this.x = x;
    this.y = y;
    this.piers = piers;
    this.size = size;
    this.innerSize = innerSize;
    this.color = color;
    this.points = [];
    this.angleBetweenPoints = 360 / (piers * 2);
    this.starAngle = starAngle;
    this.isMovingUp = true;
    this.isMovingDown = false;
    this.calculatePoints();
}

Star.prototype.calculatePoints = function calculatePoints() {

    this.points = [];

    this.starAngle += 0.75;

    if (this.starAngle == 360) {
        this.starAngle = 0;
    }

    if (this.isMovingUp) {
        if (this.innerSize >= this.size) {
            this.isMovingUp = false;
            this.isMovingDown = true;
            this.piers += 1;
            this.angleBetweenPoints = 360 / (this.piers * 2);
        } else {
            this.innerSize += 0.5;
            this.size -= 1.5;
        }
    }

    if (this.isMovingDown) {
        if (this.innerSize <= 20) {
            this.isMovingDown = false;
            this.isMovingUp = true;

        } else {
            this.innerSize -= 0.5;
            this.size += 1.5;
        }
    }

    for (var i = 0; i < (this.piers * 2); i++) {
        if (i % 2 == 0) {
            sideB = (Math.sin((this.starAngle * (Math.PI / 180)))) * this.size;
            sideB += this.y;
            sideA = (Math.cos((this.starAngle * (Math.PI / 180)))) * this.size;
            sideA += this.x;
            this.points.push({ x: sideA, y: sideB });
            this.starAngle += (this.angleBetweenPoints);
        } else {
            sideB = (Math.sin((this.starAngle * (Math.PI / 180)))) * (this.innerSize);
            sideB += this.y;
            sideA = (Math.cos((this.starAngle * (Math.PI / 180)))) * (this.innerSize);
            sideA += this.x;
            this.points.push({ x: sideA, y: sideB });
            this.starAngle += (this.angleBetweenPoints);
        }
    }
}

Star.prototype.draw = function draw(context) {

    //Enable for animation
    //this.calculatePoints();

    context.fillStyle = this.color;
    context.beginPath();
    context.moveTo(this.points[0].x, this.points[0].y);
    for (var i = 1; i < this.points.length; i++) {
        context.lineTo(this.points[i].x, this.points[i].y);
    }
    context.lineWidth = 4;
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.closePath();
    //context.stroke();

    context.fill();

    //Enable to show circles
    // context.beginPath();
    // context.arc(this.x, this.y, this.size, 0, (Math.PI * 2), false);
    // context.lineWidth = 1;
    // context.stroke();
    // context.closePath();

    // context.beginPath();
    // context.arc(this.x, this.y, (this.size / 3), 0, (Math.PI * 2), false);
    // context.lineWidth = 1;
    // context.stroke();
    // context.closePath();
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
    context.textAlign = 'center';
    context.fillText(this.text, this.x, this.y);

}