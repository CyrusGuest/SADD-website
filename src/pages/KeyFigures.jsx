import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const KeyFigures = () => {
  return (
    <div className="font-Poppins">
      <Navbar />
      <div className="container flex flex-col text-center lg:text-left gap-6 mt-14 lg:mt-20">
        <h1 className="text-6xl font-bold">Key Figures</h1>
        <h6 className="text-sadd-grey">
          By Cyrus Guest,{" "}
          <Link to="/sources" className="underline">
            Sources
          </Link>
        </h6>
        <hr className="divide-sadd-blue"></hr>
        <div className="flex flex-col gap-10 text-lg mx-5">
          <h3 className="text-3xl text-sadd-blue font-bold">Rachel Carson</h3>
          <p>
            Rachel Carson was an American marine biologist, conservationist, and
            author. She is best known for her book "Silent Spring," published in
            1962, which exposed the dangers of indiscriminate pesticide use and
            played a key role in launching the modern environmental movement.{" "}
          </p>
          <p>
            SADD was founded on the simple philosophy that young people,
            empowered to help each other, are the most effective force in
            prevention.{" "}
          </p>

          <h3 className="text-3xl text-sadd-blue font-bold">Aldo Leopold</h3>
          <p>
            Aldo Leopold was an American ecologist, conservationist, and author.
            He is best known for his book "A Sand County Almanac," published
            posthumously in 1949, which promoted the idea of a land ethic and
            helped shape modern conservation and environmental ethics.{" "}
          </p>

          <h3 className="text-3xl text-sadd-blue font-bold">David Brower</h3>
          <p>
            David Brower was an American environmentalist and the first
            executive director of the Sierra Club. He played a key role in the
            campaigns to establish several national parks and wilderness areas
            in the United States, and later founded the environmental advocacy
            organization Earth Island Institute.{" "}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default KeyFigures;
