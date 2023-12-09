import React, { createContext, useState, useEffect } from 'react';

export const APIContext = createContext();

export const APIProvider = ({ children }) => {
    const [data, setData] = useState({ products: [],  });

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(response => {
                setData({ products: response.products, });
            });
    }, []);

    return (
        <APIContext.Provider value={data}>
            {children}
        </APIContext.Provider>
    );
};