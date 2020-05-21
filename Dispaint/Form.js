class Form{
    constructor(){
        //Adding all this. variables
        this.titleImg=loadImage("Untitled.png");
        this.play=createButton('Play');
        this.canvasX=createInput("Width of your canvas");
        this.canvasY=createInput("Height of your canvas");
        this.set=createButton('Set Dimensions');
  
   /*Unused Element*/       this.messageX=createElement('h2');
        this.messageY=createElement('h2');
        this.wait=createElement('h2');
        this.note=createElement('h2');
        this.Eraser=createButton('Erase');
         
          
         
         
        


        
    }


    display(){
        //Assigning positions and enabling UI interfaCE
        image(this.titleImg,900,200,1000,600);
        imageMode(CENTER);
        this.play.position(900,700);
this.play.mousePressed(()=>{
    
    this.play.hide();
    this.canvasX.position(800,700);
    this.canvasY.position(800,750);
   

    this.set.position(800,800);
    
    

})
this.set.mousePressed(()=>{
    
    this.posX=this.canvasX.value();
    this.posY=this.canvasY.value();
    
    gameState=3;
    createCanvas(this.posX,this.posY);
    this.canvasX.position(0,15);
    this.canvasY.position(150,15);
    this.set.position(100,0);
    this.Eraser.position(450,15);
   
    
        background("white");
       

    
    
    this.messageX.position(800,200);
    this.messageY.position(800,250);
    
   
    
  
    
})
this.Eraser.mousePressed(()=>{
    drawing.pop(point);
    point=null;
})

 

      


    }
    
    
    }
