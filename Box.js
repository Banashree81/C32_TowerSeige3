class Box {
    constructor(x, y, width, height, colour) {
      var options = {
          'restitution':0.7,
          'friction':1.0,
          'density':0.5
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.color = colour;     
      this.visibility = 255;
      this.image = loadImage("red_square.png");
      World.add(world, this.body);
    }
    display(){
      

      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);   
      fill(this.color);

      if(this.body.speed < 3){      
        
        image(this.image,0, 0, this.width, this.height);        

      }else {        
        
        World.remove(world, this.body);
        tint (255, this.visibility);
        this.visibility = this.visibility -10;
        image(this.image,0, 0, this.width, this.height);  
        
        
      }
      pop();
     
    }

    score() {
      //console.log(this.visibility);
      if(this.visibility < 0 && this.visibility > -105){
        score++;

      }
    }
  };
  