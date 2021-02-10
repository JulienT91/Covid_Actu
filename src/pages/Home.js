import React from "react";
import CovidCount from "../components/TryApi";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <CovidCount />
    </div>
  );
};

export default Home;
