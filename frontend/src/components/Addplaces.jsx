
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Addplaces = () => {

  const navigate = useNavigate();

  const [selImg, setSelImg] = useState("");

  const uploadFile = async (e) => {
    if (!e.target.files[0]) return;
    const file = e.target.files[0];
    setSelImg(file.name);
    const fd = new FormData();
    fd.append("myfile", file);

    const res = await fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    });

    console.log(res.status);

    if (res.status === 200) {
      console.log("File uploaded successfully");
    } else {
      console.log("File upload failed");
    }
  };

  const AddPlacesForm = useFormik({
    initialValues: {
      title: "",
      description: "",
      address: "",
      image: "",
      location: ""


    },
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      values.image = selImg;

      console.log(values);
      setSubmitting(true);

      const res = await fetch("http://localhost:5000/place/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.status);
      setSubmitting(false);

      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "WellDone!",
          text: "Registered Successfully 😎",
        });
        navigate("/BrowseLocation");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong",
        });
      }

      // write code to submit form to server
    },
  });




  return (
    <form onSubmit={AddPlacesForm.handleSubmit}>
      <section className="h-100 bg-white">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-centre align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">

                    <div className="card-body p-md-5 text-black  ">
                      <h3 className="display-5 fw-bold text-centre page-title text-uppercase">
                        Add Place
                      </h3>

                    </div>
                  </div>
                  <img
                    src="/images2/hero-img02.jpg"
                    alt="photo"
                    className="img-fluid w-100"
                    style={{
                      borderTopLeftRadius: ".50rem",
                      borderBottomLeftRadius: ".50rem"
                      // alignItems:"centre",
                      // display:" block",
                      // // margin-left: "auto",
                      // // margin-right: "auto",
                      // width: 50%


                    }}
                  />
                  {/* </div>
               </div> */}

                </div>
              </div>
            </div>
          </div>
          <div className="form-control form-control-lg">
            <label htmlFor="exampleFormControlInput1">Name</label>
            <input
              type="text"
              onChange={AddPlacesForm.handleChange}
              value={AddPlacesForm.values.title}
              name="title"
              className="form-control"
              id="nakn"

            />
          </div>
          <div className="form-control form-control-lg">
            <label htmlFor="exampleFormControlInput1">Address</label>
            <input
              type="text"
              onChange={AddPlacesForm.handleChange}
              value={AddPlacesForm.values.address}
              name="address"

              className="form-control"
              id="4/325FNnmvaef"

            />
          </div>
          <div className="form-control form-control-lg">
            <label htmlFor="exampleFormControlInput1">Email </label>
            <input
              type="email"
              onChange={AddPlacesForm.handleChange}
              value={AddPlacesForm.values.email}
              name="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="form-control form-control-lg">
            <label htmlFor="exampleFormControlSelect1">Select Location</label>
            <select className="form-control" id="exampleFormControlSelect1"

              onChange={AddPlacesForm.handleChange}
              value={AddPlacesForm.values.location}
              name="location"
            >
              <option>Select Location</option>
              <option>Turkey</option>
              <option>Spain</option>
              <option>United State</option>
              <option>Mexico</option>
              <option>Greece</option>
              <option>India</option>
            </select>
          </div>

          <input type="file" onChange={uploadFile} />


          <div className="form-control form-control-lg">
            <label htmlFor="exampleFormControlTextarea1">Description</label>
            <textarea
              onChange={AddPlacesForm.handleChange}
              value={AddPlacesForm.values.description}
              name="description"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              defaultValue={""}
            />
          </div>
          <div className="pt-1 mb-4">
            <button
              className="btn btn-dark btn-lg btn-block"
              type="submit"
              disabled={AddPlacesForm.isSubmitting}
            >
              Submit
            </button>
          </div>


        </div>




      </section>
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
    </form>



  )
}

export default Addplaces;