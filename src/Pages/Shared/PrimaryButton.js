import React from "react";

const PrimaryButton = ({ title }) => {
  return (
    <div>
      <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
        {title}
      </button>
    </div>
  );
};

export default PrimaryButton;
