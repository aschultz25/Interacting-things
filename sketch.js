let circle1, circle2

function setup() {
  createCanvas(400, 400)
  circle1 = {
    x: random(width),
    y: random(height),
    size: 50,
    xSpeed: random(2, 4),
    ySpeed: random(2, 4),
    color: color(255, 0, 0) 
  }

  circle2 = {
    x: random(width),
    y: random(height),
    size: 50, 
    xSpeed: random(2, 4),
    ySpeed: random(2, 4),
    color: color(0, 255, 0) 
  }
}

function draw() {
  background(220)

  moveCircle(circle1)
  moveCircle(circle2)

  let d = dist(circle1.x, circle1.y, circle2.x, circle2.y)
  if (d < (circle1.size + circle2.size) / 2) {
    let tempColor = circle1.color
    circle1.color = circle2.color
    circle2.color = tempColor

    circle1.xSpeed *= -1
    circle1.ySpeed *= -1
    circle2.xSpeed *= -1
    circle2.ySpeed *= -1

    circle1.xSpeed += random(0.5, 1)
    circle1.ySpeed += random(0.5, 1)
    circle2.xSpeed += random(0.5, 1)
    circle2.ySpeed += random(0.5, 1)
  }

  fill(circle1.color)
  ellipse(circle1.x, circle1.y, circle1.size)
  
  fill(circle2.color)
  ellipse(circle2.x, circle2.y, circle2.size)
}

function moveCircle(circle) {
  circle.x += circle.xSpeed
  circle.y += circle.ySpeed


  if (circle.x - circle.size / 2 < 0) {
    circle.x = circle.size / 2
    circle.xSpeed *= -1
    circle.xSpeed += random(0.5, 1)
  } else if (circle.x + circle.size / 2 > width) {
    circle.x = width - circle.size / 2
    circle.xSpeed *= -1
    circle.xSpeed += random(-1, 1)
  }
  
  if (circle.y - circle.size / 2 < 0) {
    circle.y = circle.size / 2
    circle.ySpeed *= -1
    circle.ySpeed += random(0.5, 1)
  } else if (circle.y + circle.size / 2 > height) {
    circle.y = height - circle.size / 2
    circle.ySpeed *= -1 
    circle.ySpeed += random(0.5, 1)
  }
}

// This resets the code on key press, but is there a simpler way to reset it?   
function keyPressed() {
  circle1.size = 50
  circle2.size = 50
  circle1.x = random(width)
  circle1.y = random(height)
  circle2.x = random(width)
  circle2.y = random(height)
  circle1.xSpeed = random(2, 4)
  circle1.ySpeed = random(2, 4)
  circle2.xSpeed = random(2, 4)
  circle2.ySpeed = random(2, 4)

  circle1.color = color(255, 0, 0)
  circle2.color = color(0, 255, 0)
}
