import React, { Fragment } from 'react'; // imr

// Este es un componente
//function Header(props) {
//    const { titulo } = props;
//  este es el return de react, todo lo que se ponga en su interior se va a mostrar en pantalla
//	return (
//		<Fragment>
//			<h1>{ titulo }</h1>
//		</Fragment>
//	);
//}

// esta es la segunda forma de crear componentes
const Header = (props) => (
    <h1>{ props.titulo }</h1>
)

export default Header;
