function gameClick(id){
    const itemClicked = document.getElementById(id);
    let text = itemClicked.innerText;
    if(text === "") itemClicked.innerText = "X";
    if(text === "X") itemClicked.innerText = "O";
    if(text === "O") itemClicked.innerText = "X";
}

function createRoom(){
    //zeby ogolnie stworzyc rooma mozna wyslac httpka na podany port
    //zeby grac wystarczy polaczyc dwoch graczy do jednego rooma


}


// okey mamy mvp, prosta gierke klikana kolko i krzyzyk
// opcje dolaczenia do pokoju
// opcja generowanie seeda do gry


