import React from "react";

const Review = ({ review }) => {
  const { img, name, location } = review || {};
  return (
    <div className="shadow-xl lg:mx-w-lg card bg-base-100">
      <div className="card-body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          consectetur aperiam vel ipsum dolore error perspiciatis beatae itaque
          a nobis.
        </p>
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-16 mr-5 rounded-full ring ring-primary ring-offset-base-100">
              <img src={img} />
            </div>
          </div>
          <div>
            <h4 className="text-xl">{name}</h4>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
