import React, { Component } from "react";
import { rooms } from "./fake-data";
import { Room, RoomFilter } from "./types/room";
import allKeysFilter from "./utils/filter";

export type LoginProviderState = {
  isLogged: boolean;
};


export type RoomProviderState = {
  rooms: Room[];
  featuredRooms: Room[];
  loading: boolean;
};

export type GetRooms = (filter: RoomFilter) => Promise<Room[]>;

export interface RoomContextProps {
  loading: boolean;
  getRoom: (slug: string) => Promise<Room | undefined>;
  filterRooms: GetRooms;
  featuredRooms: Room[];
  rooms: Room[];
  changeRoomName: (roomId: string, name: string) => void
}

export interface LoginContextProps {
  isLogged: boolean;
  doLogin: (username: string, password: string) => void;
  doLogout: () => void;
}

const InitialLoginState: LoginProviderState = {
  isLogged: false
};


const InitialRoomState: RoomProviderState = {
  rooms,
  featuredRooms: [],
  loading: false
};

const LoginContext = React.createContext<LoginContextProps>({
  isLogged: false,
  doLogin: () => undefined,
  doLogout: () => undefined,
});

class LoginProvider extends Component<{}, LoginProviderState> {
  state = InitialLoginState;

  doLogin = (username: string, password: string) => {
    if (username === "pepe" && password === "12345") {
      this.setState({ isLogged: true });
    }
  };

  doLogout = () => {
    this.setState({ isLogged: false });
  };

  render() {
    const { isLogged } = this.state;

    return (
      <LoginContext.Provider
        value={{
          isLogged,
          doLogin: this.doLogin,
          doLogout: this.doLogout,
        }}
      >
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}

const RoomContext = React.createContext<RoomContextProps>({
  loading: false,
  getRoom: async () => undefined,
  filterRooms: () => Promise.resolve([]),
  changeRoomName: () => undefined,
  featuredRooms: [],
  rooms: []
});

class RoomProvider extends Component<{}, RoomProviderState> {
  state = InitialRoomState;

  getRoom = async (slug: string) => {
    const room = this.state.rooms.find(room => room.slug === slug);
    return room;
  };

  getRooms = async (filter: RoomFilter = {}) => {
    // @ts-ignore
    return allKeysFilter(rooms, filter)
  };

  filterRooms = (filter: RoomFilter = {}) => {
    return this.getRooms(filter);
  };


  changeRoomName = (roomId: string, name: string) => {
    const rooms = this.state.rooms.map(room => {
      if (room.id !== roomId) {
        return room
      }
      return { ...room, name }
    })
    this.setState({
      rooms
    })
  }


  componentDidMount() {
    this.getRooms({ featured: true }).then(rooms =>
      this.setState({
        featuredRooms: rooms
      })
    );
  }

  render() {
    const { loading, featuredRooms, rooms } = this.state;

    return (
      <RoomContext.Provider
        value={{
          loading,
          getRoom: this.getRoom,
          filterRooms: this.filterRooms,
          featuredRooms,
          changeRoomName: this.changeRoomName,
          rooms
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

const LoginConsumer = LoginContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext, LoginProvider, LoginConsumer, LoginContext };

