import React, { useState } from "react";
import "../assets/styles/glightbox.min.css";
import "../assets/styles/lineicons.css";
import "../assets/styles/tiny-slider.css";
import "../assets/styles/style.css";
import landingBanner from "../assets/images/banner.png";
import aboutBanner from "../assets/images/8225.jpg";
import PlusOneIcon from "@mui/icons-material/PlusOne";
import NewNavbar from "../components/NewNavbar";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const LandingPage = () => {
  const [query, setQuery] = useState({});
  // eslint-disable-next-line no-undef
  const BASE_URL = process.env.REACT_APP_BACKEND_BASEURL;

  const handleQueries = async (e) => {
    e.preventDefault();
    const res = await fetch(`${BASE_URL}/queries/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
    });
    const data = await res.json();
    if (res.ok) {
      toast.success(data);
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery({ ...query, [e.target.name]: value });
  };
  return (
    <>
      <NewNavbar />

      {/* <!-- Start header Area --> */}
      <section
        id="hero-area"
        style={{ background: "white" }}
        className="header-area header-eight"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="header-content">
                <h1 style={{ color: "black" }}>
                  Achieve Your Fitness Goals with Kasrat - The Ultimate Fitness
                  Assistant
                </h1>
                <p style={{ color: "black" }}>
                  Your Personalized Workout and Nutrition Companion
                </p>
                <div className="button">
                  <Link to={"/search-exercises"} className="btn primary-btn">Get Started</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="header-image">
                <img src={landingBanner} alt="#" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End header Area -->

  <!--====== ABOUT FIVE PART START ======--> */}

      <section className="about-area about-five">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <div className="about-image-five">
                <img src={aboutBanner} alt="about" />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="about-five-content">
                <h6 className="small-title text-lg">OUR STORY</h6>
                <h2 className="main-title fw-bold">
                  Our team comes with the experience and knowledge
                </h2>
                <div className="about-five-tab">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <button
                        className="nav-link active"
                        id="nav-who-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-who"
                        type="button"
                        role="tab"
                        aria-controls="nav-who"
                        aria-selected="true"
                      >
                        Who We Are
                      </button>
                      <button
                        className="nav-link"
                        id="nav-vision-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-vision"
                        type="button"
                        role="tab"
                        aria-controls="nav-vision"
                        aria-selected="false"
                      >
                        our Vision
                      </button>
                      <button
                        className="nav-link"
                        id="nav-history-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-history"
                        type="button"
                        role="tab"
                        aria-controls="nav-history"
                        aria-selected="false"
                      >
                        our History
                      </button>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-who"
                      role="tabpanel"
                      aria-labelledby="nav-who-tab"
                    >
                      <p>
                        At Kasrat, we are a passionate team dedicated to
                        revolutionizing your fitness journey. With our
                        comprehensive web app, we provide access to a wide range
                        of exercises, personalized workout plans, meal planning,
                        and an innovative exercise rep counter.
                      </p>
                      <p>
                        Our goal is to make fitness accessible, enjoyable, and
                        effective for everyone. Join us today and experience the
                        power of Kasrat - Your Ultimate Fitness Assistant.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-vision"
                      role="tabpanel"
                      aria-labelledby="nav-vision-tab"
                    >
                      <p>
                        Our vision at Kasrat is to inspire individuals worldwide
                        to lead healthier lives and make fitness accessible to
                        all. We strive to be the go-to fitness assistant,
                        providing personalized guidance, support, and
                        cutting-edge technology.
                      </p>
                      <p>
                        We aim to foster a vibrant community where everyone
                        feels empowered and motivated to achieve their fitness
                        goals. Join us on this transformative journey with
                        Kasrat - Your Ultimate Fitness Assistant.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-history"
                      role="tabpanel"
                      aria-labelledby="nav-history-tab"
                    >
                      <p>
                        Established in 2023, Kasrat has grown from a passion
                        project into a leading fitness assistant. Our platform
                        combines exercise guidance, personalized plans, and
                        advanced tracking capabilities to help users achieve
                        their goals. With a dedicated community of users, we
                        continue to innovate and redefine the fitness landscape.
                        Join us on this transformative journey with Kasrat -
                        Your Ultimate Fitness Assistant.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- container --> */}
      </section>

      {/* <!--====== ABOUT FIVE PART ENDS ======--> */}

      {/* <!-- ===== service-area start ===== --> */}
      <section id="features" className="services-area services-eight">
        {/* <!--======  Start Section Title Five ======--> */}
        <div className="section-title-five">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="content">
                  <h6>Features</h6>
                  <h2 className="fw-bold">Features</h2>
                  <p>Features that Empower Your Fitness Journey</p>
                </div>
              </div>
            </div>
            {/* <!-- row --> */}
          </div>
          {/* <!-- container --> */}
        </div>
        {/* <!--======  End Section Title Five ======--> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <Link to={"/search-exercises"}>
                <div className="single-services">
                  <div className="service-icon">
                    <i className="lni lni-dumbbell"></i>
                  </div>
                  <div className="service-content">
                    <h4>Extensive Exercise Library</h4>
                    <p>
                      Find the exercise that best suits you, from our exercise
                      Library.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6">
              <Link to={"/generate-exercise-plan"}>
                <div className="single-services">
                  <div className="service-icon">
                    <i className="lni lni-check-box"></i>
                  </div>
                  <div className="service-content">
                    <h4>Personalized Workout Plans</h4>
                    <p>
                      Create your personalized exercise plan with the Exercise
                      Plan Generator. 
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6">
              <Link to={"/generate-meal-plan"}>
                <div className="single-services">
                  <div className="service-icon">
                    <i className="lni lni-dinner"></i>
                  </div>
                  <div className="service-content">
                    <h4>Meal Planning and Nutrition Support</h4>
                    <p>
                      Unlock precise meal planning with our innovative platform.
                      Using the BMR Calculator, we create personalized week-long
                      meal plans based on your exact calorie needs.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6">
              <Link to={"/workout"}>
                <div className="single-services">
                  <div className="service-icon">
                    <PlusOneIcon />
                  </div>
                  <div className="service-content">
                    <h4>Innovative Rep Counter</h4>
                    <p>
                      Harnessing the power of cutting-edge pose detection
                      technology, our platform helps you master your exercise
                      form and maximize your gains.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6">
              <Link to={"/workshops"}>
                <div className="single-services">
                  <div className="service-icon">
                    <i className="lni lni-video"></i>
                  </div>
                  <div className="service-content">
                    <h4>Online Video Training Sessions</h4>
                    <p>
                      Provide individuals with the opportunity to engage in
                      guided exercise programs from the comfort of their own
                      homes.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6">
              <Link>
                <div className="single-services">
                  <div className="service-icon">
                    <i className="lni lni-youtube"></i>
                  </div>
                  <div className="service-content">
                    <h4>YouTube Video Suggestions</h4>
                    <p>
                      Get Youtube Video Suggestions based on your Selected
                      Exercise
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="contact-form-wrapper">
                <div className="row">
                  <div className="col-xl-10 col-lg-8 mx-auto">
                    <div className="section-title text-center">
                      <span> Get in Touch </span>
                      <h2>Have a Query ?</h2>
                      <p>
                        Fill out the form and our team will reach ou to you.
                      </p>
                    </div>
                  </div>
                </div>
                <form action="#" className="contact-form">
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Phone"
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="subject"
                        id="email"
                        placeholder="Subject"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Type Message"
                        rows="5"
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="button text-center rounded-buttons">
                        <button
                          type="submit"
                          className="btn primary-btn rounded-full"
                          onClick={handleQueries}
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
