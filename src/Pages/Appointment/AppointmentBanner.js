import React, { useState } from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div className="min-h-screen hero ">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <img
          src={chair}
          alt="chair"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
