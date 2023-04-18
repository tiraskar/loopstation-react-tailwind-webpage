import React from 'react';
import interactiveImage from '../assets/images/desktop/image-interactive.jpg';

const Features = () => {
  return (
    <div id="features">
      <div
        className="relative container flex flex-col max-w-6xl
      mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0 "
      >
        <img src={interactiveImage} alt="" />

        <div className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
          <h2
            className="max-w-lg mt-10 mb-6 font-sans text-4xl uppercase text-center text-gray-900
          md:text-5xl md:mt-0 md:pl-20"
          >
            {text.heading}
          </h2>
          <p className="max-w-md font-alata text-gray-400 justify-between">
            {text.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;

const text = {
  heading: `The leader in interactive vr`,
  description: `Founded in 2011, Loopstudios has been producing world-class virtual
                reality projects for some of the best companies around the globe.
                Our award-winning creations have transformed businesses through
                digital experiences that bind to their brand.`,
};
