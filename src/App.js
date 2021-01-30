import React from 'react';
import './App.css';
import { Grid } from './components/grid/grid-component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-Grid">
          <Grid/>
        </div>
      </header>
    </div>
  );
}

export default App;
