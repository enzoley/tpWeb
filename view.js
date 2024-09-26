var shapeListDiv = document.getElementById('shapeList');

var shapeList = [];

function updateShapeList(shape) {
    shapeList.push(shape);
    var shapeId = 'shape-' + shapeList.length;

    var li = document.createElement('li');
    li.id = shapeId;
    li.innerHTML = "Shape: " + shape.constructor.name + " | Color: " + shape.color + " | Width: " + shape.lineWidth;

    var delButton = document.createElement('button');
    delButton.type = "button";
    delButton.className = "btn btn-default";
    delButton.innerHTML = '<span class="glyphicon glyphicon-remove-sign"></span>';

    li.appendChild(delButton);
    shapeListDiv.appendChild(li);

    delButton.addEventListener('click', function() {
        var index = shapeList.indexOf(shape);
        if (index > -1) {
            shapeList.splice(index, 1);
            drawing.removeShape(shape);
            redrawCanvas(drawing, ctx, canvas);
        }
        shapeListDiv.removeChild(li);
    });
}

function redrawCanvas(drawing, ctx, canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawing.paint(ctx);

}




