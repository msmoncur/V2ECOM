import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IMG1 from '../assets/images/IMG1.jpg';
import IMG2 from '../assets/images/IMG2.jpg';
import IMG3 from '../assets/images/IMG3.jpg';
import IMG4 from '../assets/images/IMG4.jpg';
import IMG5 from '../assets/images/IMG5.jpg';

const FeaturedImages = () => {
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
            {/* Image 1 */}
            <div className="text-center">
                <img
                    src={IMG1}
                    alt="Hero"
                    className="w-full object-cover h-[400px] rounded-lg mb-4"
                />
            </div>

            {/* Image 2 */}
            <div className="text-center">
                <img
                    src={IMG2}
                    alt="Secondary Hero"
                    className="w-full object-cover h-[400px] rounded-lg mb-4"
                />
            </div>

            {/* More images */}
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

export default FeaturedImages;