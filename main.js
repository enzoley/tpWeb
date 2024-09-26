var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var butRect = document.getElementById('butRect');
var butLine = document.getElementById('butLine');
var spinnerWidth = document.getElementById('spinnerWidth');
var colour = document.getElementById('colour');


canvas.width=800
canvas.height=600

// Code temporaire pour tester le DnD
/*new DnD(canvas);*/
ctx.fillStyle = '#F0F0F0'; // set canvas' background color
ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas
/////

// Code temporaire pour tester l'affiche de la vue
/*var rec = new Rectangle(10, 20, 50, 100, 5, '#00CCC0');
rec.paint(ctx);
var ligne = new Line(10, 20, 50, 100, 5, '#00CCC0');
ligne.paint(ctx);*/
// tester également Dessin.
////
// Code final à utiliser pour manipuler Pencil.
var drawing = new Drawing();
var pencil = new Pencil(ctx, drawing, canvas);
drawing.paint(ctx, canvas);

butRect.addEventListener('click', function() {
    pencil.setEditingMode(editingMode.rect);
});

butLine.addEventListener('click', function() {
    pencil.setEditingMode(editingMode.line);
});

spinnerWidth.addEventListener('change', function() {
    pencil.setLineWidth(spinnerWidth.value);
});

colour.addEventListener('change', function() {
    pencil.setColour(colour.value);
});



