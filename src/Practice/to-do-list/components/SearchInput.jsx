import styles from '../Styles';

export default function SearchInput({ query, setQuery }) {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Todo 검색"
      style={styles.searchInput}
    />
  );
}
