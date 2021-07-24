import React, { useState, useEffect } from "react";
import data from "./data";

const Statements = (props) => {
	const [axioms, setAxioms] = useState(props.statements);

	//this connects the state from Components state
	useEffect(() => {
		setAxioms(props.statements);
	}, [props.statements]);

	const removeItem = (id) => {
		let unremovedItem = axioms.filter((sentence) => {
			return sentence.id !== id;
		});
		setAxioms(unremovedItem);
		data[props.index].statements = unremovedItem;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newAxiom = axioms.concat({
			id: axioms[axioms.length - 1].id + 1,
			statement: document.getElementById("statement").value,
		});
		setAxioms(newAxiom);
		data[props.index].statements = newAxiom;
		document.getElementById("statement").value = "";
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
				<form onSubmit={handleSubmit}>
					<input type="text" name="axiom" id="statement" />
					<button>ADD</button>
				</form>
			</div>
		</>
	);
};

export default Statements;
