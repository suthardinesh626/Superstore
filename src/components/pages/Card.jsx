import React, { useContext, useState, useEffect } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import Filter from "./Filter";
import { CartContext } from "../../context/Context";
import SelectedProductContext from "../../context/SelectedProductContext";
import { useNavigate } from "react-router-dom";
import input from '../../input.css'

const Card = ({ product }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [checkedBrands, setCheckedBrands] = useState([]);
  const [checkedCategories, setCheckedCategories] = useState([]);
  const [allBrands, setAllBrands] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const pageSize = 8;
  const { cartItems, addToCart } = useContext(CartContext)
  const { setSelectedProduct } = useContext(SelectedProductContext)
  const navigate = useNavigate()
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://dummyjson.com/products?skip=${(currentPage - 1) * pageSize
      }&limit=${pageSize}`
    )
      .then((response) => response.json())
      .then((jsonData) => {
        if (Array.isArray(jsonData.products)) {
          setProducts(jsonData.products);
        } else {
          console.error("Invalid API response format");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [currentPage]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((response) => response.json())
      .then((jsonData) => {
        if (Array.isArray(jsonData.products)) {
          const brands = [
            ...new Set(jsonData.products.map((product) => product.brand)),
          ];
          const categories = [
            ...new Set(jsonData.products.map((product) => product.category)),
          ];
          setAllBrands(brands);
          setAllCategories(categories);
        } else {
          console.error("Invalid API response format");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((response) => response.json())
      .then((jsonData) => {
        if (Array.isArray(jsonData.products)) {
          setAllProducts(jsonData.products);
        } else {
          console.error("Invalid API response format");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    if (checkedBrands.length > 0 || checkedCategories.length > 0) {
      const filteredProducts = allProducts.filter(
        (product) =>
          (checkedBrands.length === 0 ||
            checkedBrands.includes(product.brand)) &&
          (checkedCategories.length === 0 ||
            checkedCategories.includes(product.category))
      );
      setProducts(filteredProducts);
    }
  }, [checkedBrands, checkedCategories]);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row p-4">
      <div className="bg-white-300 border-4 rounded-lg w-full sm:w-1/4">
        <Filter
          brands={allBrands}
          categories={allCategories}
          setCheckedBrands={setCheckedBrands}
          setCheckedCategories={setCheckedCategories}
        />
      </div>
      <div className="w-full sm:w-4/5 flex flex-col bg-white-100 ">
        <div className="w-full">
          {loading ? (
            <p>Loading data...</p>
          ) : (
            <div className=" flex flex-wrap justify-center gap-2 ">
              {products
                .filter(
                  (product) =>
                    (checkedBrands.length === 0 ||
                      checkedBrands.includes(product.brand)) &&
                    (checkedCategories.length === 0 ||
                      checkedCategories.includes(product.category))
                )
                .map((product) => (
                  <div className="flex flex-col border-4 bg-grey-600 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 m-5 p-5 rounded-2xl shadow-2xl cursor-pointer">
                    <div
                      key={product.id}
                      className="flex flex-col  justify-between items-center gap-1 "
                    >
                      <div className="max-2xl:w-1/2	">
                        <img src={product.thumbnail} alt="" />
                      </div>

                      <h2 className="max-2xl:text-xs font-bold ">{product.title}</h2>
                      <p className="max-2xl:text-xs font-semibold text-justify">
                        {product.description}
                      </p>
                      <p className="font-medium ">Price: ${product.price}</p>
                      <p className="font-medium">Rating: {product.rating}</p>

                      <div className="flex felx-row gap-4 ">
                        <button onClick={() => {
                          addToCart(product); setShowPopup(true);
                          setTimeout(() => setShowPopup(false), 2000);
                        }} className="flex flex-row justify-center items-center text-slate-200 font-semibold text-sm border-4  rounded-lg p-2 bg-slate-500 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            id="add"
                          >
                            <g fill="#000100">
                              <rect
                                width="4"
                                height="20"
                                x="8"
                                rx="1.98"
                              ></rect>
                              <rect
                                width="20"
                                height="4"
                                y="8"
                                rx="1.98"
                              ></rect>
                            </g>
                          </svg>

                          <svg
                            className="h-8 w-8"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 64 64"
                            id="cart"
                          >
                            <g fill="#134563">
                              <path d="M48.5 45.7H18.2c-.5 0-.9-.2-1.1-.6-.3-.4-.3-.9-.1-1.3l2.6-6.6L17 12.6H8.6V9.8h9.6c.7 0 1.3.5 1.4 1.2l2.8 26.1c0 .2 0 .4-.1.7l-2 5h28.2v2.9"></path>
                              <path d="m21.3 38.8-.6-2.7 31.9-6.6V18.2h-33v-2.8H54c.8 0 1.4.6 1.4 1.4v13.8c0 .7-.5 1.2-1.1 1.3l-33 6.9M49.9 54c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5 5.5 2.5 5.5 5.5-2.5 5.5-5.5 5.5zm0-8.3c-1.5 0-2.8 1.2-2.8 2.8s1.2 2.8 2.8 2.8 2.8-1.2 2.8-2.8-1.3-2.8-2.8-2.8zm-33 8.3c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5 5.5 2.5 5.5 5.5-2.5 5.5-5.5 5.5zm0-8.3c-1.5 0-2.8 1.2-2.8 2.8s1.2 2.8 2.8 2.8 2.8-1.2 2.8-2.8-1.3-2.8-2.8-2.8z"></path>
                            </g>
                          </svg>
                        </button>
                        {showPopup && <div className="popup">Item added to cart</div>}
                        <button
                          onClick={() => {
                            setSelectedProduct(product)
                            navigate("/buynow")
                          }}
                          className="text-slate-200 font-semibold text-lg border-4 rounded-lg p-2 bg-slate-500" >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
        <div className="w-2/3 flex flex-row justify-evenly  m-5">
          <button
            className="border-solid border-2 p-3 rounded-lg bg-gray-300"
            onClick={previousPage}
          >
            <GrPrevious />
          </button>
          <button
            className="border-solid border-2 p-3 rounded-lg	bg-gray-300"
            onClick={nextPage}
          >
            <GrNext />
          </button>
        </div>
      </div>

    </div>
  );
};

export default Card;
