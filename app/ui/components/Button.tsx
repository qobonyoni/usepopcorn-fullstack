import React from "react";

function Button({ children, type, onClick }) {
	return (
		<button
		onClick={onClick ? onClick : undefined}
			className='button'
			type={type}>
			{children}
		</button>
	);
}

export default Button;
