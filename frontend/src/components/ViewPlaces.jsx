import React, { useEffect, useState } from 'react'
// import React, { useRef, useState } from 'react';
// Import Swiper React components;
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles;
import 'swiper/css';
import 'swiper/css/navigation';




import './style.css';
import { Navigation } from 'swiper/modules'
import { Link, useParams } from 'react-router-dom';


const ViewPlaces = () => {

  const { location } = useParams();

  const [placeList, setPlaceList] = useState([]);

  const fetchPlaces = async () => {
    const res = await fetch('http://localhost:5000/place/getbylocation/' + location);

    const data = await res.json();

    console.log(data);
    setPlaceList(data);
  }

  useEffect(() => {
    fetchPlaces();
  }, [])

  const displayPlaces = () => {
    return placeList.map(place => (
      <div className='col-md-4'>
        <div className="card">
          <img className='my-img' src={'http://localhost:5000/'+place.image} alt="" />
          <div className="card-body">
            <h3>{place.title}</h3>
            <p>{place.description.slice(0, 100)} ...</p>
          </div>
          <div className="card-footer">
            <p>{place.footer}</p>
          <Link className='btn btn-success' to={'/placedetails/'+place._id}>View More</Link>
          </div>

        </div>
      </div>
    ))
  }


  return (

    <>
      <section>
        <div className="View Places">

          <h1 className="display-4 fw-bold text-center page-title" >Popular Destination

          </h1>
          <p className="display-6 text-center page-title">Tours give you the opportunity to see a lot, within a time frame
          </p>

          <section>
            <div className="container">

              <h2 className='display-7 fsw-bold text-left page-title'>
                Places to Visit in  {location}
              </h2>

              <div className="row mt-5">
                {displayPlaces()}
              </div>
            </div>
          </section>
        </div>
      </section>
    </>

  )
}

export default ViewPlaces