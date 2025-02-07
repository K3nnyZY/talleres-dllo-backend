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