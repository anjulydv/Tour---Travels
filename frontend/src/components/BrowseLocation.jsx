
import React, { useRef, useState } from 'react';
// Import Swiper React components;
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles;
import 'swiper/css';
import 'swiper/css/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";






import './style.css';
import { Navigation } from 'swiper/modules'
import { Link } from 'react-router-dom';


// import required modules

// const BroweLocation = () => {
//   const {setLoggedIn } = useUserContext();

//   const navigate = useNavigate( );

//   //Initialising fromik
//   const BroweLocationForm =useFormik( { 
//     initialValues:{
//       email :" ",
//       password:" "
//     },
//     onSubmit : async (  values, {resetForm} ) =>{ 
//       console.log(values);
//       // write code to submit form to server
//       const res= await fetch('http://localhost:5000/user/authenticate',{
//         method : 'POST',
//         body:JSON.stringify(values),
//         headers:{
//           'Content-Type' :'application/json'
//         }
//       })

//       console.log(res.status);

//       if(res.status == 200){
//         Swal.fire({
//           icon : 'success',
//           title : 'WellDone!',
//           text : 'Registered Successfully'
//         });
//         const data = await res.json();
//         sessionStorage.setItem('user', JSON.stringify(data));
//         setLoggedIn(true);
//         resetForm( );

//       }
//       else if(res.status === 401){
//         Swal.fire({
//           icon : 'error',
//           title : 'Error',
//           text : 'Email or Password is incorrect 😢'
//         });
//       }



//       else{
//         Swal.fire({
//           icon :'error',
//           title :' Error',
//           text : 'Something went wrong'
//         })
//       }
//     },

//   });





