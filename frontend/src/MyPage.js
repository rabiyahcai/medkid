// src/MyPage.js
import React, { useState, useEffect } from 'react';

function MyPage() {
  const [data, setData] = useState(null);  // State to store the data
  const [loading, setLoading] = useState(true);  // State to track loading status

  useEffect(() => {
    // Change the URL to the new endpoint: medkid/data/
    fetch('http://127.0.0.1:8000/medkid/data/')  // Updated API endpoint
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched Data:', data);  // Log the fetched data
        setData(data);  // Set the data in state
        setLoading(false);  // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);  // Set loading to false in case of an error
      });
  }, []);  // Empty dependency array means this runs only once when the component mounts

  return (
    <div>
      <h1>React Page</h1>
      {loading ? (
        <p>Loading data...</p>  // Display loading text while waiting for data
      ) : (
        <>
          {data ? (
            <>
              <h2>{data.message}</h2>
              <p>{data.info}</p>
            </>
          ) : (
            <p>Error loading data.</p>  // Display error message if no data
          )}
        </>
      )}
    </div>
  );
}

export default MyPage;