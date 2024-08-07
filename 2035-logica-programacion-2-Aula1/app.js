let numeroSecreto = 0;
let intentos = 0;
let maxIntentos = 10+1;
let numerosYaSorteados = [];
let maxNumerosR=100;
let cantidadJuegos=2;
let juegosJugados = 1;
let input = document.getElementById('nverify');

condinit();

function textoTitulo(elemento,texto){
    //cambiar el texto de un elemento html
    let textoHTML = document.querySelector(elemento);
    textoHTML.innerHTML= texto;
    return;
}

function condinit(){
    //condiciones iniciales del juego
    textoTitulo('h1',"Adivina el número :D");
    textoTitulo('p',"Escribe un número")
    intentos = 1;
    numeroSecreto = numeroAleatorio();
    document.getElementById('jugar').removeAttribute('disabled');
    console.log(numeroSecreto);
}


function numeroAleatorio(){
    //genera un numero aleatorio
    let numeroRandom = parseInt(Math.random()*maxNumerosR+1);
    if (numeroAleatorio.length==maxNumerosR){
        //si se acaban los numeros acabar la funcion(recursividad)
        textoTitulo('p','Has alcanzado el limite de numeros');
    }else{
        //si se ha elegido un numero generar otro numero aleatorio
        if (numerosYaSorteados.includes(numeroRandom)) {
            return numeroAleatorio();
        }else{
            //agregar el numero a la lista
            numerosYaSorteados.push(numeroRandom)
            return numeroRandom;
        }
    }
}

function verificacionNumero(){
    //funcion para el boton Intentar
    let verificacion = parseInt(document.getElementById("nverify").value);
    console.log(intentos);
    if (numeroSecreto === verificacion){
        //si el input y el numero aleatorio coinciden terminar el juego
        textoTitulo('p',`¡CORRECTO!, lo adivinaste en ${intentos} ${(intentos === 1)? 'intento' : "intentos"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('jugar').setAttribute('disabled','');
    }else {
        //si no coinciden dar pistas
        if (numeroSecreto < verificacion){
        textoTitulo('p',"El número es menor");
        }else{
        textoTitulo('p',"El número es mayor");
        }
        intentos++;
        cbox();
        if(intentos==maxIntentos){
            //da un maximo de intentos
            textoTitulo('p','Has alcanzado el numero maximo de intentos');
            document.getElementById('jugar').setAttribute('disabled','');
            document.getElementById('reiniciar').removeAttribute('disabled');
        }
    }
    if (juegosJugados == cantidadJuegos & intentos == maxIntentos ){
        //da una cantidad de veces que se puede reiniciar el juego
        textoTitulo('p','Has alcanzado el numero maximo de juegos');
        document.getElementById('jugar').setAttribute('disabled','');
        document.querySelector('#reiniciar').setAttribute('disabled','true');
    }else if (juegosJugados == cantidadJuegos & numeroSecreto == verificacion){
        textoTitulo('p','Correcto! y es el limite de veces que puedes jugar');
        document.getElementById('jugar').setAttribute('disabled','');
        document.querySelector('#reiniciar').setAttribute('disabled','true');
    }
    console.log(juegosJugados)
    if(isNumber(verificacion)){

    }
        return;
}

function cbox(){
    //limpia la caja del imput
    document.querySelector('#nverify').value = '';
}

function reiniciarjuego(){
    //funcion del voton Nuevo Juego
    cbox();
    condinit();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    juegosJugados ++;
}

function isNumber() {
    input.addEventListener("keydown", (event) => {
        const tpermitidas = ['Backspace']
        if (tpermitidas.includes(event.key)|| /^[0-9]$/.test(event.key)) {
            return;
        }
        event.preventDefault();
    })
}
document.addEventListener("DOMContentLoaded", isNumber);

isNumber();