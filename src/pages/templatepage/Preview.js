import { RxCross1 } from "react-icons/rx";
import Preview_template from "../../components/preview_template";
import { RiPencilFill } from "react-icons/ri";

function Preview(props) {
  return <div>
    <div className="preview_background"
      onClick={() => {
        {props.setShowVal(true)};
        {props.setPreview(false)};
      }}
    >
      <div>
        <div
          style={{
            height: "35px",
            background: "rgb(244, 245, 245)",
          }}
        >
          <RxCross1
            style={{
              marginTop: "9px",
              marginRight: "14px",
              cursor: "pointer",
              marginLeft: "574px",
            }}
            nClick={() => {
              {props.setShowVal(true)};
              {props.setPreview(false)};
            }}
          />
        </div>
        <div
          style={{
            height: "400px",
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          <Preview_template />
        </div>
        <div
          style={{
            height: "55px",
            background: "rgb(244, 245, 245)",
            gap: "15px",
          }}
        >
          <div style={{ display: "flex", gap: "15px", marginLeft: "405px" }}>
            <button className="previewCloseBtn"
              onClick={() => {
                {props.setShowVal(true)};
                {props.setPreview(false)};
              }}
            >
              <p style={{ color: "#343435", fontSize: "14px" }}>Close</p>
            </button>
            <div
            className="previewEditBtn"
              // to="/template"                     
              onClick={() => {
                {props.editClickHandler(props.previewIndex)};
              }}
            >
              <RiPencilFill style={{ marginRight: "4px", color: "#343435" }} />
              <p style={{ color: "#343435", fontSize: "14px" }}>Edit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}
export default Preview;
