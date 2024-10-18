import React, { useState, useEffect } from 'react';

function Promise() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = process.env.REACT_APP_FX_API_KEY;
  
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://openexchangerates.org/api/latest.json?app_id=68e3e2fd85f3485683d92fcaa93ef7e6`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
      
    };

    fetchData();
    
  }, [apiKey]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>API Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );

}

export default Promise;