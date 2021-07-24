import React, { useState } from "react";
import Hookers from "./Hookers";
import Statements from "./Statements";
import data from "./data";

function Components() {
	const [index, setIndex] = useState(0);
	const [repo, setRepo] = useState(data[index]);

	const handleClick = () => {
		if (data[index + 1]) {
			setRepo(data[index + 1]);
			setIndex((index) => index + 1);
		} else {
			setRepo(data[0]);
			setIndex(0);
		}
	};
	return (
		<>
			<div className="header">
				<Hookers title={repo.title} handleClick={handleClick} />
			</div>
			<div className="mainbody">
				<Statements statements={repo.statements} index={index} />
			</div>
		</>
	);
}

export default Components;
