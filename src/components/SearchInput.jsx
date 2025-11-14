export default function SearchInput({ onSearch }) {
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      onSearch(e.target.value);
    }
  }

  return (
    <div>
      <input
        onKeyDown={handleKeyDown}
        className="city-input"
        type="text"
        id="cityInput"
        placeholder="Indsæt by her:"
      />
    </div>
  );
}
