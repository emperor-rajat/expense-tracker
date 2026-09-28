// Simple bar chart showing spending by category
export default function Chart({ transactions }) {
  // Only look at expenses
  const expenses = transactions.filter((t) => t.type === "expense");

  // Group by category
  const totals = {};
  expenses.forEach((t) => {
    totals[t.category] = (totals[t.category] || 0) + t.amount;
  });

  const entries = Object.entries(totals);

  if (entries.length === 0) {
    return (
      <div className="chart">
        <h2>Spending by Category</h2>
        <div className="empty">No expenses yet.</div>
      </div>
    );
  }

  // Find the max value for scaling bar widths
  const max = Math.max(...entries.map(([, amount]) => amount));

  return (
    <div className="chart">
      <h2>Spending by Category</h2>
      {entries.map(([category, amount]) => (
        <div className="chart-bar" key={category}>
          <div className="bar-label">
            <span>{category}</span>
            <span>${amount.toFixed(2)}</span>
          </div>
          <div className="bar-track">
            <div
              className="bar-fill"
              style={{ width: `${(amount / max) * 100}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}