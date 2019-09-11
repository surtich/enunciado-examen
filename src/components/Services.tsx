import React, { Component } from "react";
import { Service } from "../types/service";
import ServiceComponent from "./Service";
import Title from "./Title";

export default class Services extends Component<{
  services: Service[];
}> {
  render() {
    const { services } = this.props;
    return (
      <section className="services">
        <Title title="services" />
        <div className="row">
          <div className="services-center">
            {services.map(service => (
              <div className="col-1-of-4" key={`item-${service.id}`}>
                <ServiceComponent service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
