// Lets the user set a budget and warns if expenses exceed it
import { useState } from "react";

export default function BudgetAlert({ budget, setBudget, totalExpense }) {
  const [input, setInput] = useState(budget || "");

  const handleSet = () => {
    const value = Number(input);
    if (value > 0) {
      setBudget(value);
    } else {
      setBudget(0);
    }
  };

  const exceeded = budget > 0 && totalExpense > budget;

  return (
    <div className="budget-section">
      <h2>Monthly Budget</h2>

      <div className="budget-row">
        <input
          type="number"
          placeholder="Set budget limit"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          min="0"
        />
        <button
          onClick={handleSet}
          style={{
            padding: "10px 20px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Save
        </button>
      </div>

      {budget > 0 && !exceeded && (
        <div className="budget-safe">
          You are within budget. Spent ${totalExpense.toFixed(2)} of $
          {budget.toFixed(2)}.
        </div>
      )}

      {exceeded && (
        <div className="budget-warning">
          Warning: You have exceeded your budget by $
          {(totalExpense - budget).toFixed(2)}.
        </div>
      )}
    </div>
  );
}