var Car = function (color, convertible) {
  this.color = color
  this.speed = 0
  this.convertible = convertible


  this.accelerate = function(num) {
    this.speed += num
  }

  this.addColor = function(newColor) {
    this.color = newColor
  }

}

module.exports = Car
