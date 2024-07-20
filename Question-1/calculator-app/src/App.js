// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './App.css';

function App() {
  const [numberId, setNumberId] = useState('e');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(http://localhost:9876/numbers/${numberId});
      const result = await response.json();
      if (response.ok) {
        setData(result);
        setError(null);
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError('Failed to fetch data');
    }
  };

  return (
    <div className="App">
      <h1>Average Calculator</h1>
      <select value={numberId} onChange={(e) => setNumberId(e.target.value)}>
        <option value="p">Prime Numbers</option>
        <option value="f">Fibonacci Numbers</option>
        <option value="e">Even Numbers</option>
        <option value="r">Random Numbers</option>
      </select>
      <button onClick={fetchData}>Fetch Numbers</button>
      {error && <p className="error">{error}</p>}
      {data && (
        <div>
          <h2>Results</h2>
          <p><strong>Previous State:</strong> {JSON.stringify(data.windowPrevState)}</p>
          <p><strong>Current State:</strong> {JSON.stringify(data.windowCurrState)}</p>
          <p><strong>Fetched Numbers:</strong> {JSON.stringify(data.numbers)}</p>
          <p><strong>Average:</strong> {data.avg}</p>
        </div>
      )}
    </div>
  );
}

export default App;
