import { useState, useEffect } from "react";

import { getAbiities } from "../../shared/service/pokemons";
import Button from "../Button";

import styles from "./AbilitiesList.module.css";

const LIMIT = 10;

const AbilitiesList = ({}) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);

    const fetchItems = async () => {
      try {
        const data = await getAbiities({ limit: LIMIT * page });
        setItems(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const elements = items.map(({ name }) => <li key={name}>Name: {name}</li>);

  return (
    <div>
      <h1>Abilities</h1>
      {error && <p>...{error}...</p>}
      <ul>{elements}</ul>
      <Button onClick={loadMore} text={"Load More"} />
      {loading && <p>...Loading...</p>}
    </div>
  );
};

export default AbilitiesList;
