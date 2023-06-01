import React, { useContext } from "react";
import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Tt from "../Images/Tt.svg";
import Landscape from "../Images/Landscape.svg";
import Calltoaction from "../Images/Calltoaction.svg";
import { Contentcontext } from "../context/Context";
import Content from "./TemplateComponents/Content";
import CallToAction from "./TemplateComponents/CallToAction";
import Images from "./TemplateComponents/Images";
import { useEmailTemplate } from "../context/email-template";
import { v4 } from "uuid";

const Structure = () => {
  const { arr, setArr, data } = useContext(Contentcontext);

  const onClickHandler = (e) => {
    const val = e.currentTarget.innerText;
    console.log(val.length, " I am the value")
    let finalvalue = val.trim()
    console.log(finalvalue.length, "This is the final value")
    if (finalvalue === "Content") {
      setArr([...arr, { id: v4(), component: finalvalue, componentValue: data }]);

    } else if (finalvalue === "Image") {
      setArr([
        ...arr,
        {
          id: v4(),
          component: finalvalue,
          componentValue:
            "https://firebasestorage.googleapis.com/v0/b/email-builder-demo-1e3fd.appspot.com/o/images%2Fimage%20(3).pngemailBuilder?alt=media&token=fb0b5c37-1e2d-4e07-b000-23a6de980e6a",
          imgName: "Image",
          isUploaded:true,
          imgBtnUrl:"https://www.youtube.com/",
          disableUrl: true,
        },
      ]);
    } else {
      setArr([
        ...arr,
        {
          id: v4(),
          component: finalvalue,
          buttonText: "Hey There",
          buttonUrl: "https://cginfinity.com/",
          buttonColor:"#002C3F"
        },
      ]);
    }
  };

  const getDraggables = (text, textimg) => {
    return (
      // ondrag start put the cursor to grabbing and release it onDragDrop
      <div draggable onClick={onClickHandler} style={{ width: "84.55%" }}>
        <Box
          draggable="true"
          sx={{
            borderRadius: "4px",
            height: "52px",
            width: "100%",
            display: "flex",
            border: "1px solid #E9ECEB",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <img
            style={{ marginLeft: "16px", marginRight: "16px" }}
            src={textimg}
            alt=""
          />
          <Typography>{text}</Typography>
        </Box>
      </div>
    );
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "",
        gap: "12px",
      }}
    >
      {getDraggables("Content", { Tt }.Tt)}
      {getDraggables("Image", { Landscape }.Landscape)}
      {getDraggables("Call to Action", { Calltoaction }.Calltoaction)}
    </Box>
  );
};

export default Structure;
