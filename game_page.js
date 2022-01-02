player1name=localStorage.getItem("p1");
player2name=localStorage.getItem("p2");
player1score=0;
player2score=0;
document.getElementById("p1n").innerHTML=player1name+":";
document.getElementById("p2n").innerHTML=player2name+":";
document.getElementById("p1score").innerHTML=player1score;
document.getElementById("p2score").innerHTML=player2score;
document.getElementById("Question").innerHTML="Question Turn -"+player1name;
document.getElementById("Answer").innerHTML="Answer Turn -"+player2name;
function sending(){
    nubmer1 = document.getElementById("inputid").value;
    number2 = document.getElementById("inputid1").value;
    actual= parseInt(nubmer1)*parseInt(number2);
    var question= "<h4 id='word_display'>"+nubmer1+"X"+number2+"</h4>";
    var input= "<br> Answer: <input id='input_check_box' type='text' > ";
    var button = "<br> <br> <button class='btn btn-info'  onclick='checkbt()'> check </button>";
    var row = question+input+button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("inputid").value=" ";
    document.getElementById("inputid1").value=" ";
}
var playerturn = "player1";
var answerturn = "player2";
function checkbt(){
    get_ans = document.getElementById("input_check_box").value;
    
    if(actual==get_ans){
     if(answerturn=="player1"){
         player1score=player1score+1;
         document.getElementById("p1score").innerHTML=player1score;

     }
     else{
         player2score=player2score+1;
         document.getElementById("p2score").innerHTML=player2score;
     }
    }
    if(playerturn=="player1"){
        playerturn="player2";
        document.getElementById("Question").innerHTML="Question turn- "+player2name;
    }
    else{
        playerturn="player1";
        document.getElementById("Question").innerHTML="Question turn- "+player1name;
    }
    if(answerturn=="player1"){
        answerturn="player2";
        document.getElementById("Answer").innerHTML="Answer turn - "+player2name;
    }
    else{
        answerturn="player1";
        document.getElementById("Answer").innerHTML="Answer turn - "+player1name;
    }
    document.getElementById('output').innerHTML=" ";

}
