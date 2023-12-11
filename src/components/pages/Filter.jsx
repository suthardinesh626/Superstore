import { useState } from "react";

const Filter = ({
  brands,
  categories,
  setCheckedBrands,
  setCheckedCategories,
}) => {

  const [isFilterVisible, setIsFilterVisible] = useState(true);

  const handleBrandCheck = (brand) => {
    setCheckedBrands((prev) => {
      if (prev.includes(brand)) {
        return prev.filter((b) => b !== brand);
      } else {
        return [...prev, brand];
      }
    });
  };

  const handleCategoryCheck = (category) => {
    setCheckedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  return (
    <div className="w-full">
      <div className="flex flex-row p-4">
        <p className="text-lg font-semibold px-3">Filter</p>
        <svg
          className="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="20"
          viewBox="0 0 22 20"
          id="filter"
          onClick={() => setIsFilterVisible(!isFilterVisible)}
        >
          <g
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <g
              stroke="#000"
              stroke-width="2"
              transform="translate(-1614 -1629)"
            >
              <g transform="translate(1615 1630)">
                <path d="M20 0H0l8 9.46V16l4 2V9.46z"></path>
              </g>
            </g>
          </g>
        </svg>
      </div>

      <div className="flex flex-col items-center">
        <hr className=" w-1/2 h-3" />
      </div>
      {isFilterVisible && (
        <div className="flex felx-row gap-9">
          <div className="flex flex-col p-3">
            <h3 className="text-sm underline font-bold text-gray-600">BRAND</h3>
            {brands?.map((brand) => (
              <div className="flex flex-col cursor-pointer">
                <div key={brand}>
                  <input
                    type="checkbox"
                    onChange={() => handleBrandCheck(brand)}
                  />{" "}
                  {brand}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col p-3">
            <h3 className="text-sm underline font-bold text-gray-600">
              CATEGORY
            </h3>
            {categories?.map((category) => (
              <div className="flex flex-col cursor-pointer">
                <div key={category}>
                  <input
                    type="checkbox"
                    onChange={() => handleCategoryCheck(category)}
                  />
                  <label htmlFor=""> {category} </label>
                </div>
              </div>
            ))}
          </div>
        </div>)}
    </div>
  );
};

export default Filter;
