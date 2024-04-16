import React from "react";

const ContainerApp = (props) => {
  return <div className="max-w-[1240px] mx-auto">{props.children}</div>;
};

export default ContainerApp;
