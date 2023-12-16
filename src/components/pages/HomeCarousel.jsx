import React, { useContext } from 'react';
import { Carousel } from 'flowbite-react';
import { APIContext } from '../../context/APIContext';

const HomeCarousel = () => {
    const { products } = useContext(APIContext);


    return (
        <div>
            <div className="hidden sm:block min-h-1/2 sm:h-64 md:h-80 lg:h-96 xl:h-120 2xl:h-144">
                <Carousel slide={true}>
                    {products.map((item, index) => (
                        <img className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6' key={index} src={item.thumbnail} alt={item.name} />
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default HomeCarousel;