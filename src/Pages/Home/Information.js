import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
const Information = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5">
      <InfoCard
        cardTitle="Opening Hours"
        img={clock}
        bgClass="bg-gradient-to-r from-secondary to-primary"
      />
      <InfoCard cardTitle="Our Locations" img={marker} bgClass="bg-accent" />
      <InfoCard
        cardTitle="Contact Us"
        img={phone}
        bgClass="bg-gradient-to-r from-secondary to-primary"
      />
    </div>
  );
};

export default Information;
