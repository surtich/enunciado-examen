import React, { Component } from "react";
import { Room as TRoom } from "../types/room";
import Loading from "./Loading";
import Room from "./Room";
import SliderFeatured from "./SliderFeatured";
import Title from "./Title";

type FeaturedRoomsProps = {
  rooms: TRoom[];
  loading: boolean;
};

export default class FeaturedRooms extends Component<FeaturedRoomsProps> {
  render() {
    const { loading, rooms } = this.props;

    const Rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : <SliderFeatured items={Rooms} />}
        </div>
      </section>
    );
  }
}
