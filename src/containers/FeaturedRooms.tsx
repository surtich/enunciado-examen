import React, { Component } from "react";
import FeaturedRooms from "../components/FeaturedRooms";
import { RoomContext } from "../context";

export default class FeaturedRoomsComponent extends Component {
  static contextType = RoomContext;

  render() {
    const { loading, featuredRooms } = this.context as RoomContext;

    return <FeaturedRooms loading={loading} rooms={featuredRooms} />;
  }
}
