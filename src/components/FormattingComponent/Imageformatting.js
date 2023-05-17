import React, { useState, useContext, useEffect } from "react";
// import axios from "axios";
import { Box } from "@mui/system";
import { Button, Stack, Grid, Typography } from "@mui/material";
import { FiUploadCloud } from "react-icons/fi";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../config/firebase";
import { Contentcontext } from "../../context/Context";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import UploadIcon from "@mui/icons-material/Upload";
import { v4 as uuidv4 } from "uuid";

const Imageformatting = () => {
  const [link, setLink] = useState("");
  const [imgTitle, setImgTitle] = useState("");
  const supabase = useSupabaseClient();
  const user = useUser();

  const { arr, setArr, id } = useContext(Contentcontext);

  useEffect(() => {
    arr.map((item) => {
      console.log(item);
      if (item.id === id) {
        setImgTitle(item.imgName);
        if(!item.isUploaded){
          setLink(item.componentValue)
        }
     else{
      setLink("")
     }
        // return item;
      }
    });
  }, [id]);

  async function getImages(name, localName) {
    console.log(name);
    const { data, error } = await supabase.storage.from("Demo").list();

    if (data !== null) {
      console.log(data);

      let url = `https://udqpsjhnskuytmiteqwd.supabase.co/storage/v1/object/public/Demo/${name}`;
      let finalArray = arr.map((item) => {
        if (item.id === id) {
          item.componentValue = url;
          item.imgName = localName;
          item.isUploaded=true;
          setImgTitle(item.imgName);
          // setLink(item.componentValue)
          return item;
        } else {
          return item;
        }
      });
      setArr(finalArray);
    } else {
      console.log("Error");
    }
  }
  const upoloadImage = async (e) => {
    let file = e.target.files[0];
    // console.log("Uploading Image......");
    // console.log(data);
    // if (data == null) {
    //   console.log("not able to upload it");
    //   return;
    // }

    // const imageRef = ref(storage, `images/${data.target.files[0].name}`);
    // console.log("Trying to upload it");
    // uploadBytes(imageRef, data.target.files[0]).then((snapshot) => {
    //   getDownloadURL(snapshot.ref).then((url) => {
    //     console.log("I am here");
    //     let finalArray = arr.map((item) => {
    //       if (item.id === id) {
    //         item.componentValue = url;
    //         item.imgName = data.target.files[0].name;
    //         setImgTitle(item.imgName);
    //         return item;
    //       } else {
    //         return item;
    //       }
    //     });
    //     setArr(finalArray);

    //     console.log(url);
    //   });
    // });
    console.log("trying to upload images", file);
    const str = `/${e.target.files[0].name}  ${uuidv4()}`;
    const { data, error } = await supabase.storage
      .from("Demo")
      // .upload(`/${e.target.files[0].name}  ${uuidv4()}`, e.target.files[0]);
      .upload(str, e.target.files[0]);
    if (data) {
      getImages(str, e.target.files[0].name);
    } else {
      console.log("Error", error);
    }
  };

  const handleChange = (e) => {
    upoloadImage(e);
  };
  // getImages("b9afd24d812a6d61769845416f139efcd6042914.jpeg")

  // const  getSomething= async ()=>{
  //   const { publicURL, error } = await supabase.storage.from('public-bucket').getPublicUrl('b9afd24d812a6d61769845416f139efcd6042914.jpeg')
  //   console.log(publicURL);
  // }
  // getSomething();

  return (
    <Box
      sx={{
        marginLeft: "32px",
        width: "100%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // border: "1px solid black",
      }}
    >
      <button
        // component="label"
        style={{
          color: "black",
          fontWeight: "bold",
          backgroundColor: "#E9ECEB",
          border: "1px solid #B2B2B2",
          width: "81.6%",
          height: "48px",
          borderRadius: "4px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "14px",
        }}
      >
        <label
          htmlFor="upload-button"
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* <FiUploadCloud size="24px" style={{ marginRight: "8px" }} /> */}
          <UploadIcon />
          {imgTitle === "Image" ? "Upload Image" : imgTitle}
          <input
            type="file"
            id="upload-button"
            style={{ display: "none" }}
            onChange={(e) => handleChange(e)}
          />
        </label>
      </button>
      <Box
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          marginTop: "24px",
          marginBottom: "24px",
          width: "100%",
          // border: "1px solid red",
        }}
      >
        OR
      </Box>
      <Box sx={{ width: "81.6%", marginBottom: "28px" }}>
        <Typography
          sx={{
            fontWeight: "bold",
            marginBottom: "8px",
            fontSize: "16px",
            lineHeight: "19px",
          }}
        >
          Image Link:
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
          value={link}
          onChange={(e) => {
            let finalArray = arr.map((item) => {
              if (item.id === id) {
                item.componentValue = e.target.value;
                item.isUploaded=false;
                setLink(item.componentValue);
                return item;
              } else {
                return item;
              }
            });
            setArr(finalArray);
          }}
          placeholder="https://imagelinkexample.example.com"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          width: "91.55%",
          justifyContent: "right",
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
        {/* <button
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
        </button> */}
      </Box>
    </Box>
  );
};

export default Imageformatting;
