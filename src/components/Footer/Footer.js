import React from "react";
import FeatureCard from "../Resuable/FeatureCard";
import "../../styles/main.scss"

const Footer = () => {
  return (
    <div className="features-div">
      <FeatureCard
        icon="fas fa-truck truck"
        description="We ensure quick delivery"
        heading="On-Time Delivery"
      />
      <FeatureCard
        icon="fas fa-cheese cheese"
        description="The food is prepared daily as per orders"
        heading="Fresh Food Always"
      />
      <FeatureCard
        icon="fas fa-handshake"
        description="We maintain good relationship with our Customers"
        heading="Customer Bonding"
      />
    </div>
  );
};

export default Footer;
