import React, { Component } from "react";
import { Service } from "../types/service";
import ServiceComponent from "./Service";
import Slider from "./Slider";
import Title from "./Title";

const getItems = (services: Service[]) =>
  services.map(service => <ServiceComponent service={service} />);

export default class Services extends Component<{
  services: Service[];
}> {
  render() {
    const { services } = this.props;
    return (
      <section className="services">
        <Title title="services" />
        <Slider size={4} items={getItems(services)} />
      </section>
    );
  }
}
