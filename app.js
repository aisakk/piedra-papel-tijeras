let papel = document.getElementById("papel");
let piedra = document.getElementById("piedra");
let tijera = document.getElementById("tijera");
let winnerDOM = document.getElementById("winner");
let ganador = document.getElementsByClassName("ganador")
let machine = ["papel", "piedra", "tijera"];
let winner = ["Maquina", "Usuario"]
function choiceOption(option) {
    let random = Math.trunc(Math.random() * 3);
    let choice = machine[random];

    if(option === "papel" && choice === "papel"){
       let texto = document.createTextNode("La maquina escogio Papel, esto es un Empate");
       winnerDOM.innerHTML = "";
       winnerDOM.appendChild(texto) 
       winnerDOM.appendChild(papel.cloneNode(true)) 
    }
    if(option === "papel" && choice === "tijera"){
        let texto = document.createTextNode("La maquina escogio Tijera, ¡Perdiste!");
        winnerDOM.innerHTML = "";
       winnerDOM.appendChild(texto) 
       winnerDOM.appendChild(papel.cloneNode(true)) 
    }
    if(option === "papel" && choice === "piedra"){
        let texto = document.createTextNode("La maquina escogio Piedra, ¡Felicitaciones Ganaste!");
        winnerDOM.innerHTML = "";
        winnerDOM.appendChild(texto) 
        winnerDOM.appendChild(papel.cloneNode(true)) 
    }
    
    if(option === "piedra" && choice === "piedra"){
        let texto = document.createTextNode("La maquina escogio Piedra, esto es un Empate");
        winnerDOM.innerHTML = "";
        winnerDOM.appendChild(texto) 
        winnerDOM.appendChild(piedra.cloneNode(true)) 
    }
    if(option === "piedra" && choice === "tijera"){
        let texto = document.createTextNode("La maquina escogio Tijera, ¡Felicitaciones Ganaste!");
        winnerDOM.innerHTML = "";
        winnerDOM.appendChild(texto) 
        winnerDOM.appendChild(piedra.cloneNode(true)) 
    }
    if(option === "piedra" && choice === "papel"){
        let texto = document.createTextNode("La maquina escogio Papel, ¡Perdiste!");
        winnerDOM.innerHTML = "";
        winnerDOM.appendChild(texto) 
        winnerDOM.appendChild(piedra.cloneNode(true)) 
    }

    if(option === "tijera" && choice === "tijera"){
        let texto = document.createTextNode("La maquina escogio Tijera, esto es un Empate");
        winnerDOM.innerHTML = "";
        winnerDOM.appendChild(texto) 
        winnerDOM.appendChild(tijera.cloneNode(true)) 
    }
    if(option === "tijera" && choice === "papel"){
        let texto = document.createTextNode("La maquina escogio Papel, ¡Felicitaciones Ganaste!");
        winnerDOM.innerHTML = "";
        winnerDOM.appendChild(texto) 
        winnerDOM.appendChild(tijera.cloneNode(true))
    }
    if(option === "tijera" && choice === "piedra"){
        let texto = document.createTextNode("La maquina escogio Piedra, ¡Perdiste!");
        winnerDOM.innerHTML = "";
        winnerDOM.appendChild(texto) 
        winnerDOM.appendChild(tijera.cloneNode(true))
    }
    
    //return random;
}

papel.addEventListener("click", ()=>{
    choiceOption("papel")
})
piedra.addEventListener("click", ()=>{
    choiceOption("piedra")
})
tijera.addEventListener("click", ()=>{
    choiceOption("tijera")
})