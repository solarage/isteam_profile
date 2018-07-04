import React from 'react';
import './Button.css';

const Button = ({ handleClick, btnName }) => {
	return(
		<button className="default-button" onClick={handleClick}>{btnName}</button>	
	)
}

export default Button;