const Addplaces = () => {
  return (

    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossOrigin="anonymous"
      />
      "
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      "

      <header>
        <section>
          <h1 className="display-4 fw-bold text-center page-title ">
            Places To Visit
          </h1>
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
            <SwiperSlide className='slide slide3'></SwiperSlide>
            <SwiperSlide className='slide slide4'></SwiperSlide>
            <SwiperSlide className='slide slide5'></SwiperSlide>
            <SwiperSlide className='slide slide6'></SwiperSlide>
          </Swiper> *
        </>

      </header>

      <div className='carousel-inner'>
        <div className='carousel-item active'>
          < div className="container mt-5 ">
          
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="/images/Greece.png"
                  />
                  <div className="card-body">
                    <p className="fw-bold">Greece</p>

                    <p className="fw-bold">
                      <i className="fa-solid fa-star" />
                      Greece is a country in southeastern Europe with thousands
                      of islands throughout the Aegean and Ionian seas. Influential in ancient
                      times, it's often called the cradle of Western civilization.
                      Athens, its capital, retains landmarks including the 5th-century B.C.
                    </p>

                  </div>
                  <div className="card-footer">
                    <Link className="btn btn-primary"
                      to="/ViewPlaces/Greece">View Places
                      <i className="fa-solid fa-bolt fa-beat-fade" />
                    </Link>
                    {/* <button className="btn btn-danger">
              Add Place<i className="fa-solid fa-cart-shopping" />{" "}
            </button>  */}
                  </div>
                </div>
              </div>


              <div className="col-md-4 mb-4">
                <div className="card">
                  <div className="img-container">
                    <img
                      className="card-img-top"
                      src="./images/Spain.png"
                      style={{}}
                    />
                  </div>
                  <div className="card-body">
                    <p className="fw-bold">Spain</p>

                    <p className="fw-bold">
                      <i className="fa-solid fa-star" />
                      Spain, a country on Europe’s Iberian Peninsula, includes 17 autonomous regions with diverse geography
                      and cultures. Capital city Madrid is home to the Royal Palace and Prado museum, housing works by European mastersSegovia has a medieval castle (the Alcázar) and an intact Roman
                    </p>

                  </div>
                  <div className="card-footer">
                    <Link className="btn btn-primary"
                      to="/ViewPlaces/Spain">View Places
                      <i className="fa-solid fa-bolt fa-beat-fade" />
                    </Link>
                    {/* <button className="btn btn-danger">
              Add Place <i className="fa-solid fa-cart-shopping" />{" "}
            </button> */}
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="./images/Turkey.png"
                  />
                  <div className="card-body">
                    <p className="fw-bold">Turkey</p>
                    <h5>

                    </h5>
                    <p className="fw-bold">
                      <i className="fa-solid fa-star" />
                      Turkey, officially the Republic of Türkiye, is a country located in the border of Southeast Europe and West Asia.
                      It is mainly on the Anatolian Peninsula in West Asia, with a small portion called East Thrace on the Balkan Peninsula in Southeast Europe
                    </p>

                  </div>
                  <div className="card-footer">
                  <Link className="btn btn-primary"
                      to="/ViewPlaces/Turkey">View Places
                      <i className="fa-solid fa-bolt fa-beat-fade" />
                    </Link>
                    {/* <button className="btn btn-danger">
              Add Place <i className="fa-solid fa-cart-shopping" />{" "}
            </button> */}
                  </div>
                </div>
              </div>

               <div className="col-md-4 mb-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="./images/united state.png"
                  />
                  <div className="card-body">
                    <p className="fw-bold">United State</p>

                    <p className="fw-bold">
                      <i className="fa-solid fa-star" />
                      The U.S. is a country of 50 states covering a vast swath of North America, with Alaska in the northwest and Hawaii extending the nation’s
                      presence into the Pacific Ocean. Major Atlantic Coast cities are New York, a global finance and culture center, and capital Washington, DC
                    </p>

                  </div>
                  <div className="card-footer">
                  <Link className="btn btn-primary"
                      to="/ViewPlaces/United State">View Places
                      <i className="fa-solid fa-bolt fa-beat-fade" />
                    </Link>
                    {/* <button className="btn btn-danger">
              Add Place <i className="fa-solid fa-cart-shopping" />{" "}
          </button> */}
                  </div>
                </div>
              </div> 
              <div className="col-md-4 mb-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="./tour-images/india.avif"
                  />
                  <div className="card-body">
                    <p className="fw-bold">India</p>

                    <p className="fw-bold">
                      <i className="fa-solid fa-star" />
                      The U.S. is a country of 50 states covering a vast swath of North America, with Alaska in the northwest and Hawaii extending the nation’s
                      presence into the Pacific Ocean. Major Atlantic Coast cities are New York, a global finance and culture center, and capital Washington, DC
                    </p>

                  </div>
                  <div className="card-footer">
                  <Link className="btn btn-primary"
                      to="/ViewPlaces/India">View Places
                      <i className="fa-solid fa-bolt fa-beat-fade" />
                    </Link>
                    {/* <button className="btn btn-danger">
              Add Place <i className="fa-solid fa-cart-shopping" />{" "}
            </button> */}
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="./tour-images/india.avif"
                    
                  />
                  <div className="card-body">
                    <p className="fw-bold">India</p>

                    <p className="fw-bold">
                      <i className="fa-solid fa-star" />
                      The U.S. is a country of 50 states covering a vast swath of North America, with Alaska in the northwest and Hawaii extending the nation’s
                      presence into the Pacific Ocean. Major Atlantic Coast cities are New York, a global finance and culture center, and capital Washington, DC
                    </p>

                  </div>
                  <div className="card-footer">
                  <Link className="btn btn-primary"
                      to="/ViewPlaces/India">View Places
                      <i className="fa-solid fa-bolt fa-beat-fade" />
                    </Link>
                    {/* <button className="btn btn-danger">
              Add Place <i className="fa-solid fa-cart-shopping" />{" "}
            </button> */}
                  </div>
                </div>
              </div>
              
              
              
            

          
            </div>

          </div>

        </div>
      </div>
     
      <div class="copyRight">
      <div class="container">
        <div class="socialMedia">
        
          <a href="https://www.facebook.com/" class="sprite facebookIcon">&nbsp;</a>
          <a href="https://twitter.com/" class="sprite twitterIcon">&nbsp;</a>
          <div class="cRights">
          <p class="whiteText latoBold appendBottom4">© 2023 TRAVEL.CO PVT. LTD.</p>
          <p class="whiteText latoBold">Country<span class="latoBlack"><a class="whiteText" href="https://www.makemytrip.com/">
                India
              </a>
              <a class="whiteText" href="https://www.makemytrip.com/?ccde=US">USA</a>
              <a class="whiteText" href="https://www.makemytrip.com/?ccde=AE">UAE</a></span></p>
        </div>
       
        </div>
        </div>
      </div>
              


    </>
   

  )
}

export default Addplaces
















