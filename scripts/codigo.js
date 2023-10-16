//let numero1 = parseInt(prompt(`Indique el primer numero`));

//let signo = prompt(`Indique el signo`)

//let numero2 = parseInt(prompt(`Indique el segundo numero`));

let resultado = 0;


let numeroPantalla = document.getElementById("numeroPantalla");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btnDiv = document.getElementById("btnDiv");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btnMult = document.getElementById("btnMult");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btnResta = document.getElementById("btnResta");
let btn0 = document.getElementById("btn0");
let btnComa = document.getElementById("btnComa");
let btnIgual = document.getElementById("btnIgual");
let btnSuma = document.getElementById("btnSuma");





btn1.addEventListener('click', () =>{
    numeroPantalla.innerHTML = "123"
})

switch(signo){
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

console.log(`El resultado es ${resultado}`)




