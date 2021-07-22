import React, { useState, useEffect } from "react";

const Statements = (props) => {
	const [axioms, setAxioms] = useState(props.statements);

	useEffect(() => {
		setAxioms(props.statements);
	}, [props.statements]);

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
			<div className="form">
				<input type="text" name="axiom" id="" />
				<button>ADD</button>
			</div>
		</>
	);
};

export default Statements;
