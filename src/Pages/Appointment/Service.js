import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="mx-5 text-center shadow-xl mb-7 card bg-base-100">
      <div className="card-body">
        <h2 className="mx-auto card-title">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">No Slot Available</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="justify-center card-actions">
          <label
            htmlFor="booking-modal-6"
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            className="font-bold text-white uppercase btn modal-button btn-secondary bg-gradient-to-r from-secondary to-primary"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
