
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	this.setLineWidth = function(width) {
		this.currLineWidth = width;
	}

	this.setColour = function(colour) {
		this.currColour = colour;
	}

	this.setEditingMode = function(mode) {
		this.currEditingMode = mode;
	}

	new DnD(canvas, this);

	this.onInteractionStart = function(DnD) {
		if (this.currEditingMode === editingMode.rect) {
			this.currentShape = new Rectangle(DnD.xInit, DnD.yInit, 0, 0, this.currLineWidth, this.currColour);
		} else {
			this.currentShape = new Line(DnD.xInit, DnD.yInit, DnD.xInit, DnD.yInit, this.currLineWidth, this.currColour);
		}
	}.bind(this);

	this.onInteractionUpdate = function(DnD) {
		if (this.currEditingMode === editingMode.rect) {
			this.currentShape.width = DnD.xFinal - DnD.xInit;
			this.currentShape.height = DnD.yFinal - DnD.yInit;
		} else {
			this.currentShape.x2 = DnD.xFinal;
			this.currentShape.y2 = DnD.yFinal;
		}
		drawing.paint(ctx);
		this.currentShape.paint(ctx);
	}

	this.onInteractionEnd = function() {
		drawing.addShape(this.currentShape);
		drawing.paint(ctx, canvas);
		updateShapeList(this.currentShape);
	}

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

};


