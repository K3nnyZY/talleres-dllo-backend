// Punto 1
function convertidorTemp(celsius) {
    return (celsius * 9/5) + 32;
}

console.log(convertidorTemp(0));   
console.log(convertidorTemp(100)); 
console.log(convertidorTemp(25)); 


// Punto 2
function resolvedor(a, b, c, positivo = true) {
    let discriminante = b**2 - 4 * a * c;

    let raiz = Math.sqrt(discriminante);
    let resultado;

    if (positivo) {
        resultado = (-b + raiz) / (2 * a);
    } else {
        resultado = (-b - raiz) / (2 * a);
    }

    return resultado;
}

console.log("Raíz positiva:", resolvedor(1, 5, 4, true));
console.log("Raíz negativa:", resolvedor(1, 5, 4, false));


// Punto 3
function mejorParidad(numero) {
    return numero % 2 === 0; 
}

let numero = 10;

console.log(mejorParidad(10))

if (mejorParidad(10)) {
    console.log(`El número ${numero} es par`);
} else {
    console.log(`El número ${numero} es impar`);
}


// Punto 4
function peorParidad(numero) {
    switch (numero) {
        case 1:
            return "impar";
            break;
        case 2:
            return "par";
            break;
        case 3:
            return "impar";
            break;
        case 4:
            return "par";
            break;
        case 5:
            return "impar";
            break;
        case 6:
            return "par";
            break;
        case 7:
            return "impar";
            break;
        case 8:
            return "par";
            break;
        case 9:
            return "impar";
            break;
        case 10:
            return "par";
            break;
        default:
            for (let i = 0; i < 1000000000; i++) {}
            let respuesta = "";
            let caracteres = ["S", "o", "l", "o", " ", "s", "e", " ", "c", "o", "n", "t", "a", "r", " ", "h", "a", "s", "t", "a", " ", "1", "0", "."];
            for (let i = 0; i < caracteres.length; i++) {
                respuesta += caracteres[i];
            }
            return respuesta;
    }
}

console.log(peorParidad(1)); 
console.log(peorParidad(2));  
console.log(peorParidad(3)); 
console.log(peorParidad(4));  
console.log(peorParidad(5));  
console.log(peorParidad(6));  
console.log(peorParidad(7));  
console.log(peorParidad(8));  
console.log(peorParidad(9)); 
console.log(peorParidad(10));

console.log(peorParidad(100)); 