// Groups transactions by month and shows income/expense totals
export default function MonthlySummary({ transactions }) {
  // Group by "YYYY-MM" key
  const months = {};

  transactions.forEach((t) => {
    const monthKey = t.date.slice(0, 7); // "2025-01"
    if (!months[monthKey]) {
      months[monthKey] = { income: 0, expense: 0 };
    }
    if (t.type === "income") {
      months[monthKey].income += t.amount;
    } else {
      months[monthKey].expense += t.amount;
    }
  });

  const sortedMonths = Object.entries(months).sort((a, b) =>
    b[0].localeCompare(a[0])
  );

  if (sortedMonths.length === 0) {
    return (
      <div className="monthly-summary">
        <h2>Monthly Summary</h2>
        <div className="empty">No data yet.</div>
      </div>
    );
  }

  return (
    <div className="monthly-summary">
      <h2>Monthly Summary</h2>
      {sortedMonths.map(([month, data]) => (
        <div className="month-row" key={month}>
          <span className="month-name">{month}</span>
          <span className="income-text">+${data.income.toFixed(2)}</span>
          <span className="expense-text">-${data.expense.toFixed(2)}</span>
        </div>
      ))}
    </div>
  );
}