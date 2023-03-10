import React from "react";
import { useGlobalContext } from "./context";

const Search = () => {
  const { query, setQuery, isError } = useGlobalContext();
  
  return (
    <>
      <section className="search-section">
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="search movie"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>
        <div className="card-error">
          <p>{isError.show && isError.msg}</p>
        </div>
        <h2>Sharing our few of favourite movies</h2>
      </section>
    </>
  );
};

export default Search;
