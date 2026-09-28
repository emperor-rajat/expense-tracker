// Renders the list of transactions with keys
import TransactionItem from "./TransactionItem";

export default function TransactionList({ transactions, onDelete }) {
  if (transactions.length === 0) {
    return (
      <div className="transaction-list">
        <h2>Transactions</h2>
        <div className="empty">No transactions to show.</div>
      </div>
    );
  }

  return (
    <div className="transaction-list">
      <h2>Transactions ({transactions.length})</h2>
      {transactions.map((t) => (
        <TransactionItem key={t.id} transaction={t} onDelete={onDelete} />
      ))}
    </div>
  );
}