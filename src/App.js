import React, { useState } from 'react';
import './App.css';
import Row from './Row';
import SearchBar from "material-ui-search-bar";
import Map from './Map';
import { AppBar, Typography } from '@material-ui/core';
import LocationSearchModal from "./LandingPage";

function App() {
  const [query, setQuery] = useState("Superman");
  return (
    <div className="App">
     {/*  <div className="App-header">
        {process.env.REACT_APP_NAME}
      </div> */}
      <AppBar >
        <Typography variant="h5" style={{padding: 10}} >{process.env.REACT_APP_NAME}</Typography>
      </AppBar>
     {/*  <SearchBar
        placeholder="Search Movies"
        cancelOnEscape ={true}
        style={{width: "80%", margin:'auto', marginTop:70}}
        onRequestSearch={(newValue) => setQuery(newValue)}
      /> */}
      {/* <Row query={query}/> */}
      <LocationSearchModal/>
    </div>
  );
}

export default App;
