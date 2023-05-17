import React from "react";
import Confirmation from "./Confirmation";

const Background = () => {
  return (
    <>
    <div
      style={{
        position: "fixed",

        zIndex: "50",

        backgroundColor: "#000000",

        opacity: "0.75",

        width: "100%",

        height: "100vh",

        top: "0",

        top: "0",
      }}
    />
    <Confirmation/>
    </>
  );
};

export default Background;
