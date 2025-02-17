import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;  // Access the API key
        const response = await axios.get('https://your-api-endpoint.com', {
          headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'your-api-host.com', // Make sure this is the correct API host
          },
          timeout: 5000,
        });
        
        
        
        setData(response.data);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>API Data</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
