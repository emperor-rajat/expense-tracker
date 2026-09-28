// Filters and sorting controls for the transaction list
export default function FilterBar({
  filterType,
  setFilterType,
  filterCategory,
  setFilterCategory,
  sortBy,
  setSortBy,
  search,
  setSearch,
}) {
  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search description..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
        <option value="all">All Types</option>
        <option value="income">Income Only</option>
        <option value="expense">Expense Only</option>
      </select>

      <select
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
      >
        <option value="all">All Categories</option>
        <option value="Food">Food</option>
        <option value="Rent">Rent</option>
        <option value="Transport">Transport</option>
        <option value="Shopping">Shopping</option>
        <option value="Bills">Bills</option>
        <option value="Salary">Salary</option>
        <option value="Other">Other</option>
      </select>

      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="date-desc">Newest First</option>
        <option value="date-asc">Oldest First</option>
        <option value="amount-desc">Amount: High to Low</option>
        <option value="amount-asc">Amount: Low to High</option>
      </select>
    </div>
  );
}