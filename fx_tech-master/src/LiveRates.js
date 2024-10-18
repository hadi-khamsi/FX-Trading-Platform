import React, { useState, useEffect } from 'react';

function LiveRates() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://openexchangerates.org/api/latest.json?app_id=68e3e2fd85f3485683d92fcaa93ef7e6`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData.rates);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading live exchange rates...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return { rates: data };
}

export default LiveRates;
