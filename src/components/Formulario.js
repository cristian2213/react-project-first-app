import React, { Fragment, useState } from 'react'; // imr
import { calcularTotal } from '../healpers';

// slr, destructuring de los props
const Formulario = (props) => {
	const { cantidad, guardarCantidad, plazo, guardarPlazo, total, guardarTotal, guardarCargando } = props;
	//const usestate = useState('casa') Esta es otra forma de usar el useState, pero en la parte inferior se hizo con la destructurizacion porque es menos codigo, esto siempre va a retornar dos valores la variable y la funcion que se encarga de modificar a la variable

	// estado = variable que guarda y funcion = para actualizar el estado
	const [error, guardarError] = useState(false);


	// variable y funcion en la cual se va a guardar el dato de la variable
	const cotizarPrestamo = (e) => {
		e.preventDefault();
		// validar
		if (cantidad === 0 || plazo === 0) {
			guardarError(true);// se cambia el estado a verdadero para ejecutar el operador ternario
			return;
		}

		// eliminar error previo
		guardarError(false);

		// habilitar spinner
		guardarCargando(true);

		setTimeout(() => {
			// deshabilitar spinner
			guardarCargando(false);
		}, 3000);

		// iniciar la cotizacion
		const total = calcularTotal(cantidad, plazo);
		guardarTotal(total);
	}


	return (
		<Fragment>
			<form onSubmit={cotizarPrestamo}>
				<div className="row">
					<div>
						<label>Cantidad Prestamo</label>
						<input
							className="u-full-width"
							type="number"
							placeholder="Ejemplo: 3000"
							onChange={(e) =>
								guardarCantidad(parseInt(e.target.value))
							}
						/>
					</div>
					<div>
						<label>Plazo para Pagar</label>
						<select
							className="u-full-width"
							onChange={(e) => guardarPlazo(parseInt(e.target.value))}
						>
							<option value="">Seleccionar</option>
							<option value="3">3 meses</option>
							<option value="6">6 meses</option>
							<option value="12">12 meses</option>
							<option value="24">24 meses</option>
						</select>
					</div>
					<div>
						<input
							type="submit"
							value="Calcular"
							className="button-primary u-full-width"
						/>
					</div>
				</div>
			</form>

			{ (error) ? <p className="error">Todos los campos son obligatorios</p> : null}
		</Fragment>
	);
};

export default Formulario;
