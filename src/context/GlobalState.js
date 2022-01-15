import React, { createContext, useReducer } from "react";
// import AppReducer from "./AppReducer";

//initial state
const initialState = {
	transactions: [
		{ id: 1, text: "Flower", amount: -50 },
		{ id: 2, text: "Salary", amount: 200 },
		{ id: 3, text: "Book", amount: -70 },
		{ id: 4, text: "Camera", amount: 130 },
	],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Reducer function
const AppReducer = (state, action) => {
	switch (action.type) {
		case "DELETE_TRANSACTION":
			return {
				...state,
				transactions: state.transactions.filter((transaction) => transaction.id !== action.payload),
			};
		case "ADD_TRANSACTION":
			return {
				...state,
				transactions: [...state.transactions, action.payload],
			};
		default:
			return state;
	}
};

// Provider component
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);
	// const [state2, setState] = useState(initialState);

	// actions
	function deleteTransaction(id) {
		// using useReducer function
		dispatch({
			type: "DELETE_TRANSACTION",
			payload: id,
		});

		// using usestate function
		// setState((prev) => {
		// 	return {
		// 		...prev,
		// 		transactions: prev.transactions.filter((transaction) => transaction.id !== id),
		// 	};
		// });
	}
	// actions
	function addTransaction(transaction) {
		// using useReducer function
		dispatch({
			type: "ADD_TRANSACTION",
			payload: transaction,
		});
		// using usestate function
		// setState((prev) => {
		// 	return {
		// 		...prev,
		// 		transactions: [...prev.transactions, transaction],
		// 	};
		// });
	}

	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transactions,
				deleteTransaction,
				addTransaction,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
