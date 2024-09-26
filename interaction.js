
// La création d'un Dnd requière un canvas et un interacteur.

// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
    this.xInit = 0;
    this.yInit = 0;
    this.xFinal = 0;
    this.yFinal = 0;
    this.moussePressed = false


    DnD.prototype.pressDown = function(evt) {
      if(!this.moussePressed) {
        this.xInit = getMousePosition(canvas, evt).x;
        this.yInit = getMousePosition(canvas, evt).y;
        this.moussePressed = true;
        console.log(this.xInit, this.yInit);
        interactor.onInteractionStart(this);
      }
    }

    DnD.prototype.moveMouse = function(evt) {
      if(this.moussePressed) {
        this.xFinal = getMousePosition(canvas, evt).x;
        this.yFinal = getMousePosition(canvas, evt).y;
        this.moussePressed = true;
        console.log(this.xFinal, this.yFinal);
        interactor.onInteractionUpdate(this);
      }
    }

    DnD.prototype.releaseUp = function(evt) {
      if(this.moussePressed) {
        this.xFinal = getMousePosition(canvas, evt).x;
        this.yFinal = getMousePosition(canvas, evt).y;
        this.moussePressed = false;
        console.log(this.xFinal, this.yFinal);
        interactor.onInteractionEnd(this);
      }
    }

    canvas.addEventListener('mousedown', this.pressDown, false);
    canvas.addEventListener('mousemove', this.moveMouse, false);
    canvas.addEventListener('mouseup', this.releaseUp, false);
}


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



