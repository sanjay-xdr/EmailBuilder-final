/*global chrome*/
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Verification from "./pages/Verification";
import ForgotPassword from "./pages/ForgotPassword";
import { Route, Routes } from "react-router-dom";
import CreateNewPassword from "./pages/CreateNewPassword";

function App() {
  
// console.log(browser.downloads.showDefaultFolder());
  // chrome.downloads.onChanged.addListener(function (detail){
  //   console.log("Detail",detail); //Save log for debugging
    
  //       //if file download finished
  //      if(detail.state.current == "complete"){
    
  //          var downloadId = detail.id; //Download ID
    
  //          console.log("Download ID",downloadId); //Save log for debugging
  //          /*
  //          Do Something
  //           */
    
  //      }
  //   });


  return (
    <>
    

    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/newpassword" element={<CreateNewPassword />} />
    </Routes>


    </>

    

  );
}

export default App;
