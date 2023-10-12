let numero1 = parseInt(prompt(`Indique el primer numero`));

let signo = prompt(`Indique el signo`)

let numero2 = parseInt(prompt(`Indique el segundo numero`));

let resultado = 0;

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




