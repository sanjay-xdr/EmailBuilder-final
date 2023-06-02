import { colors } from "@mui/material";
import new_file_icon from "../Images/file_copy.svg";
import template1 from "../Images/image 359.svg";
import template2 from "../Images/image 360.svg";
import template3 from "../Images/image 361.svg";
import { RiSendPlaneFill } from "react-icons/ri";
import { AiFillEye } from "react-icons/ai";
import { ImFilesEmpty } from "react-icons/im";
import { AiOutlinePlus } from "react-icons/ai";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Contentcontext } from "../context/Context";
import Template from "../components/Template";

export default function Templatepage() {
  const [value, setvalue] = useState(false);
  const [indexVal, setIndexVal] = useState(-1);
  const [preview, setPreview] = useState(false);

  const { setArr, setShowVal } = useContext(Contentcontext);

  const editClickHandler = (index) => {
    setArr([]);
    setArr(pre_template[index]);
  };
  const previewClickHandler = (index) => {
    setShowVal(false);
    setPreview(true);
    setArr([]);
    setArr(pre_template[index]);
  };
  const arr = [
    {
      name: "Cricket Tournament",
      image: template1,
    },
    {
      name: "Win Announcement",
      image: template2,
    },
    {
      name: "Onboarding",
      image: template3,
    },
  ];

  const pre_template = [
    [
      {
        id: "d0bf15a2-a7c0-4ccf-b360-62720989acf5",
        component: "Image",
        componentValue:
          "https://udqpsjhnskuytmiteqwd.supabase.co/storage/v1/object/public/Demo//Cricket Tournament.png  61a7b472-6a8a-4ef0-a1e7-6831d6121ba1",
        imgName: "Cricket Tournament.png",
      },
      {
        id: "4414ce16-cc38-4137-909a-681755184510",
        component: "Content",
        componentValue:
          '<p><strong style="font-size: 30px;">Outdoor Cricket Tournament</strong></p>',
      },
      {
        id: "57933f44-f3b3-4bd3-a4db-bf6b9e793cdb",
        component: "Content",
        componentValue:
          "<p>Hello All,</p><br><p>Here is the next CG Infinity Outdoor Cricket Tournament.</p><p>As most of you must have seen poll for nominations who want to join us on 11th March for which we received around 45 nominations. There is still a chance if you want to participate please let us know.</p><p>As per the nominations, we have attached a sheet of players who all are coming to play with us. You can directly approach them to form a team.</p><p>A team can have 11 players but minimum should be 10 players including 2 female players mandatory. 11th player will most probably be super sub. Please send your team names by 3rd March.</p><p>Once your team is ready, share your nominations at ‘mankirat.singh@cginfinity.com’ with the following details.</p><p><br></p><p>Team Name</p><p>Captain’s Name</p><p>Jersey Colour</p><p>Names of all the Team Members. (Also mention if player is not from attached sheet).</p>",
      },
      {
        id: "21bf5295-ef76-48a9-b980-c12fa3a562c6",
        component: "Call to Action",
        buttonText: "Hey There",
        buttonUrl: "https://cginfinity.com/",
        buttonColor: "#002C3F",
      },
    ],
    [
      {
        id: "d0bf15a2-a7c0-4ccf-b360-62720989acf5",
        component: "Image",
        componentValue:
          "https://udqpsjhnskuytmiteqwd.supabase.co/storage/v1/object/public/Demo//image 1.png  fa034698-fc9a-4cf8-ba9f-2b4a32f989d8",
        imgName: "image 1.png",
      },
      {
        id: "ffd84843-e97c-4908-bcae-7127a9d62b88",
        component: "Content",
        componentValue:
          '<p><strong style="font-size: 30px;">Win Announcement!</strong><br></p>',
      },
      {
        id: "57933f44-f3b3-4bd3-a4db-bf6b9e793cdb",
        component: "Content",
        componentValue:
          "<p>Dear CG Team, </p><p><br></p><p>It gives me immense pleasure to announce that we won the following project and added the new team members. It gives me immense pleasure to announce that we won the following project and added the new team members.</p>",
      },
      {
        id: "21bf5295-ef76-48a9-b980-c12fa3a562c6",
        component: "Call to Action",
        buttonText: "Hey There",
        buttonUrl: "https://cginfinity.com/",
        buttonColor: "#002C3F",
      },
    ],
    [
      {
        id: "d0bf15a2-a7c0-4ccf-b360-62720989acf5",
        component: "Image",
        componentValue:
          "https://udqpsjhnskuytmiteqwd.supabase.co/storage/v1/object/public/Demo//Template 3.png  0cc54d08-f9fa-42db-bb79-ece5d11cef31",
        imgName: "Template 3.png",
      },
      {
        id: "f846178b-30db-4d33-9f31-cb73197bbce9",
        component: "Content",
        componentValue:
          '<p><strong style="font-size: 30px;">Offer Letter</strong></p>',
      },
      {
        id: "57933f44-f3b3-4bd3-a4db-bf6b9e793cdb",
        component: "Content",
        componentValue:
          "<p>Congratulations !</p><br><p>We are pleased to offer you a position of Intern at Cyber Group India Private Limited. We expect you to join us on 10th October 2022.</p><p>We request you to confirm your availability along with acceptance mail to this offer.</p><p>Your detailed Offer Letter is enclosed to this email. We all are excited and look forward to welcome you as a part of our team.</p><p>In case of any concern or query please feel free to contact us.</p>",
      },
      {
        id: "21bf5295-ef76-48a9-b980-c12fa3a562c6",
        component: "Call to Action",
        buttonText: "Hey There",
        buttonUrl: "https://cginfinity.com/",
        buttonColor: "#002C3F",
      },
    ],
  ];

  return (
    <>
      <div
        className="background-preview-wrapper"
        style={{
          display: preview ? "" : "none",
          // display: "none",
        }}
      >
        {/* <div
          className="preview-remover-div"
          style={{
            position: "fixed",
            top: 0,
            zIndex: 200,
            height: "100vh",
            width: "100vw",
            border: "4px solid green",
          }}
          onClick={() => {
            console.log("preview remover working");
          }}
        ></div> */}
        {/* <Background /> */}
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.75)",
            display: "flex",
            justifyContent: "center",
            position: "fixed",
            width: "100vw",
            height: "100%",
            zIndex: 100,
            top: 0,
            paddingTop: "30px",
            paddingBottom: "30px",
            overflow: "auto",
          }}
          onClick={() => {
            setShowVal(true);
            setPreview(false);
          }}
        >
          <div
            style={{
              // zIndex: 200,
              cursor: "pointer",
              // backgroundColor: "black",
              // border: "10px solid blue",
              height: "fit-content",
              // overflow: "auto",
              padding: "50px",
            }}
          >
            <Template />
          </div>
        </div>
      </div>
      <div>
        <div className="card">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "30px",
              gap: "24px",
              height: "24",
              fontWeight: "bold",
              color: "#343435",
            }}
          >
            <h1>Template</h1>
          </div>

          <div style={{ display: "flex" }}>
            <div
              className="card-body"
              style={{
                width: "270px",
                height: "285px",
                left: "0px",
                top: "0px",
                background: "#FFFFFF",
                boxShadow: "0px 2px 10px rgba(34, 62, 73, 0.1)",
                marginLeft: "30px",
                padding: "15px 15px",
              }}
            >
              <div
                style={{
                  boxSizing: "border-box",
                  width: "268px",
                  height: "284px",
                  Left: "12px",
                  top: "12px",
                  border: "1px dashed #E9ECEB",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Link
                  to="/template"
                  className="card-body_inner"
                  style={{
                    height: "137px",
                    left: "0px",
                    top: "0px",
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setArr([]);
                  }}
                >
                  <img
                    src={new_file_icon}
                    style={{ padding: "15px" }}
                    alt="icon"
                  />

                  <button
                    style={{
                      width: "191px",
                      gap: "8px",
                      cursor: "pointer",
                      background: "#FFB81C",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "40px",
                      boxShadow: "0px 2px 10px rgba(34, 62, 73, 0.1)",
                      borderRadius: "4px",
                      fontSize: "14px",
                      lineHeight: "16px",
                      fontWeight: "600",
                      paddingRight: "12px",
                      border: "none",
                      backgroundColor: "#FFB81C",
                      opacity: "1",
                    }}
                  >
                    <AiOutlinePlus />
                    <p style={{ color: "#343435" }}>Create New Template</p>
                  </button>
                </Link>
              </div>
            </div>

            <div style={{ display: "flex" }}>
              {arr.map((data, index) => (
                <div key={index}>
                  <div
                    className="card-body"
                    style={{
                      width: "270px",
                      height: "285px",
                      left: "0px",
                      top: "0px",
                      background: "#FFFFFF",
                      boxShadow: "0px 2px 10px rgba(34, 62, 73, 0.1)",
                      marginLeft: "30px",
                      padding: "15px 15px",
                      position: "relative",
                      // zIndex: "1",
                    }}
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
                        <div
                          style={{
                            width: "300px",
                            height: "218px",
                            display: "flex",
                            flexDirection: "column",
                            position: "absolute",
                            alignItems: "center",
                            paddingTop: "95px",
                            marginLeft: "55px",
                            // opacity: "0.5",
                            backgroundColor: "rgb(0,0,0, 0.5)",
                            right: "0px",
                            top: "0px",
                            zIndex: "1",
                          }}
                        >
                          <Link
                            to="/template"
                            style={{
                              display: "flex",
                              width: "116px",
                              cursor: "pointer",
                              justifyContent: "center",
                              alignItems: "center",
                              height: "40px",
                              boxShadow: "0px 2px 10px rgba(34, 62, 73, 0.1)",
                              borderRadius: "4px",
                              fontSize: "14px",
                              lineHeight: "16px",
                              fontWeight: "600",
                              paddingRight: "12px",
                              border: "none",
                              backgroundColor: "#FFB81C",
                              opacity: "1",
                            }}
                            onClick={() => editClickHandler(index)}
                          >
                            <RiSendPlaneFill
                              style={{ marginRight: "4px", color: "#343435" }}
                            />
                            <p style={{ color: "#343435", fontSize: "14px" }}>
                              Edit
                            </p>
                          </Link>

                          <button
                            style={{
                              display: "flex",
                              width: "130px",
                              cursor: "pointer",
                              justifyContent: "center",
                              alignItems: "center",
                              height: "40px",
                              boxShadow: "0px 2px 10px rgba(34, 62, 73, 0.1)",
                              borderRadius: "4px",
                              fontSize: "14px",
                              lineHeight: "16px",
                              fontWeight: "600",
                              paddingRight: "12px",
                              // border: "none",
                              backgroundColor: "#FFFFFF",
                              opacity: "1",
                              marginTop: "11px",
                              border: "1px solid #343435",
                            }}
                            onClick={() => {
                              previewClickHandler(index);
                            }}
                          >
                            <AiFillEye
                              style={{ marginRight: "4px", color: "#343435" }}
                            />
                            <p style={{ color: "#343435", fontSize: "14px" }}>
                              Preview
                            </p>
                          </button>
                        </div>
                      </div>
                    )}
                    <div
                      style={{
                        boxSizing: "border-box",
                        width: "268px",
                        height: "284px",
                      }}
                    >
                      <img
                        src={data.image}
                        style={{
                          width: "268px",
                          height: "284px",
                          position: "absolute",
                        }}
                        alt="template"
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      width: "300px",
                      height: "55px",
                      top: "254px",
                      background: "#343435",
                      marginLeft: "31px",
                      position: "relative",
                      right: "1px",
                      top: "-71px",
                      zIndex: "5",
                    }}
                  >
                    <p
                      style={{
                        color: "#FFFFFF",
                        padding: "15px",
                        fontWeight: "600",
                      }}
                    >
                      {data.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="continue-button-wrapper"
            style={{
              fontSize: "18px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "30px",
              gap: "24px",
              height: "24",
              fontWeight: "600",
              color: "74d1ea",
            }}
          >
            <Link to="/template">continue where you left {"->"}</Link>
          </div>
        </div>
      </div>
    </>
  );
}
