
// crear healpers para que el codigo de los componentes no sea tan extenso, los heralpers son funciones en un archivo aparte que despues se importan en el componente a ser utilizado.

export function calcularTotal(cantidad, plazo) {
    //*** Calcular interes */
    // Interes = al porcentaje del dinero total
    // 0 to 1000 = 25%
    // 1001 to 5000 = 20%
    // 5001 to 10000 = 15%
    // +1000 = 10%

    let totalCantidad; // intereses de cantidad
    if (cantidad <= 1000) {
        // Este es el interes ejemplo: 1000 * .25 = 250 de interes 
        // .25 = equivale al 25% de la cantidad prestar
        totalCantidad = cantidad * .25;
    } else if (cantidad > 1000 && cantidad <= 5000) {
        totalCantidad = cantidad * .20;
    } else if (cantidad > 5000 && cantidad <= 10000) {
        totalCantidad = cantidad * .15;
    } else {
        totalCantidad = cantidad * .10;
    }

    // *Calcular plazo
    // Entre más tarde en pagar más intereses debera pagar
    // 3m = 5%
    // 6m = 10%
    // 12m = 15%
    // 24m = 20%

    let totalPlazo; // intereses de tiempo
    switch (plazo) {
        case 3:
            totalPlazo = cantidad * .05;
            break;

        case 6:
            totalPlazo = cantidad * .10;
            break;

        case 12:
            totalPlazo = cantidad * .15;
            break;

        case 24:
            totalPlazo = cantidad * .20;
            break;

        default:
            break;
    }

    //** Total a pagar con intereses de tiempo y de cantidad */
    return totalPlazo + totalCantidad + cantidad;
}