//main app component that holds all state and renders child components
import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import BalanceCard from "./components/BalanceCard";
import FilterBar from "./components/FilterBar";
import Chart from "./components/Chart";
import MonthlySummary from "./components/MonthlySummary";
import BudgetAlert from "./components/BudgetAlert";

export default function App() {
  // Transactions and budget are stored in localStorage
  const [transactions, setTransactions] = useLocalStorage("transactions", []);
  const [budget, setBudget] = useLocalStorage("budget", 0);

  // Filter and sort states
  const [filterType, setFilterType] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");
  const [sortBy, setSortBy] = useState("date-desc");
  const [search, setSearch] = useState("");

  // Add a new transaction
  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  // Delete a transaction by id
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  // Calculate totals
  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpense;

  // Apply filters
  let filtered = [...transactions];

  if (filterType !== "all") {
    filtered = filtered.filter((t) => t.type === filterType);
  }
  if (filterCategory !== "all") {
    filtered = filtered.filter((t) => t.category === filterCategory);
  }
  if (search.trim()) {
    filtered = filtered.filter((t) =>
      t.description.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Apply sorting
  if (sortBy === "date-desc") {
    filtered.sort((a, b) => b.date.localeCompare(a.date));
  } else if (sortBy === "date-asc") {
    filtered.sort((a, b) => a.date.localeCompare(b.date));
  } else if (sortBy === "amount-desc") {
    filtered.sort((a, b) => b.amount - a.amount);
  } else if (sortBy === "amount-asc") {
    filtered.sort((a, b) => a.amount - b.amount);
  }

  return (
    <div className="app">
      <h1>Personal Expense Tracker</h1>

      <BalanceCard
        income={totalIncome}
        expense={totalExpense}
        balance={balance}
      />

      <TransactionForm onAdd={addTransaction} />

      <BudgetAlert
        budget={budget}
        setBudget={setBudget}
        totalExpense={totalExpense}
      />

      <FilterBar
        filterType={filterType}
        setFilterType={setFilterType}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
        search={search}
        setSearch={setSearch}
      />

      <TransactionList transactions={filtered} onDelete={deleteTransaction} />

      <Chart transactions={transactions} />

      <MonthlySummary transactions={transactions} />
    </div>
  );
}