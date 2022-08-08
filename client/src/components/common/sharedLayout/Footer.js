import { Layout } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const { Footer } = Layout;
export default () => (
  <Footer style={{ textAlign: "center" }}>
    <span>&copy; CheckIt {new Date().getFullYear()}</span>
  </Footer>
);
