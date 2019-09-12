import React, { Component } from "react";
import { Room } from "./types/room";
import fetch from "./utils/mockFetch";

export type RoomProviderState = {
  rooms: Room[];
  loading: boolean;
};

interface RoomContext {
  loading: boolean;
  getRoom: (slug: string) => Room | undefined;
  featuredRooms: Room[];
}

const RoomProviderStateInitialState: RoomProviderState = {
  rooms: [],
  loading: false
};

const RoomContext = React.createContext<RoomContext>({
  loading: false,
  getRoom: () => undefined,
  featuredRooms: []
});

const getFeaturedRooms = () => {
  const filter = {
    featured: true
  };

  return fetch<Room[]>(`/rooms?filter=${JSON.stringify(filter)}`).then(
    response => response.json()
  );
};

class RoomProvider extends Component<{}, RoomProviderState> {
  state = RoomProviderStateInitialState;

  getRoom = (slug: string) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };

  componentDidMount() {
    this.setState({
      loading: true
    });
    getFeaturedRooms().then(rooms =>
      this.setState({
        loading: false,
        rooms
      })
    );
  }
  render() {
    const { loading, rooms } = this.state;
    const featuredRooms = rooms.filter(room => room.featured === true);
    return (
      <RoomContext.Provider
        value={{
          loading,
          getRoom: this.getRoom,
          featuredRooms
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
