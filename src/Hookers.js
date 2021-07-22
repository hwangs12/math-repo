import React from "react";

const Hookers = (props) => {
	return (
		<>
			<div className="title">
				<h1>{props.title}</h1>
			</div>
			<button className="btn" onClick={props.handleClick}>
				CLICK
			</button>
		</>
	);
};

export default Hookers;
