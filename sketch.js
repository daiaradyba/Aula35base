


function setup(){
  database = firebase.database();
 
  createCanvas(500,500);

  


  //var hypnoticBallPosition = database.ref('Posicao');
  //hypnoticBallPosition.on("value", readPosition, showError);
}

function draw(){
  background("white");
  
    
    drawSprites();
  
}


function readPosition(data){
 // posicao = data.val();
 // console.log(posicao)
 // hypnoticBall.x = posicao.x;
  //hypnoticBall.y = posicao.y;
}

function showError(){
  console.log("Error in writing to the database");
}
