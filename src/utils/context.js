// context.js
import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a context object
const MyContext = createContext();

// Create a context provider component
export const MyContextProvider = ({ children }) => {
  // State to store the API response data
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const response = await fetch('https://personalwebsitephotos.blob.core.windows.net/data/text.json');
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MyContext.Provider value={{ data, loading }}>
      {children}
    </MyContext.Provider>
  );
};

// Custom hook to access the context data
export const useMyContext = () => {
  return useContext(MyContext);
};
