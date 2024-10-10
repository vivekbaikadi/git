import React from "react";
import Slider from "react-slick";

const HomeBanner = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };

    return (
        <div className="container">
            <div className="homeBannerSection">
                <Slider {...settings}>
                    <div className="item">
                        <img
                            src="https://www.bigbasket.com/media/uploads/banner_images/IBBN092113357-26108.jpg?tr=w-1920,q=80"
                            className="w-100"
                            alt="Banner 1"
                        />
                    </div>
                    <div className="item">
                        <img
                            src="https://www.bigbasket.com/media/uploads/banner_images/IBBN092113357-26109.jpg?tr=w-1920,q=80"
                            className="w-100"
                            alt="Banner 2"
                        />
                    </div>
                    <div className="item">
                        <img
                            src="https://www.bigbasket.com/media/uploads/banner_images/IBBN092113357-26111.jpg?tr=w-1920,q=80"
                            className="w-100"
                            alt="Banner 3"
                        />
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default HomeBanner;
