import React from "react";
import Context, { Contentcontext } from "../context/Context";
import Header from "../components/header";
import Display from "../components/Display";
import Editor from "../components/Editor";
import Confirmation from "../components/Confirmation";
import Background from "../components/Background";
import { useContext } from "react";

const Home = () => {
  const { confirmation } = useContext(Contentcontext);
  console.log(confirmation);
  return (
    <>
      {confirmation  && <Background />}
      {confirmation  && <Confirmation />}
      <div style={{ height: "100%", display: "flex" }}>
        <div style={{ width: "66%" }}>
          <Display />
        </div>
        <div
          style={{ width: "34%", display: "flex", justifyContent: "center" }}
        >
          <Editor />
        </div>
      </div>
    </>
  );
};

export default Home;
