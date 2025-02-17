/*import { useState, useEffect } from "react";

function App() {
  const [color, setColor] = useState("olive");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAboutPage, setIsAboutPage] = useState(false);
  const handleLogoClick = () => {
    setIsAboutPage(true); // Show the About Home Services section
  };

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true); // When scrolled more than 100px
      } else {
        setIsScrolled(false); // Back to the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navigation Bar }
      

      <nav
        className={`${
          isScrolled
            ? "fixed top-0 left-0 h-full w-40 bg-gray-800 flex flex-col p-6 transition-all duration-300"
            : "fixed top-0 w-full bg-gray-800 flex justify-between p-4 transition-all duration-300"
        } shadow-lg z-10`}
      >
        {/* Logo }
        <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
          <img
            src="https://images-platform.99static.com//YyNmY8VIfP8XZZuhIFrkUQEFh_w=/180x761:849x1431/fit-in/590x590/99designs-contests-attachments/152/152091/attachment_152091951"
            alt="Home Services Logo"
            className="h-10 w-10 mr-3"
          />
          <div className="text-white text-xl font-bold mb-6">Home Services</div>
        </div>

        {/* Navigation Links }
        <ul className={`${isScrolled ? "space-y-6" : "flex space-x-6"} text-white`}>
          <li>
            <a
              href="#"
              className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-full shadow-lg px-3 py-1"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-full shadow-lg px-3 py-1"
            >
              Edit Profile
            </a>
          </li>
          <li>
            <a
              href="#"
              className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-full shadow-lg px-3 py-1"
            >
              Messages
            </a>
          </li>
          <li>
            <a
              href="#"
              className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-full shadow-lg px-3 py-1"
            >
              Notifications
            </a>
          </li>
          <li>
            <a
              href="#"
              className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-full shadow-lg px-3 py-1"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>

      {/* Conditionally Render About Home Services }
<div className="pt-20">
  {isAboutPage && (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img
        src="https://images-platform.99static.com//YyNmY8VIfP8ZZuhIFrkUQEFh_w=/180x761:849x1431/fit-in/590x590/99designs-contests-attachments/152/152091/attachment_152091951"
        alt="About Logo"
        className="h-20 w-20 mb-5"
      />
      <h1 className="text-4xl font-bold mb-4">About Home Services</h1>
      <p className="text-lg text-gray-700 text-center max-w-2xl mb-6">
        We provide a range of home services including plumbing, home decoration, painting, wooden work, electrician services, and much more. Our services are trusted by hundreds of satisfied customers.
      </p>
      {/* Back Button }
      <button
        onClick={() => setIsAboutPage(false)} // Sets the isAboutPage state to false to return to the main page
        className="bg-violet-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-violet-600 transition duration-300"
      >
        Back to Services
      </button>
    </div>
  )}
</div>

      {/* Service Cards }
      <div
  className="app-container w-full min-h-screen flex flex-col items-center justify-center pt-20" // Add pt-20 for padding-top
  style={{ backgroundColor: color, paddingTop: isScrolled ? '64px' : '80px' }} // Adjust padding based on navbar position
>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5 w-full max-w-7xl">
          {/* Card Components }
          {[
            { title: "Plumber", color: "bg-blue-500" },
            { title: "Home Decoration", color: "bg-green-500" },
            { title: "Painter", color: "bg-yellow-500" },
            { title: "Wooden Work", color: "bg-red-500" },
            { title: "Electrician", color: "bg-purple-500" }
          ].map((service, index) => (
            <div
              key={index}
              className={`${service.color} card p-5 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:translate-x-2 duration-300`}
            >
              <h2 className="text-white text-2xl font-bold mb-3">{service.title}</h2>
              <p className="text-white mb-4">
                Professional and trusted {service.title.toLowerCase()} services for your home.
              </p>
              <button className="bg-white text-gray-800 px-4 py-2 rounded-full shadow-md hover:bg-gray-300">
                Get Service
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Color Toggle Buttons }
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("black")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
            <button
              onClick={() => setColor("white")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "white" }}
            >
              White
            </button>
            <button
              onClick={() => setColor("violet")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "violet" }}
            >
              Violet
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
*/
import React, { useState } from 'react';

function ColorTogglePage() {
  const [color, setColor] = useState("white"); // Initial color set to white

  return (
    <div className="w-full h-screen duration-2000" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => setColor("white")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
          <button
            onClick={() => setColor("violet")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "violet" }}
          >
            Violet
          </button>
        </div>
      </div>
    </div>
  );
}

export default ColorTogglePage;
