import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchOrder = () => {
  const [query, setQuery] = useState(``);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery(``);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order number"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        className="bg-white"
      />
    </form>
  );
};

export default SearchOrder;
