import { Typography, Select, MenuItem, Grid, Button } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState, useContext } from "react";
import { Contentcontext } from "../../context/Context";
import { useEffect } from "react";

const Linkbutton = () => {


  const [url, setUrl] = useState("");
  const [fontFamily, setFontFamily] = useState("Roboto");
  const [buttonValue, setButtonValue] = useState("");
  const [btnColor, setBtnColor] = useState("")
  const changeHandler = (e) => {
    setButtonValue(e.target.value);

  };
  const urlhandler = (e) => {
    setUrl(e.target.value);
  };
  const handleChange = (event) => {
    setFontFamily(event.target.value);
  };

  const { setArr, id, arr, } = useContext(Contentcontext);

  useEffect(() => {
    arr.map(item => {
      if (item.id === id) {
        setButtonValue(item.buttonText)
        setUrl(item.buttonUrl);
        setBtnColor(item.buttonColor)
        return item;
      }
      else {
        return item
      }
    })
    
    
  }, [id])
  
  
  const saveChanges = () => {
    console.log("btnColor value", btnColor);
    let finalArray = arr.map(item => {
      console.log(item);
      if (item.id === id) {
        item.buttonText = buttonValue;
        item.buttonUrl = url;
        item.buttonColor = btnColor;
        return item;
      }
      else {
        return item
      }
    })


    console.log(finalArray, "Final Array");

    setArr(finalArray);
  }


  return (
    <Box sx={{ width: "100%" }}>

      {/* code for canging the font style of the text in the button */}

      {/* <Stack ml="8px" mb="32px" direction="row" alignItems="center">
        <Typography ml="24px" mr="16px" variant="body1">
          Font Family:
        </Typography>
        <Select
          value={fontFamily}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{
            width: "142px",
            height: "34px",
          }}
        >
          <MenuItem value={fontFamily}>Roboto</MenuItem>
          <MenuItem value={fontFamily}>Georgia, serif</MenuItem>
          <MenuItem value={fontFamily}>sans-serif</MenuItem>
          <MenuItem value={fontFamily}>cursive</MenuItem>
        </Select>
      </Stack> */}

      {/* code for changing the background color of the button */}
      <Stack 
        style={{
          marginBottom: "29px"
        }}>
        <input type="color" value={btnColor} id="buttonColor" style={{
          marginLeft: "350px",
          width: "30px",
          height: "30px",
          // borderRadius: "4px",
          outline: "none"
        }}
          onChange={() => {
            setBtnColor(document.getElementById("buttonColor").value);
          }} />
      </Stack>

      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box
          sx={{
            width: "91.6%",
            maxWidth: "423px",
            marginBottom: "28px",
            // border: "1px solid black",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              marginBottom: "8px",
              fontSize: "16px",
              lineHeight: "19px",
            }}
          >
            Call to Action Text:
          </Typography>
          <input
            style={{
              color: "black",
              fontWeight: "bold",
              backgroundColor: "#F5F5F5",
              border: "1px solid #B2B2B2",
              width: "-webkit-fill-available",
              height: "48px",
              borderRadius: "8px",
              fontSize: "16px",
              paddingLeft: "16px",
              paddingRight: "16px",
            }}
            type="text"
            value={buttonValue}
            // onChange={(e) => {
            //   setLink(e.target.value);
            // }}
            onChange={changeHandler}
            placeholder="Click Here"
          />
        </Box>
        <Box
          sx={{
            width: "91.6%",
            maxWidth: "423px",
            marginBottom: "28px",
            // border: "1px solid black",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              marginBottom: "8px",
              fontSize: "16px",
              lineHeight: "19px",
            }}
          >
            Link:
          </Typography>
          <input
            style={{
              color: "black",
              fontWeight: "bold",
              backgroundColor: "#F5F5F5",
              border: "1px solid #B2B2B2",
              width: "-webkit-fill-available",
              height: "48px",
              borderRadius: "8px",
              fontSize: "16px",
              paddingLeft: "16px",
              paddingRight: "16px",
            }}
            type="text"
            value={url}
            onChange={urlhandler}
            placeholder="https://example.example.com"
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          width: "91.55%",
          justifyContent: "right",
          margin: "auto",
          // border: "1px solid red",
        }}
      >
        {/* <button
          variant="outlined"
          style={{
            color: "black",
            fontWeight: "bold",
            padding: "4px 16px",
            background: "none",
            border: "1px solid black",
            borderRadius: "4px",
            fontSize: "14px",
            lineHeight: "32px",
          }}
        >
          Cancel
        </button> */}
        <button
          // href="#contained-buttons"
          onClick={saveChanges}
          style={{
            backgroundColor: "#FFB81C",
            color: "black",
            fontWeight: "bold",
            padding: "4px 22px",
            border: "none",
            borderRadius: "4px",
            fontSize: "14px",
            lineHeight: "32px",
          }}
        >
          Save
        </button>
      </Box>
    </Box>
  );
};

export default Linkbutton;


