import React, { Component } from "react";
import { RoomContext, RoomProviderState } from "../context";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const { name, greeting } = this.context as RoomProviderState;
    return (
      <div>
        {greeting} {name} from featured rooms
      </div>
    );
  }
}
