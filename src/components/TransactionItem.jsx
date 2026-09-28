// A single transaction row
export default function TransactionItem({ transaction, onDelete }) {
  const sign = transaction.type === "income" ? "+" : "-";

  return (
    <div className="transaction-item">
      <div className="info">
        <div className="desc">{transaction.description}</div>
        <div className="meta">
          {transaction.category} | {transaction.date}
        </div>
      </div>

      <span className={`amount ${transaction.type}`}>
        {sign}${transaction.amount.toFixed(2)}
      </span>

      <button onClick={() => onDelete(transaction.id)}>Delete</button>
    </div>
  );
}