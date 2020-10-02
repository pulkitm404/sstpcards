import React, { useState } from 'react';
import './App.css';
import Row from './Row';
import SearchBar from "material-ui-search-bar";

function App() {
  const [query, setQuery] = useState("Superman");
  return (
    <div className="App">
      <div className="App-header">
        SSTP Cards Demo
      </div>
      <SearchBar
        placeholder="Search Movies"
        cancelOnEscape ={true}
        style={{width: "60%", margin:'auto'}}
        onRequestSearch={(newValue) => setQuery(newValue)}
      />
      <Row query={query}/>
    </div>
  );
}

export default App;
