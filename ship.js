var shipImage = new Image();
shipImage.src = "pingunave.png";

function Ship() {
  this.x = 0;
  this.y = 0;
  this.width = 140;
  this.height = 60;
  this.rotation = 0;
  this.showFlame = false;
}

Ship.prototype.draw = function (context) {
  context.save();

  context.translate(this.x, this.y);

  context.rotate(this.rotation);

  if (this.showFlame) {
    context.beginPath();
    context.moveTo(-7.5, -5);
    context.lineTo(-15, 0);
    context.lineTo(-7.5, 5);

    context.lineWidth = 1;
    context.strokeStyle = "#ff4141";
    context.stroke();
  }

  if (shipImage.complete && shipImage.naturalWidth > 0) {
    context.drawImage(
      shipImage,
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height
    );
  }

  context.restore();
};