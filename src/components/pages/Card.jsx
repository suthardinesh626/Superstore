import { useState, useEffect } from "react";

const Card = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;


  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products?_page=${currentPage}&_limit=${pageSize}`)
      .then((response) => response.json())
      .then((jsonData) => {
        if (Array.isArray(jsonData.products)) {
          setProducts(jsonData.products); // Assuming products are inside jsonData.data
        } else {
          // If the API response structure is different, handle it accordingly
          console.error("Invalid API response format");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="">
      <div className="w-2/3" >
        {loading ? (
          <p>Loading data...</p>
        ) : (
          <div className=" flex flex-wrap justify-center gap-4  bg-slate-400">
            {products.map((product) => (
              <div className="flex flex-row border-4 bg-red-200 w-64	m-5 p-5 rounded-2xl shadow-2xl cursor-pointer ">
                <div
                  key={product.id}
                  className="flex flex-col justify-start items-center gap-3"
                >
                  <img
                    className="rounded-2xl my-4 h-48 w-40	"
                    src="https://cdn1.smartprix.com/rx-ibsJ2hNrF-w1200-h1200/bsJ2hNrF.jpg"
                    alt=""
                  />
                  <hr className="" />
                  <h2 className=" font-bold ">{product.title}</h2>
                  <p className="font-semibold text-justify">
                    {product.description}
                  </p>
                  <p className="font-medium ">Price: ${product.price}</p>
                  <p className="font-medium">Rating: {product.rating}</p>
                  <p className="font-medium">Stock: {product.stock} units</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="w-2/3 flex flex-row justify-evenly  m-5">
        <button className="border-solid border-2 p-3 rounded-lg	bg-blue-300" onClick={nextPage} >Next</button>

        <button className="border-solid border-2 p-3 rounded-lg bg-blue-300" onClick={previousPage} >Previous</button>
      </div>
    </div>
  );
};

export default Card;
