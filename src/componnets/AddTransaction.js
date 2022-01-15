import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function AddTransaction() {
	const [text, setText] = useState("");
	const [amount, setAmount] = useState(0);

	const { addTransaction, transactions } = useContext(GlobalContext);
	function generateId() {
		return Math.floor(Math.random() * 10000000);
	}
	const onSubmit = (e) => {
		e.preventDefault();

		const newTransaction = {
			text,
			amount: +amount,
			id: generateId(),
		};
		addTransaction(newTransaction);
	};
	return (
		<>
			<h3>Add new transaction</h3>
			<form onSubmit={onSubmit}>
				<div className="form-control">
					<label htmlFor="text">Text</label>
					<input
						type="text"
						value={text}
						onChange={(e) => setText(e.target.value)}
						placeholder="Enter text..."
					/>
				</div>
				<div className="form-control">
					<label htmlFor="amount">
						Amount <br />
						(negative - expense, positive - income)
					</label>
					<input
						type="number"
						onChange={(e) => setAmount(e.target.value)}
						value={amount}
						placeholder="Enter amount..."
					/>
				</div>
				<button className="btn">Add transaction</button>
			</form>
		</>
	);
}
