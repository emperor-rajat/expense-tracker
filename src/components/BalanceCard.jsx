// Shows total income, total expense, and the running balance
export default function BalanceCard({ income, expense, balance }) {
  return (
    <div className="balance-card">
      <div className="balance-item income">
        <div className="label">Income</div>
        <div className="value">${income.toFixed(2)}</div>
      </div>
      <div className="balance-item expense">
        <div className="label">Expense</div>
        <div className="value">${expense.toFixed(2)}</div>
      </div>
      <div className="balance-item total">
        <div className="label">Balance</div>
        <div className="value">${balance.toFixed(2)}</div>
      </div>
    </div>
  );
}