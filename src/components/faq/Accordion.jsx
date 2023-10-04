import React, { useState } from "react";
import "./accordion.css";

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = index => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <>
      <div className="accordion-container">
        <button
          className={`accordion ${activeIndex === 0 ? "active" : ""}`}
          onClick={() => toggleAccordion(0)}
        >
          What are the different types of virtual headsets available?
        </button>
        <div
          className="panel"
          style={{
            maxHeight: activeIndex === 0 ? "1000px" : "0",
          }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <div className="accordion-container">
        <button
          className={`accordion ${activeIndex === 1 ? "active" : ""}`}
          onClick={() => toggleAccordion(1)}
        >
          How does a virtual headset work?
        </button>
        <div
          className="panel"
          style={{
            maxHeight: activeIndex === 1 ? "1000px" : "0",
          }}
        >
          <p>
            Virtual headsets are equipped with various sensors to track the
            user's movements. These sensors can include accelerometers,
            gyroscopes, and sometimes external cameras or base stations. They
            constantly monitor the position and orientation of the headset and
            sometimes the user's hand controllers. <br /><br /> The headset has one or two
            high-resolution displays, one for each eye, positioned in front of
            the user's eyes. These displays show stereoscopic 3D images,
            creating a sense of depth and immersion. Between the displays and
            the user's eyes, help focus the images and adjust them for the
            user's field of view.
          </p>
        </div>
      </div>

      <div className="accordion-container">
        <button
          className={`accordion ${activeIndex === 2 ? "active" : ""}`}
          onClick={() => toggleAccordion(2)}
        >
          Do I need a powerful computer to use a virtual headset?
        </button>
        <div
          className="panel"
          style={{
            maxHeight: activeIndex === 2 ? "1000px" : "0",
          }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <div className="accordion-container">
        <button
          className={`accordion ${activeIndex === 3 ? "active" : ""}`}
          onClick={() => toggleAccordion(3)}
        >
          What are the main applications of virtual headsets?
        </button>
        <div
          className="panel"
          style={{
            maxHeight: activeIndex === 3 ? "1000px" : "0",
          }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </>
  );
}

export default Accordion;
