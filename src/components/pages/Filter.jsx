const Filter = ({ products }) => {
    console.log(products);

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

            <div className="flex felx-row gap-9">
                <div className="flex flex-col p-3">
                    <h3 className="text-sm underline font-bold text-yellow-200">BRAND</h3>
                    {products?.map((product) => (
                        <div className="flex flex-col cursor-pointer">
                            <div key={product.id}>
                                <input type="checkbox" /> {product.brand}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col p-3">
                    <h3 className="text-sm underline font-bold text-yellow-200">
                        CATEGORY
                    </h3>
                    {products?.map((product) => (
                        <div className="flex flex-col cursor-pointer">
                            <div key={product.id}>
                                <input type="checkbox" /> {product.category}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Filter;
