


function rooladiceforme() {
    // Uncomment below code to hide developer name
    // document.querySelector(".abtdeveloper").style.display = "none";

    
    // For Player 1
    // Generating Random no and then changing img src 
    
    var  randomnumberforplayer1 =Math.floor(Math.random()*6+1);
    var player1 = randomnumberforplayer1;
    // console.log("./images/dice"+player1);
    console.log(player1)
    document.querySelector("#myImg").src = "./images/dice"+player1+".png";
    
    
    
    
    // For Player 1
    // Generating Random no and then changing img src 
    var randomnumberforplayer2 =Math.floor(Math.random()*6+1);
    var player2 = randomnumberforplayer2;
    // console.log("./images/dice"+player2);
    console.log(player2)
    document.querySelector("#myImg2").src = "./images/dice"+player2+".png";
    
    
    // Who Wins The Game
    if(player1>player2){
        document.querySelector("h4").innerHTML = "Player 1 Wins!"
        document.querySelector("h4").style.color = "Yellow"
        
    }else if(player1===player2){
        document.querySelector("h4").innerHTML = "Match Draw!"
        document.querySelector("h4").style.color = "red"
        
        
    }else{
        document.querySelector("h4").innerHTML = "Player 2 Wins!"
        document.querySelector("h4").style.color = "LightGreen"
        
    }
}


