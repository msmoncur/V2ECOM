import React from "react";
import Slider from "react-slick"; // Install react-slick and slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IMG1 from '../images/IMG1.jpg';
import IMG2 from '../images/IMG2.jpg';
import IMG3 from '../images/IMG3.jpg';
import IMG4 from '../images/IMG4.jpg';
import IMG5 from '../images/IMG5.jpg';

const FeaturedCategories = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768, // For smaller screens
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <Slider {...sliderSettings}>
            {/* Category 1 */}
            <div className="text-center">
                <img
                    src={IMG1}
                    alt="Hero"
                    className="w-full object-cover h-[400px] rounded-lg mb-4"
                />
            </div>

            {/* Category 2 */}
            <div className="text-center">
                <img
                    src={IMG2}
                    alt="Secondary Hero"
                    className="w-full object-cover h-[400px] rounded-lg mb-4"
                />
            </div>

            {/* Add More Categories */}
            <div className="text-center">
                <img
                    src={IMG3}
                    alt="Outerwear"
                    className="w-full object-cover h-[400px] rounded-lg mb-4"
                />
            </div>

            <div className="text-center">
                <img
                    src={IMG4}
                    alt="Shoes"
                    className="w-full object-cover h-[400px] rounded-lg mb-4"
                />
            </div>

            <div className="text-center">
                <img
                    src={IMG5}
                    alt="Shoes"
                    className="w-full object-cover h-[400px] rounded-lg mb-4"
                />
            </div>
        </Slider>
    );
};

export default FeaturedCategories;