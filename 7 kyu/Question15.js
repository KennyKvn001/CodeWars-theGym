class Cuboid {
    constructor(length, width, height){
      this.length = length
      this.width = width
      this.height = height
    }
    get surfaceArea(){
        return 2 * (this.width * this.length + this.width * this.height + this.length * this.height)
    }
    get volume(){
      return this.length * this.width * this.height
    }
  }
  class Cube extends Cuboid {
    constructor(length){
      super(length, length, length);
    }
  }