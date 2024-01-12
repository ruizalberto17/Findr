import React, { useState, useEffect } from 'react';
import styles from "./App.module.css";

import BusinessList from "./components/BusinessList/BusinessList";
import SearchBar from "./components/SearchBar/SearchBar";
import getSuggestions from './utils/yelp';

function App() {
  const [businesses, setBusinesses ] = useState([]);

  const searchYelp = async (term, location, sortBy) => {
    const suggestions = await getSuggestions(term, location, sortBy);
    setBusinesses(suggestions);
  };

  useEffect(() => {
    searchYelp("food", "US", "best_match");
  }, []);

  return (
    <div className={styles.App}>
      <header>
        <h1>Findr</h1>
      </header>
      <main>
        <SearchBar searchYelp={searchYelp}/>
        <BusinessList businesses={businesses}/>
      </main>
    </div>
  );
};

export default App;
