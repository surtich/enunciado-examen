import React, { Component } from "react";

export type RoomProviderState = {
  greeting: string;
  name: string;
};

const RoomProviderStateInitialState = {
  greeting: "",
  name: ""
};

const RoomContext = React.createContext<RoomProviderState>(
  RoomProviderStateInitialState
);

class RoomProvider extends Component<{}, RoomProviderState> {
  state = {
    greeting: "hello",
    name: "john"
  };
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
