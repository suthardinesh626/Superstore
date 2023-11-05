import React, { useState, useEffect } from "react";

const Card = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((jsonData) => {
        setProducts(jsonData.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-4  ">
          {products.map((product) => (
            <div className="flex flex-row  border-4 bg-red-200 w-56 m-5 p-5 rounded-2xl shadow-2xl	">
              <div key={product.id} className="">
                <img  className="rounded-2xl my-4" src="https://cdn1.smartprix.com/rx-ibsJ2hNrF-w1200-h1200/bsJ2hNrF.jpg" alt="" />
                <hr className= "" />
                <h2 className=" font-bold ">{product.title}</h2>
                <p className="font-semibold text-justify" >{product.description}</p>
                <p className="font-medium" >Price: ${product.price}</p>
                <p className="font-medium" >Rating: {product.rating}</p>
                <p className="font-medium" >Stock: {product.stock} units</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
