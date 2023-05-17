import { Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { Contentcontext } from "../../context/Context";
import ImageIcon from "../../Images/ImageIcon.svg";
import { AiFillDelete } from "react-icons/ai";
import { RiDragMove2Line } from "react-icons/ri";
import { MdModeEditOutline } from "react-icons/md";

const Images = ({ indexVal, item, imgsrc, id, imgName }) => {
  const [imgWidth, setImgWidth] = useState();
  const getMeta = (url, getWidth) => {
    const img = new Image();
    img.onload = () => getWidth(null, img);
    img.onerror = (err) => getWidth(err);
    img.src = url;
  };

  getMeta(imgsrc, (err, img) => {
    // console.log(img.naturalWidth);
    setImgWidth(img.naturalWidth);
  });
  const [show, setShow] = useState(true);
  // const [showBtn, setShowBtn] = useState(false);
  const {
    setEditorBtn,
    setFormatting,
    arr,
    setArr,
    indVal,
    setId,
    setIndVal,
    selectedComponent,
    setSelectedComponent,
    showVal,
  } = useContext(Contentcontext);

  return (
    <div
      style={{
        position: "relative",
        boxSizing: "border-box",
        // width: "600px",
        // margin: "auto",
        // backgroundColor: "#ffffff",
        // border:"1px solid red"
        // border: show && "2px solid #74D1EA",
      }}
      onDragOver={(e) => {
        e.preventDefault();
        // console.log(indexVal);
      }}
      onDragEnter={() => {
        // setIndVal(indexVal);
        setShow(true);
        // console.log("dragenter of image");
        // console.log(indVal);
      }}
      onDragLeave={() => {
        // setIndVal(-1);
        setShow(false);
        // console.log("dragleave of Image");
        // console.log(indVal);
      }}
      onDrop={() => {
        // console.log("rop of image");
        let temp = [...arr];
        temp.splice(indVal, 1);
        setArr(temp);
        temp.splice(indexVal, 0, selectedComponent);
        setArr(temp);
        // console.log(arr);
      }}
      // draggable

      onMouseEnter={() => {
        setShow(true);
        console.log("Enterrring");
      }}
      onMouseLeave={() => {
        setIndVal(-1);
        setShow(false);
        // console.log(indVal);
      }}
    >
      {/* div for drag and drop functionality to work and to make it able to hover over the buttons as well */}{" "}
      <div
        style={{
          position: "absolute",
          width: "600px",
          left: "66px",
          height: "100%",
          zIndex: "10",
          boxSizing: "border-box",
          // border: "2px solid #74D1EA",
          backgroundColor: "transparent",
        }}
      />
      {show && showVal && (
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "100%",
            left: "66px",
            boxSizing: "border-box",
            border: "2px solid #74D1EA",
          }}
        />
      )}
      {show && showVal && (
        <div
          style={{
            position: "absolute",
            top: "2px",
            left: " 68px",
            width: "40px",
            zIndex: 1,
            color: "#FFFFFF",
            backgroundColor: "#74D1EA",
            fontSize: "14px",
            lineHeight: "16px",
            padding: "4px",
            fontWeight: "500",
          }}
        >
          Image
        </div>
      )}
      {show && showVal && (
        <div
          style={{
            position: "absolute",
            top: "2px",
            right: "68px",
            backgroundColor: "#343435",
            opacity: "80%",
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            jutifyContent: "center",
            gap: "7px",
            padding: "4px 2px",
            cursor: "pointer",
            zIndex: "11",
          }}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
              setEditorBtn("s");
              let temp = [...arr];
              temp.splice(indexVal, 1);
              setArr(temp);
            }}
          >
            <AiFillDelete size="20px" />
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation();
              setEditorBtn("f");
              setFormatting("imageformatting");
              setId(id);
            }}
          >
            <MdModeEditOutline size="20px" />
          </div>
          <div
            draggable="true"
            onDragStart={() => {
              setIndVal(indexVal);
              // console.log("dragging start");
              setSelectedComponent(item);
              // console.log(selectedComponent);
            }}
            onDragEnd={() => {
              setIndVal(-1);
              // console.log("dragging stop");
              // let temp = [...arr];
              // temp.splice(indexVal, 1);
              // setArr(temp);
            }}
          >
            <RiDragMove2Line size="21px" />
          </div>
        </div>
      )}
      {/* TODO:"Add your code here for the template" */}
      {/* <table style={{ width: "600px", maxWidth: "600px" }}>
        <tr style={{ width: "600px" }}>
          <td style={{ width: "600px" }} width="600px">
            <img
              width="600px"
              align="center"
              style={{ maxWidth: "inherit", objectFit: "contain" }}
              src={imgsrc || ImageIcon}
              alt=" icon"
            />
          </td>
        </tr>


      </table> */}
      {/* {console.log(imgWidth)} */}
      <table
        width="600px"
        style={{
          width: "600px",
          // border: "1px solid blue",
          backgroundColor: "#FFFFFF",
          textAlign: "center",
        }}
        cellPadding="0"
        cellSpacing="0"
        align="center"
      >
        <tr
          style={{
            width: "600px",
            padding: 0,
            margin: 0,
            // border: "1px solid black",
          }}
        >
          <td
            style={{
              width: "600px",
              // border: "1px solid red",
              padding: 0,
              margin: 0,
            }}
            width="600"
            align="center"
          >
                <img
                  width={imgWidth > 600 ? "600" : "auto"}
                  align="center"
                  style={{
                    maxWidth: "600px",
                    display: "block",
                    margin: 0,
                    padding: 0,
                  }}
                  src={imgsrc || ImageIcon}
                  alt=" icon"
                />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Images;
