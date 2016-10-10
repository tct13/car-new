var Car = function (color, convertible) {
  this.color = color
  this.speed = 0
  this.convertible = convertible

  this.decelerate = function (minusSpeed) {
    this.speed -= minumSpeed
  }
}

module.exports = Car
