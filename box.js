class Box
  {
    constructor(x, y, width, height, velocityX)
    {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.velocityX = velocityX;
    }

    show()
    {
      rect(this.x, this.y, this.width, this.height);
    }

    move()
    {
      this.x = this.x + this.velocityX;
    }
  
  }

  
