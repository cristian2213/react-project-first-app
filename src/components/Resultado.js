import React from 'react';

// slr
const Resultado = (props) => {
    const { total, plazo, cantidad } = props;

    return (
        <div className="u-full-width resultado">
            <h2>Resumen</h2>
            <p>La cantidad solicitada es: $ <strong>{cantidad}</strong></p>
            <p>A pagar en: <strong>{plazo}</strong> Meses</p>
            {/* toFixed permite extraer solo 2 decimales, es un metodo propio de javascript */}
            <p>Su plazo mensual es de: <strong>{(total / plazo).toFixed(2)}</strong></p>
            <p>Total a pagar: <strong>{(total).toFixed(2)}</strong></p>
        </div>
    );
}

export default Resultado;
