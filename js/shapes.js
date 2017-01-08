/**
 * Defines a Box shape for the canvas
 * @constructor
 * @param {number} x - x position.
 * @param {number} y - y position.
 * @param {number} width - Width for the shape.
 * @param {number} height - Height for the shape.
 * @param {string} color - Color for the shape.
 * @param {CanvasRenderingContext2D} context - The 2d rendering context from the canvas.
 */
function Box(x, y, width, height, color, context) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.context = context;
}

Box.prototype.render = function render() {
    this.context.fillStyle = this.color;
    this.context.fillRect(this.x, this.y, this.width, this.height);
    this.context.fill();
}

Box.prototype.update = function () {
    this.render();
}

/**
 * Defines a Box shape for the canvas
 * @constructor
 * @param {number} x - x position.
 * @param {number} y - y position.
 * @param {number} radius - Radius for the shape.
 * @param {string} color - Color for the shape.
 * @param {CanvasRenderingContext2D} context - The 2d rendering context from the canvas.
 */
function Ball(x, y, radius, color, context) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.context = context;
}

Ball.prototype.render = function render() {
    this.context.fillStyle = this.color;
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, (2 * Math.PI), false);
    this.context.fill();
    this.context.closePath();
}
Ball.prototype.update = function () {
    this.render();
}




/**
 * Defines a Triangle shape for the canvas
 * @constructor
 * @param {number} x - x position.
 * @param {number} y - y position.
 * @param {number} size - Size for the shape.
 * @param {string} color - Color for the shape.
 * @param {CanvasRenderingContext2D} context - The 2d rendering context from the canvas.
 */
function Triangle(x, y, size, color, context) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.context = context;
}

Triangle.prototype.render = function () {
    this.context.fillStyle = this.color;
    this.context.beginPath();
    this.context.moveTo((this.x + this.size / 2), this.y);
    this.context.lineTo((this.x + this.size), (this.y + this.size));
    this.context.lineTo(this.x, (this.y + this.size));
    this.context.closePath();
    this.context.fill();
}

Triangle.prototype.update = function () {
    this.render();
}

/**
 * Defines a QuadraticCurve shape for the canvas
 * @constructor
 * @param {number} sx - Start x postion.
 * @param {number} sy - Start y postion.
 * @param {number} cp1x - X position for the control point.
 * @param {number} cp1y - Y position for the control point.
 * @param {number} ex - End x postion.
 * @param {number} ey - End y postion.
 * @param {string} color - Color for the shape.
 * @param {CanvasRenderingContext2D} context - The 2d rendering context from the canvas.
 */
function QuadraticCurve(sx, sy, cp1x, cp1y, ex, ey, color, context) {
    this.sx = sx;
    this.sy = sy;
    this.cp1x = cp1x;
    this.cp1y = cp1y;
    this.ex = ex;
    this.ey = ey;
    this.color = color;
    this.context = context;
}

QuadraticCurve.prototype.render = function () {
    this.context.strokeStyle = this.color;
    this.context.fillStyle = 'none';
    this.context.beginPath();
    this.context.moveTo(this.sx, this.sy)
    this.context.quadraticCurveTo(this.cp1x, this.cp1y, this.ex, this.ey);
    //context.closePath();
    this.context.lineWidth = 4;
    this.context.lineCap = 'round';
    this.context.stroke();
}

QuadraticCurve.prototype.update = function () {
    this.render();
}

/**
 * Defines a BezierCurve shape for the canvas
 * @constructor
 * @param {number} sx - Start x postion.
 * @param {number} sy - Start y postion.
 * @param {number} cp1x - X position for the first control point.
 * @param {number} cp1y - Y position for the first control point.
 * @param {number} cp2x - X position for the second control point.
 * @param {number} cp2y - Y position for the second control point.
 * @param {number} ex - End x postion.
 * @param {number} ey - End y postion.
 * @param {string} color - Color for the shape.
 * @param {CanvasRenderingContext2D} context - The 2d rendering context from the canvas.
 */
function BezierCurve(sx, sy, cp1x, cp1y, cp2x, cp2y, ex, ey, color, context) {
    this.sx = sx;
    this.sy = sy;
    this.cp1x = cp1x;
    this.cp1y = cp1y;
    this.cp2x = cp2x;
    this.cp2y = cp2y;
    this.ex = ex;
    this.ey = ey;
    this.color = color;
    this.context = context;
}

BezierCurve.prototype.render = function () {
    this.context.strokeStyle = this.color;
    this.context.fillStyle = 'none';
    this.context.beginPath();
    this.context.moveTo(this.sx, this.sy);
    this.context.bezierCurveTo(this.cp1x, this.cp1y, this.cp2x, this.cp2y, this.ex, this.ey);
    //context.closePath();
    this.context.lineWidth = 4;
    this.context.lineCap = 'round';
    this.context.stroke();
}

BezierCurve.prototype.update = function () {
    this.render();
}

/**
 * Defines a Line shape for the canvas
 * @constructor
 * @param {number} x1 - Start x postion.
 * @param {number} y1 - Start y postion.
 * @param {number} x2 - End x postion.
 * @param {number} y2 - End y postion.
 * @param {number} lineWidth - Width for the line.
 * @param {number} lineCap - Line cap style.
 * @param {string} color - Color for the shape.
 * @param {CanvasRenderingContext2D} context - The 2d rendering context from the canvas.
 */
function Line(x1, y1, x2, y2, lineWidth, lineCap, color, context) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.lineWidth = lineWidth;
    this.lineCap = lineCap;
    this.color = color;
    this.context = context;
}

Line.prototype.render = function () {
    this.context.beginPath()
    this.context.strokeStyle = this.color;
    this.context.lineWidth = this.lineWidth;
    this.context.lineCap = this.lineCap;
    this.context.moveTo(this.x1, this.y1);
    this.context.lineTo(this.x2, this.y2);
    this.context.stroke();
}

Line.prototype.update = function () {
    this.render();
}

/**
 * Defines a Text shape for the canvas
 * @constructor
 * @param {number} x - X postion.
 * @param {number} y - Y postion.
 * @param {number} Size - Text size.
 * @param {string} text - Text.
 * @param {string} color - Color for the shape.
 * @param {CanvasRenderingContext2D} context - The 2d rendering context from the canvas.
 */
function TextBox(x, y, size, text, color, context) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.text = text;
    this.color = color;
    this.context = context;
}

TextBox.prototype.render = function () {
    this.context.fillStyle = this.color;
    this.context.font = '' + this.size + 'px Lato';
    this.context.textAlign = 'left';
    this.context.fillText(this.text, this.x, this.y);
}

TextBox.prototype.update = function () {
    this.render();
}

