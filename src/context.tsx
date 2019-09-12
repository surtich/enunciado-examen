import React, { Component } from "react";
import { Room } from "./types/room";
import fetch from "./utils/mockFetch";

export type RoomProviderState = {
  featuredRooms: Room[];
  loading: boolean;
};

const RoomProviderStateInitialState: RoomProviderState = {
  featuredRooms: [],
  loading: true
};

const RoomContext = React.createContext<RoomProviderState>(
  RoomProviderStateInitialState
);

class RoomProvider extends Component<{}, RoomProviderState> {
  state = RoomProviderStateInitialState;
  constructor(props: {}) {
    super(props);

    this.state = {
      featuredRooms: [],
      loading: true
    };
  }
  async componentDidMount() {
    const filter = {
      featured: true
    };
    const featuredRooms = (await fetch(
      `/rooms?filter=${JSON.stringify(filter)}`
    ).then(response => response.json())) as Room[];

    this.setState({
      featuredRooms,
      loading: false
    });
  }
  render() {
    return (
      <RoomContext.Provider value={this.state}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
