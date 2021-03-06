import React, { useState } from "react";

interface ILinkProps {
  to: string;
  targetNewTab?: boolean;
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
  active?: boolean;
  textColor?: string;
  onHoverTextColor?: string;
  onActiveTextColor?: string;
  backgroundColor?: string;
  onHoverBackgroundColor?: string;
  onActiveBackgroundColor?: string;
}

export function Link({
  to,
  targetNewTab = false,
  active = false,
  textColor = "inherit",
  onHoverTextColor = "inherit",
  onActiveTextColor = "inherit",
  backgroundColor = "transparent",
  onHoverBackgroundColor = "transparent",
  onActiveBackgroundColor = "transparent",
  style = {},
  children,
  className = "",
}: ILinkProps) {
  const [action, setAction] = useState("default");

  const getTextColor = () => {
    let c = textColor;
    if (active) c = onActiveTextColor;
    if (action === "hover") c = onHoverTextColor;

    return c;
  };

  const getBgColor = () => {
    let c = backgroundColor;
    if (active) c = onActiveBackgroundColor;
    if (action === "hover") c = onHoverBackgroundColor;

    return c;
  };

  return (
    <a
      className={className}
      target={targetNewTab ? "_blank" : "_self"}
      style={{
        textDecoration: "none",
        color: getTextColor(),
        backgroundColor: getBgColor(),
        fontSize: 12,
        ...style,
      }}
      href={to}
      onMouseEnter={(e) => setAction("hover")}
      onMouseLeave={(e) => setAction("default")}
    >
      {children}
    </a>
  );
}
