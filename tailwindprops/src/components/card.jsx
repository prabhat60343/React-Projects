import React from "react";

const Card = ({ channel = "N/A", someObj = {} }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-4 transition-transform transform hover:scale-105 hover:shadow-2xl">
      <img
        className="w-full h-64 object-cover rounded-lg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ye5EJGu2sx70JLkhOoIo9t6oei7e5qgfNA&s"
        alt={channel}
      />
      <div className="px-4 py-2">
        <h2 className="text-xl font-bold text-gray-800">Channel: {channel}</h2>
        <p className="text-gray-600 mt-2">Username: {someObj?.username || "Unknown"}</p>
        <p className="text-gray-600 mt-1">Age: {someObj?.age ?? "?"}</p>
      </div>
    </div>
  );
};

export default Card;
