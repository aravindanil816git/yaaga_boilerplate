import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  height: "160px",
  color: "black",
  lineHeight: "160px",
  textAlign: "center",
  background: "#e5e5e5"
};

export default function AdCarousel() {
  return (
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>Josco</h3>
      </div>
      <div>
        <h3 style={contentStyle}>Bhima</h3>
      </div>
      <div>
        <h3 style={contentStyle}>Sunny Diamonds</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
}
