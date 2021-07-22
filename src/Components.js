import React, { useState } from "react";
import Hookers from "./Hookers";
import Statements from "./Statements";

const data = [
	{
		title: "Calculus by Michael Spivak",
		statements: [
			{ id: 1, statement: "square root of two is irrational" },
			{ id: 2, statement: "there are infinite number of prime numbers" },
			{ id: 3, statement: "y=x^2 is a continuous at 0" },
			{ id: 4, statement: "e is irrational" },
			{ id: 5, statement: "pi is irrational" },
		],
	},
	{ title: "Linear Algebra by Stephen Friedberg", statements: [] },
	{
		title: "Contemporary Abstract Algebra by Joseph Gallian",
		statements: [],
	},
];

function Components() {
	const [repo, setRepo] = useState(data[0]);

	const handleClick = () => {
		if (repo.title === data[0].title) {
			setRepo(data[1]);
		} else if (repo.title === data[1].title) {
			setRepo(data[2]);
		} else {
			setRepo(data[0]);
		}
	};
	console.log(repo);
	return (
		<>
			<div className="header">
				<Hookers title={repo.title} handleClick={handleClick} />
			</div>
			<div className="mainbody">
				<Statements statements={repo.statements} />
			</div>
		</>
	);
}

export default Components;
