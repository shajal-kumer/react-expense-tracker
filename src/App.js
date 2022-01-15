import "./App.css";
import AddTransaction from "./componnets/AddTransaction";
import Balance from "./componnets/Balance";
import Header from "./componnets/Header";
import IncomeExpense from "./componnets/IncomeExpense";
import TransactionList from "./componnets/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
	return (
		<GlobalProvider>
			<Header />
			<div className="container">
				<Balance />
				<IncomeExpense />
				<TransactionList />
				<AddTransaction />
			</div>
		</GlobalProvider>
	);
}

export default App;
