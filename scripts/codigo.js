//let numero1 = parseInt(prompt(`Indique el primer numero`));

//let signo = prompt(`Indique el signo`)

//let numero2 = parseInt(prompt(`Indique el segundo numero`));

//let resultado = 0;

let numeroPantalla = document.getElementById("numeroPantalla");

let boton = document.querySelectorAll(".boton");
// query selector all, o que hace es agarrar todos los "Algo" (en este caso, los algo son todos los elementos que tengan la clas boton, por eso esta escrito .boton como si fuera css) y los ordena en una fila

console.log(boton);

let botonNumero = document.querySelectorAll(".botonNumero");

let btnOn = document.getElementById("btnOn");
let btnOff = document.getElementById("btnOff");
let btnDelete = document.getElementById("btnDelete");
let btnDiv = document.getElementById("btnDiv");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btnMult = document.getElementById("btnMult");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btnSuma = document.getElementById("btnSuma");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btnResta = document.getElementById("btnResta");
let btn0 = document.getElementById("btn0");
let btnComa = document.getElementById("btnComa");
let btnC = document.getElementById("btnC");
let btnIgual = document.getElementById("btnIgual");

let numero1 = "";

botonNumero.forEach(cerveza => {
    console.log("soy un boton");
})

// const agregarEventos = (boton) => {
//   boton.addEventListener("click", () => {
//     const botonApretado = boton.textContent;
//     console.log(boton.textContent);

//     numeroPantalla.value += botonApretado;
//   });
// };

// boton.forEach(agregarEventos);

/*btn1.addEventListener('click', () =>{
    numeroPantalla.innerHTML = "Hola"
    console.log(btn1.textContent);
})*/

/*function botonApretado () {
    const botonNuevo = boton.textContent

    if(botonNuevo === 0){
        numeroPantalla = botonNuevo
    }else{
        numeroPantalla += botonNuevo
    }
}*/

//let numero = "";

//function operador(num){
//    numero = numero + num;
//}

//btn1.addEventListener('click', () =>{
//    numeroPantalla.innerHTML += btn1.textContent
//})

/*switch(signo){
    case "+":
        resultado = numero1 + numero2;
        console.log("Se suman los dos numeros")
        break;
    case "-":
        resultado = numero1 - numero2;
        console.log("Se restan los dos numeros");
        break;
    case "*":
        resultado = numero1 * numero2;
        console.log("Se multiplican los dos numeros");
        break;
    case "/":
        resultado = numero1 / numero2;
        console.log("Se divide el primer numero por el segundo");
        break;
    default:
        console.log("Operacion no valida");
        break;
}

console.log(`El resultado es ${resultado}`)*/
