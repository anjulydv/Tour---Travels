import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <form>

      <div class="Home">
        <div class="content">
          <h1 > Welcome to travel.co</h1>
          <h3>Visit <span class="changecontent"></span></h3>
          <p>dasfadsfd</p>
          <div style={{ textAlign: "center" }}>

            <Link to="BrowseLocation">Book Places</Link>
          </div>
        </div>
      </div>
      <footer>
        <div className="foot-panel1">Back to Top</div>
        <div className="foot-panel2">
          <ul>
            <p> Get to Know Us</p>
            <a>Careers</a>
            <a>Blogs</a>
            <a>About Travel.co</a>
            <a>Investor Relations</a>
          </ul>
          <ul>
            <p> Get to Know Us</p>
            <a>Careers</a>
            <a>Blogs</a>
            <a>About Travel.co</a>
            <a>Investor Relations</a>
          </ul>
          <ul>
            <p> Get to Know Us</p>
            <a>Careers</a>
            <a>Blogs</a>
            <a>About Travel.co</a>
            <a>Investor Relations</a>
          </ul>
          <ul>
            <p> Get to Know Us</p>
            <a>Careers</a>
            <a>Blogs</a>
            <a>About Travel.co</a>
            <a>Investor Relations</a>
          </ul>
        </div>
        <div className="foot-panel3">
          <div className="logo"></div>
        </div>
        <div className="foot-panel4">
          <div className="pages">
            <a>Conditons of Use</a>
            <a>Privacy Notice</a>
            <a>Your Ads Privacy Choices</a>
          </div>
        </div>
        <div className="copyright">
          <a> © 1996-2023, Travel.co, Inc. or its affiliates</a>
        </div>
      </footer>










    </form>



  )
}

export default Home;