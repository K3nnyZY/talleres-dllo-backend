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
