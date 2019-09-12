import React, { Component } from "react";
import { RoomContext, RoomProviderState } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";
export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    const { loading, featuredRooms: rooms } = this.context as RoomProviderState;

    const Rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : Rooms}
        </div>
      </section>
    );
  }
}
