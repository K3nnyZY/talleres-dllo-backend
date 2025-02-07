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
