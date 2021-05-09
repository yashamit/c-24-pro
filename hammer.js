class Hammer{
    constructor(x,y){
   var options={ 
       density : 100 ,
       friction :1,
       restitution:0.8
   }
   this.body = Bodies.rectangle(x , y , 90 , 25 , options)
   this.width = 90
   this.height= 25
   
   World.add( world , this.body)
    }
    display(){
        var pos = this.body.position
        pos.x = mouseX
        pos.y = mouseY

        push()
        translate(pos.x , pos.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        fill("cyan")
        rect(0, 0, this.width, this.height);
        pop()

        

    }
}