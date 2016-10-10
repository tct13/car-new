var Car = function (color, convertible) {
  this.convertible = convertible
  this.speed = 0
  this.color = color

  this.decelerate = function (minusSpeed) {
    this.speed -= minumSpeed
  }
  this.changeColor = function (newColor) {
    this.color = newColor
  }
}

module.exports = Car
