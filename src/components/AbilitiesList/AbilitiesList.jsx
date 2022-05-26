import { useState, useEffect } from "react";
import styles from "./AbilitiesList.module.css";

import { getAbiities } from "../../shared/service/pokemons";

const LIMIT = 10;

const AbilitiesList = ({}) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const data = await getAbiities({ limit: LIMIT });
      setItems(data.results);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const elements = items.map(({ name }) => <li>Name: {name}</li>);

  return (
    <div>
      <h1>Abilities</h1>
      {loading && <p>...Loading...</p>}
      {error && <p>...{error}...</p>}
      <ul>{elements}</ul>
    </div>
  );
};

export default AbilitiesList;
