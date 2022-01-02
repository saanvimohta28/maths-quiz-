function login(){
    var login =document.getElementById("textinput").value;
    var login2 =document.getElementById("textinput1").value;
    localStorage.setItem("p1",login);
    localStorage.setItem("p2",login2);

    window.location="game_page.html";
}
