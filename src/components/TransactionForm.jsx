// Form for adding new transactions
import { useState } from "react";

export default function TransactionForm({ onAdd }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [type, setType] = useState("expense");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!description.trim() || !amount || Number(amount) <= 0) {
      alert("Please enter a description and a valid amount.");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      description: description.trim(),
      amount: Number(amount),
      category,
      type,
      date,
    };

    onAdd(newTransaction);

    // Reset form
    setDescription("");
    setAmount("");
    setCategory("Food");
    setType("expense");
    setDate(new Date().toISOString().slice(0, 10));
  };

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <h2>Add Transaction</h2>

      <div className="form-row">
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="form-row">
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Food">Food</option>
          <option value="Rent">Rent</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
          <option value="Bills">Bills</option>
          <option value="Salary">Salary</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <button type="submit">Add Transaction</button>
    </form>
  );
}