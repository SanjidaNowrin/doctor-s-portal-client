import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "./../Shared/PrimaryButton";
const MakeAppointment = () => {
  return (
    <section
      style={{ background: `url(${appointment})` }}
      className="flex items-center justify-center px-12 mt-[200px]"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-160px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 px-5">
        <h3 className="text-xl text-primary">Appointment</h3>
        <h2 className="py-5 text-3xl text-white">Make an Appointment</h2>
        <p className="pb-5 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          repudiandae maxime iure beatae, porro odio? Nulla velit dicta
          doloribus dolorum?
        </p>
        <PrimaryButton title="Get Started" />
      </div>
    </section>
  );
};

export default MakeAppointment;
