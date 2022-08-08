import React from "react";

const Service = ({ service }) => {
  const { img, name } = service || {};
  return (
    <div className="mt-4 shadow-xl card lg:max-w-lg bg-base-100">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="items-center text-center card-body">
        <h2 className="card-title">{name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
};

export default Service;
