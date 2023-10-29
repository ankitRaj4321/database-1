var Ball, database;
var position;
var database;



function setup() {

  createCanvas(500, 500);
  console.log(database);

  Ball = createSprite(250, 250, 10, 10);
  Ball.shapeColor = "red";
  

  var ballPosition = database.ref("ball/position");
  Ballposition.on("value", readPosition);

  database = firebase.database();
}

function draw() {
  background("white");

  if (keyDown(LEFT_ARROW)) {
    writePosition(-1, 0);
  }
  else if (keyDown(RIGHT_ARROW)) {
    writePosition(1, 0);
  }
  else if (keyDown(UP_ARROW)) {
    writePosition(0, -1);
  }
  else if (keyDown(DOWN_ARROW)) {
    writePosition(0, +1);
  }
  drawSprites();

}

function writePosition(x, y) {
database.ref("ball/position").set({
  "x":position.x+x,
  "y":position.y+y
});

}

function readPosition(data) {
position = data.val();
console.log(position.x);
Ball.x=position.x;
Ball.y=position.y;
}

function showError() {
  console.log("error");
}
