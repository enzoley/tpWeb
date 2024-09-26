
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing() {
    this.shapes = [];

    this.getShapes = function() {
        return this.shapes;
    }

    this.addShape = function(shape) {
        this.shapes.push(shape);
    }

    this.removeShape = function(shape) {
        var index = this.shapes.indexOf(shape);
        if (index > -1) {
            this.shapes.splice(index, 1);
        }
    };

    Drawing.prototype.paint = function(ctx) {
        //console.log(this.getForms());
        ctx.fillStyle = '#F0F0F0'; // set canvas' background color
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        this.getShapes().forEach(function (eltDuTableau) {
            // now fill the canvas
            eltDuTableau.paint(ctx);
        });
    };


}

function Shape(color, lineWidth) {
    this.color = color;
    this.lineWidth = lineWidth;

    this.getColor = function() {
        return this.color;
    }

    this.getLineWidth = function() {
        return this.lineWidth;
    }

    Shape.prototype.paint = function(ctx) {
        ctx.strokeStyle = this.getColor();
        ctx.lineWidth = this.getLineWidth();
    };
}

function Rectangle(x, y, width, height,lineWidth, color) {

    this.xG = x;
    this.yG = y;
    this.width = width;
    this.height = height;
    Shape.call(this, color, lineWidth);

    this.getInitX = function() {
        return this.xG;
    }

    this.getInitY = function() {
        return this.yG;
    }

    this.getFinalX = function() {
        return x + this.width;
    }

    this.getFinalY = function() {
        return y + this.height;
    }


    Rectangle.prototype.paint = function(ctx) {
        Shape.prototype.paint.call(this, ctx);
        ctx.beginPath();
        ctx.rect(this.getInitX(), this.getInitY(), this.width, this.height);
        ctx.stroke();
    };

}

function Line(x1, y1, x2, y2, lineWidth, color) {

    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    Shape.call(this, color, lineWidth);

    this.getInitX = function() {
        return this.x1;
    }

    this.getInitY = function() {
        return this.y1;
    }

    this.getFinalX = function() {
        return this.x2;
    }

    this.getFinalY = function() {
        return this.y2;
    }

    Line.prototype.paint = function(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.getInitX(), this.getInitY());
        ctx.lineTo(this.getFinalX(), this.getFinalY());
        ctx.stroke();
    };
}


