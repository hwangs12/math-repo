import React from "react";
import Hookers from "./Hookers";
import Statements from "./Statements";

function Components() {
	return (
		<>
			<div className="header">
				<Hookers />
			</div>
			<div className="mainbody">
				<Statements />
			</div>
		</>
	);
}

export default Components;
