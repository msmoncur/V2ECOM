import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoEmbed from "../components/VideoEmbed";
import Button from "../components/Button";
import FeaturedCategories from "../components/FeaturedCategories"; // Ensure the path is correct

const Home = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Video Embed Component */}
            <div style={{ marginBottom: "20px" }}>
                <VideoEmbed />
            </div>

            {/* Text Section */}
            <div className="bg-black text-white text-center py-8">
                <h2 className="text-5xl font-semibold text-balance text-white mb-4 sm:text-7xl">
                    "THEIR FAVORITE ATTRACTION"
                </h2>
                <p className="text-lg max-w-2xl mx-auto leading-relaxed">
                    Timeless yet unexpected, we help you embody the effortless reflection of a life lived on your own terms.
                    Every detail, every silhouette, and even the rare materials that shimmer with mystery, speaks to something
                    far beyond fashion—it is art, a story unfolding in each moment. As the room falls silent, one truth remains:
                    No matter when you arrive, <em>for you</em>, they are eager to wait.
                </p>
                <p className="font-bold italic mt-4">Esperar</p>

                {/* Button Component */}
                <Button
                    label="SHOP SEASON 25"
                    to="/products"
                    className="mt-4"
                />
            </div>

            {/* Featured Categories Section */}
            <div className="mb-8">
                <h1 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl mb-6">
                    WAITING ROOM
                </h1>
                <FeaturedCategories />
            </div>
        </div>
    );
};

export default Home;
