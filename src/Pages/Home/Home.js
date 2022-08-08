import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import Information from "./Information";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <Banner />
      <Information />
      <Services />
      <MakeAppointment />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
