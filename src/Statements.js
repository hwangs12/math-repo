import React, { useState } from "react";

const sentences = [
	{ id: 1, statement: "square root of two is irrational" },
	{ id: 2, statement: "there are infinite number of prime numbers" },
	{ id: 3, statement: "y=x^2 is a continuous at 0" },
	{ id: 4, statement: "e is irrational" },
	{ id: 5, statement: "pi is irrational" },
];

const Statements = () => {
	const [axioms, setAxioms] = useState(sentences);

	const removeItem = (id) => {
		let unremovedItem = axioms.filter((sentence) => {
			return sentence.id !== id;
		});
		setAxioms(unremovedItem);
	};

	return (
		<>
			<ol>
				{axioms.map((sentence) => {
					const { id, statement } = sentence;
					return (
						<li key={id} className="sentences">
							<p>
								<strong>{statement}</strong>
							</p>
							<button>EDIT</button>
							<button onClick={() => removeItem(id)}>
								REMOVE
							</button>
						</li>
					);
				})}
			</ol>
			<button>ADD</button>
		</>
	);
};

export default Statements;
