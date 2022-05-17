import React, { useEffect } from "react";

import { Row, Col } from "antd";

import SideMenu from "./SideMenu";

const DocsLayout = (props) => {
  function adjustScroll() {
    const hash = window.location.hash;
    const elem = document.getElementById(hash);
    const top = elem ? elem.getBoundingClientRect().top : 1;

    if (top <= 0 || window.innerHeight <= top) {
      // deepcode ignore OR: <please specify a reason of ignoring this>
      window.location.replace(hash);
    }
  }

  useEffect(() => {
    adjustScroll();
  });

  return (
    <Row>
      <Col xs={0} sm={4} md={6}>
        <SideMenu />
      </Col>

      <Col xs={24} sm={20} md={18}>
        {props.children}
      </Col>
    </Row>
  );
};

export default DocsLayout;
