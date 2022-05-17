import { useState } from "react";

import Link from "next/link";

import { RightOutlined } from "@ant-design/icons";

export const Next = ({ primary, title, subtitle, href }) => {
  const [isHovered, setIsHovered] = useState(false);

  const style = primary ? styles.primaryContainer : styles.container;
  const hoverStyle = primary
    ? styles.primaryHoveredContainer
    : styles.hoveredContainer;

  return (
    <Link href={href}>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          ...style,
          ...(isHovered ? hoverStyle : {}),
        }}
      >
        <div style={{ fontSize: "18px" }}>{title}</div>
        <div>{subtitle}</div>

        <RightOutlined
          style={{
            position: "absolute",
            right: "16px",
            top: "calc(42px - 7px)",
          }}
        />
      </div>
    </Link>
  );
};

const styles = {
  primaryContainer: {
    background: "#1890ff",
    color: "white",
    cursor: "pointer",
    padding: 16,
    position: "relative",
    borderRadius: 4,
    transition: "all .33s ease",
    WebkitTransition: "all .33s ease",
    MozTransition: "all .33s ease",
  },
  primaryHoveredContainer: {
    background: "#40a9ff",
  },
  container: {
    border: "1px solid #1890ff",
    color: "#1890ff",
    cursor: "pointer",
    padding: 16,
    position: "relative",
    borderRadius: 4,
    transition: "all .33s ease",
    WebkitTransition: "all .33s ease",
    MozTransition: "all .33s ease",
  },
  hoveredContainer: {
    border: "1px solid #40a9ff",
    color: "#40a9ff",
    background: "#e6f7ff",
  },
};

export default function component() {
  return <></>;
}
