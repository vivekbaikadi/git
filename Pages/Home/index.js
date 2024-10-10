
import HomeBanner from "../../Components/HomeBanner";
import Button from '@mui/material/Button';
import { FaArrowRightLong } from "react-icons/fa6";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductItem from "../../Components/ProductItem";
import Barcode from "../../Components/Barcode"



const Home = () => {

    // var productSliderOptions = {
    //     dots: true,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 1
    // };

    return (
        <>
            <HomeBanner />
            
            <section className="homeProducts">
                <div className="container">
                    <div className="productRow">
                        <div className="sellopp d-flex align-items-center">
                            <div className="info">
                                <h3 className="mb-0 hd">BEST SELLERS</h3>
                                <p className="text-light text-sml mb-0">Do not miss the current offers until the end of March.</p>
                            </div>

                            <Button className="viewAllBtn">View all<FaArrowRightLong /></Button>
                        </div>

                        <div className="product_row w-100 mt-4">
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={10}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>

                                
                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>

                                
                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>

                                
                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>

                                
                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>

                                
                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>

                                
                            </Swiper>
                        </div>

                    </div>
                </div>
            </section>
            <Barcode/>
            
        </>
    )
}

export default Home;


