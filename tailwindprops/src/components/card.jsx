import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-4">
      {image && <img className="w-full h-48 object-cover rounded-lg" src={image} alt={title} />}
      <div className="px-4 py-2">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;
