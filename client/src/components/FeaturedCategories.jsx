import React from "react";
import Slider from "react-slick"; // Install react-slick and slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
                    src="src/images/IMG4.jpg"
                    alt="Hero"
                    className="w-full object-cover h-[400px] rounded-lg mb-4"
                />
            </div>

            {/* Category 2 */}
            <div className="text-center">
                <img
                    src="src/images/IMG5.jpg"
                    alt="Secondary Hero"
                    className="w-full object-cover h-[400px] rounded-lg mb-4"
                />
            </div>

            {/* Add More Categories */}
            <div className="text-center">
                <img
                    src="src/images/IMG1.jpg"
                    alt="Outerwear"
                    className="w-full object-cover h-[400px] rounded-lg mb-4"
                />
            </div>

            <div className="text-center">
                <img
                    src="src/images/IMG2.jpg"
                    alt="Shoes"
                    className="w-full object-cover h-[400px] rounded-lg mb-4"
                />
            </div>

            <div className="text-center">
                <img
                    src="src/images/IMG3.jpg"
                    alt="Shoes"
                    className="w-full object-cover h-[400px] rounded-lg mb-4"
                />
            </div>
        </Slider>
    );
};

export default FeaturedCategories;