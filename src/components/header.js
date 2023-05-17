import CG_Logo_GoldNavy_header from "../utils/CG_Logo_GoldNavy_header.svg";
import { MdAccountCircle } from "react-icons/md";
import { AiFillCaretDown } from "react-icons/ai";

const Header = () => {
  return (
    <>
      {/* <div>Hello World</div> */}
      <div
        style={{
          backgroundColor: "#002C3F",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "64px",
        }}
      >
        <div
          style={{
            textAlign: "left",
            marginLeft: "28px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* <h1>Hello World</h1> */}
          <img src={CG_Logo_GoldNavy_header}></img>
        </div>
        <div
          style={{
            width: "54px",
            textAlign: "right",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginRight: "27px",
            color: "white",
          }}
        >
          <MdAccountCircle size="32px" />
          <AiFillCaretDown size="10px" />
        </div>
      </div>
    </>
  );
};

export default Header;
