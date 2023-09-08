import React, { useEffect, useState } from 'react'
// import React, { useRef, useState } from 'react';
// Import Swiper React components;
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles;
import 'swiper/css';
import 'swiper/css/navigation';




import './style.css';
import { Navigation } from 'swiper/modules'
import { useParams } from 'react-router-dom';


const ViewPlaces = () => {

    const { location } = useParams();

    const [placeList, setPlaceList] = useState([]);

    const fetchPlaces = async () => {
        const res = await fetch('http://localhost:5000/place/getbylocation/'+location);

        const data = await res.json();

        console.log(data);
        setPlaceList(data);
    }

    useEffect(() => {
      fetchPlaces();
    }, [])
    

    return (
        <form>

            <section>
                <h1 className="display-4 fw-bold text-center page-title ">
                    View Places
                </h1>
            </section>




            <section>
                <section>
                    <h2 className='display-7 fsw-bold text-left page-title'>
                        Places to Visit in Greece
                    </h2>
                </section>
                <>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                        <SwiperSlide className='slide slide1'>
                            <div className="container ">

                                <div className="input-group mt-5 searchinput">
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='slide slide2'>
                            <div className="container ">

                                <div className="input-group mt-5 searchinput">
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='slide slide3'>Slide 3</SwiperSlide>
                        <SwiperSlide className='slide slide4'>Slide 4</SwiperSlide>
                        <SwiperSlide className='slide slide5'>Slide 5</SwiperSlide>
                        <SwiperSlide className='slide slide6'>Slide 6</SwiperSlide>
                    </Swiper> *
                </>
            </section>

            <section>
                <section>
                    <h2 className='display-7 fsw-bold text-left page-title'>
                        Places to Visit in {location}
                    </h2>
                </section>
                <>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                        <SwiperSlide className='slide slide1'>
                            <div className="container ">

                                <div className="input-group mt-5 searchinput">
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='slide slide2'>
                            <div className="container ">

                                <div className="input-group mt-5 searchinput">
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='slide slide3'>Slide 3</SwiperSlide>
                        <SwiperSlide className='slide slide4'>Slide 4</SwiperSlide>
                        <SwiperSlide className='slide slide5'>Slide 5</SwiperSlide>
                        <SwiperSlide className='slide slide6'>Slide 6</SwiperSlide>
                    </Swiper> *
                </>

            </section>
            <section>
                <section>
                    <h2 className='display-7 fsw-bold text-left page-title'>
                        Places to Visit in {location}
                    </h2>

                </section>
                <>
                    {/* Swiper */}
                    <div className="swiper">
                        <div className="swiper-wrapper" />
                        {/* Add Pagination */}
                        <div className="swiper-pagination" />
                        {/* Add Arrows */}
                        <div className="swiper-button-next" />
                        <div className="swiper-button-prev" />
                    </div>
                    <p className="append-buttons">
                        <a href="#" className="prepend-2-slides">
                            Prepend 2 Slides
                        </a>
                        <a href="#" className="slide-1">
                            Slide 1
                        </a>
                        <a href="#" className="slide-250">
                            Slide 250
                        </a>
                        <a href="#" className="slide-500">
                            Slide 500
                        </a>
                        <a href="#" className="append-slide">
                            Append Slide
                        </a>
                    </p>
                    {/* Swiper JS */}
                    {/* Initialize Swiper */}
                </>

            </section>



        </form>

    )
}

export default ViewPlaces