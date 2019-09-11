import React from "react";
import { Service } from "../types/service";

const ServiceComponent = ({ service }: { service: Service }) => (
  <article className="service" data-testid="service">
    <span>{service.icon}</span>
    <h6>{service.title}</h6>
    <p>{service.info}</p>
  </article>
);

export default ServiceComponent;
