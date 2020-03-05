import React, { Component } from "react";
import { Room as TRoom } from "../types/room";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

type FeaturedRoomsProps = {
  rooms: TRoom[];
  loading: boolean;
};
export default class FeaturedRooms extends Component<FeaturedRoomsProps> {
  interval: any;
  state = {
    cont: 1
  };
  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.cont == 3) {
        this.setState({ cont: 1 });
      } else {
        this.setState({ cont: this.state.cont + 1 });
      }
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    console.log(this.state.cont);
    const { loading, rooms } = this.props;

    const Rooms = rooms.map(room => {
      return (
        <div className={this.state.cont === 1 ? "prue1" : ""}>
          <Room key={room.id} room={room} />
        </div>
      );
    });
    const Rooms2 = rooms.map(room => {
      return (
        <div className={this.state.cont === 2 ? "prue2" : ""}>
          <Room key={room.id} room={room} />
        </div>
      );
    });
    const Rooms3 = rooms.map(room => {
      return (
        <div className={this.state.cont === 3 ? "prue3" : ""}>
          <Room key={room.id} room={room} />
        </div>
      );
    });

    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : Rooms[0]}
          {loading ? <Loading /> : Rooms2[1]}
          {loading ? <Loading /> : Rooms3[2]}
        </div>
      </section>
    );
  }
}
