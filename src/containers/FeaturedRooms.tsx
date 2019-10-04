import React, { Component } from "react";
import FeaturedRooms from "../components/FeaturedRooms";
import { RoomContext, RoomProviderState } from "../context";

export default class FeaturedRoomsComponent extends Component {
  static contextType = RoomContext;

  render() {
    const { loading, featuredRooms } = this.context as RoomProviderState;

    return <FeaturedRooms loading={loading} rooms={featuredRooms} />;
  }
}
