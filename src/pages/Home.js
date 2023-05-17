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
      {confirmation && <Confirmation /> && <Background />}
      <div style={{ position: "sticky", top: "0" }}>
        <Header />
      </div>
      <div
        style={{ height: "100%", display: "flex", border: "1px solid black" }}
      >
        <div style={{ width: "66%" }}>
          <Display />
        </div>
        <div
          style={{ width: "34%", display: "flex", justifyContent: "center" }}
        >
          <Editor />
        </div>
      </div>

      {/* <div style={{border:'2px solid red', height:'400px', display:'flex'}}>
        <div style={{border:'2px solid black',width:'70%'}}></div>
        <div style={{border:'2px solid black',width:'30%', display:'flex', direction:'column'}}>
        <div style={{border:'2px solid blue',width:'70%', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <div style={{width:'500px', height:'200px', border:"2px solid green"}}></div>
        </div>
        <div style={{border:'2px solid blue',width:'30%'}}></div>
        </div>
      </div> */}
    </>
  );
};

export default Home;
