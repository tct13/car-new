var Car = function (color, convertible) {
  this.convertible = convertible
  this.speed = 0
  this.color = color

  this.accelerate = function(num) {
      this.speed += num
  }

  this.decelerate = function (minusSpeed) {
    this.speed -= minumSpeed
  }

  this.changeColor = function (newColor) {
    this.color = newColor
  }
  
}


// 22222222
module.exports = Car
