import React, { useState } from "react";

const data = [
	{ title: "Fuck you!" },
	{ title: "Don't Ask Me When I Am Going to Get a Job!" },
	{ title: "Shut Up!" },
];

const Hookers = () => {
	const [title, setTitle] = useState(data[0].title);
	const handleClick = () => {
		if (title === data[0].title) {
			setTitle(data[1].title);
		} else if (title === data[1].title) {
			setTitle(data[2].title);
		} else {
			setTitle(data[0].title);
		}
	};

	return (
		<>
			<div className="title">
				<h1>{title}</h1>
			</div>
			<button className="btn" onClick={handleClick}>
				SWEAR AT WILL
			</button>
		</>
	);
};

export default Hookers;
