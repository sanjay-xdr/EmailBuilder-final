import { colors } from "@mui/material";
import new_file_icon from "../../Images/file_copy.svg";
import { RiSendPlaneFill } from "react-icons/ri";
import { AiFillEye } from "react-icons/ai";
import { ImFilesEmpty } from "react-icons/im";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { RiPencilFill } from "react-icons/ri";
import { FcInfo } from "react-icons/fc";
import React, { useState, useContext } from "react";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import { Contentcontext } from "../../context/Context";
import Preview_template from "../../components/preview_template";
import { arr, pre_template } from "../../components/Localstoragedata";
import "./Templatepage.css";
import Preview from "./Preview"
import State from "./existingAlert"

export default function Templatepage() {
  const navigate = useNavigate();
  const [value, setvalue] = useState(false);
  const [indexVal, setIndexVal] = useState(-1);
  const [preview, setPreview] = useState(false);
  const { setArr, setarr1, setShowVal } = useContext(Contentcontext);
  const [state, setstate] = useState(false);
  const [previewIndex, setPreviewIndex] = useState();
  const data = localStorage.getItem("templateArray");
  const editClickHandler = (index) => {
    if (data !== "[]") {
      // console.log(
      //   "this is the console value",
      //   localStorage.getItem("templateArray")
      // );
      console.log("this is index value" + index);
      setArr(pre_template[index]);
      setstate(true);
    } else {
      console.log("entering");
      setArr(pre_template[index]);
      navigate("/template");
    }
  };
  const handleClick = () => {
    if (data !== "[]") {
      console.log(
        "this is the console value",
        localStorage.getItem("templateArray", value)
      );
      setArr([]);
      setstate(true);
    } else {
      setArr([]);
      navigate("/template");
    }
  };
  const previewClickHandler = (index) => {
    setShowVal(false);
    setPreview(true);
    setarr1([]);
    setarr1(pre_template[index]);
  };

  return (
    <>
      <div
        className="background-preview-wrapper"
        style={{
          display: state ? "" : "none",
        }}
      >
        <State setstate={setstate} navigate={navigate}/>    
      </div>
      <div
        className="background-preview-wrapper"
        style={{
          display: preview ? "" : "none",
        }}
      >
        <Preview setShowVal={setShowVal} setPreview={setPreview} editClickHandler={editClickHandler} previewIndex={previewIndex}/>
      </div>
      <div style={{ overflowY: "auto" }}>
        <div className="card">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="template"
            >
              <h1>Template</h1>
            </div>
            <Link
              to="/template"
              style={{ padding: "32px", marginRight: "15px" }}
            >
              <button className="Continue_where_you_left_btn"
              >
                <p style={{ color: "#FFFFFF" }}>Continue where you left</p>
                <AiOutlineArrowRight style={{ color: "#FFFFFF" }} />
              </button>
            </Link>
          </div>
          <div style={{ display: "flex" }}>
            <div className="cardDiv"
            >
              <div className="creatTemplateBoxCardBody">
                <div className="dot_box">
                  <div
                    // to="/template"
                    className="cardBody-ingBtn"
                    onClick={() => {
                      handleClick();
                    }}
                  >
                    <img
                      src={new_file_icon}
                      style={{ padding: "15px" }}
                      alt="icon"
                    />
                    <button className="newTemplateBtn">
                      <AiOutlinePlus />
                      <p style={{ color: "#343435" }}>Create New Template</p>
                    </button>
                  </div>
                </div>
              </div>
              {arr.map((data, index) => (
                <div key={index}>
                  <div
                    className="arrCardBody"
                    onMouseEnter={(e) => {
                      setIndexVal(index);
                      setvalue(true);
                    }}
                    onMouseLeave={(e) => {
                      setIndexVal(-1);
                      setvalue(false);
                    }}
                  >
                    {indexVal === index && value && (
                      <div>
                        <div className="hoverBox">
                          <div
                            className="editBtn"
                            // to="/template"
                            onClick={() => editClickHandler(index)}
                          >
                            <RiPencilFill style={{ marginRight: "4px", color: "#343435" }}
                            />
                            <p style={{ color: "#343435", fontSize: "14px" }}>
                              Edit
                            </p>
                          </div>
                          <button
                            className="previewBtn"
                            onClick={() => {
                              setPreviewIndex(index);
                              previewClickHandler(index);
                            }}
                          >
                            <AiFillEye style={{ marginRight: "4px", color: "#343435" }}
                            />
                            <p style={{ color: "#343435", fontSize: "14px" }}>
                              Preview
                            </p>
                          </button>
                        </div>
                      </div>
                    )}
                    <div className="templateImageBox">
                      <img
                        className="templateImage"
                        src={data.image}
                        alt="template"
                      />
                    </div>
                  </div>
                  <div className="templateFooter">
                    <p className="templateFooterContent">{data.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
