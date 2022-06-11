// just playing around with circles and recursion

function setup() {
  createCanvas(2000, 1366);
}

function draw() {
  background(220);
  const params = [600, 600, 600]
  arrowHead(...params)
  // looksLikeTexture(...params)
}

function arrowHead(x, y, r) {
  noFill()
  circle(x, y, r)
  if (r > 4) {
    arrowHead(x + r/1, y, r/2)
    arrowHead(x - r/3, y, r/2)
    arrowHead(x, y + r/3, r/2)
    arrowHead(x, y - r/3, r/2)
  }
}

function looksLikeTexture(x, y, r) {
  noFill()
  circle(x, y, r)
  if (r > 4) {
    looksLikeTexture(x + r/3, y, r/2)
    looksLikeTexture(x - r/2, y, r/2)
    looksLikeTexture(x, y + r/2, r/2)
    looksLikeTexture(x, y - r/2, r/2)
  }
}
