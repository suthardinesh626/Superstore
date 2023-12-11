import React, { useContext } from 'react';
import { Carousel } from 'flowbite-react';
import { APIContext } from '../../context/APIContext';

const HomeCarousel = () => {
    const { products} = useContext(APIContext);


    return (
        <div>
            <div className="min-h-1/2 sm:h-64 xl:h-80 2xl:h-96 ">
                <Carousel slide={true}>
                    {products.map((item, index) => (
                        <img className='w-2/5' key={index} src={item.thumbnail} alt={item.name} />
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default HomeCarousel;