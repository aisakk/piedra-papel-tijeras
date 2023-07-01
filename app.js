let papel = document.getElementById("papel");
let piedra = document.getElementById("piedra");
let tijera = document.getElementById("tijera");

let machine = ["papel", "piedra", "tijera"];
function choiceOption(option) {
    let random = Math.trunc(Math.random() * 3);
    let choice = machine[random];
    console.log(option)
    if(option === "papel" && choice === "papel"){
        return alert("Empate")
    }
    if(option === "papel" && choice === "tijera"){
        return alert("Maquina: tijera, ¡Gano Tijeras!")
    }
    if(option === "papel" && choice === "piedra"){
        return alert("Maquina: piedra, ¡Gano Papel Felcitaciones!")
    }
    
    if(option === "piedra" && choice === "piedra"){
        return alert("Empate")
    }
    if(option === "piedra" && choice === "tijera"){
        return alert("Maquina: tijera, ¡Gano Piedras Felicitaciones!")
    }
    if(option === "piedra" && choice === "papel"){
        return alert("Maquina: papel, ¡Gano Papel!")
    }

    if(option === "tijera" && choice === "tijera"){
        return alert("Empate")
    }
    if(option === "tijera" && choice === "papel"){
        return alert("Maquina: tijera, ¡Gano Tijeras Felicitaciones!")
    }
    if(option === "tijera" && choice === "piedra"){
        return alert("Maquina: piedra, ¡Gano piedra!")
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