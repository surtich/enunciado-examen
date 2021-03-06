import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import RoomsContainer from "../containers/Rooms";

const Rooms = () => {
  return (
    <div data-testid="rooms-page">
      <Hero hero="hero-rooms">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </div>
  );
};

export default Rooms;
