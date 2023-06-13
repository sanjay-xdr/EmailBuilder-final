import { RxCross1 } from "react-icons/rx";
import { FcInfo } from "react-icons/fc";
function State(props) {
  return (
    <div>
      <div className="existingAlertBackground">
        <div className="existingAlertBox">
          <div style={{ padding: "8px" }}>
            <RxCross1
              style={{ marginLeft: "444px", cursor: "pointer" }}
              onClick={() => {
                {props.setstate(false)};
              }}
            />
          </div>
          <div style={{ marginLeft: "211px" }}>
            <FcInfo
              style={{ width: "60px", height: "60px", alignSelf: "center" }}
            />
          </div>
          <div
            style={{
              width: "25rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
              marginBottom: "32px", // border: "1px solid black",
            }}
          >
            <div
              style={{
                fontSize: "20px",
                lineHeight: "150%",
                fontWeight: "600",
                marginBottom: "8px",
              }}
            >
              Template saved
            </div>
            <div
              style={{
                fontSize: "16px",
                lineHeight: "20px",
                textAlign: "center", //374px
                width: "23rem",
                marginBottom: "24px",
              }}
            >
              Your previous template will be overwritten and lost. Do you want
              to continue?"
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "16px",
                justifyContent: "right", // border: "1px solid green",
              }}
            >
              <button className="exestingAlertCancelBtn"
                variant="outlined"
                onClick={() => {
                  {props.setstate(false)};
                }}
              >
                Cancel
              </button>
              <button
              className="exestingAlertOkBtn"
                onClick={() => {
                  {props.setstate(false)};
                  {props.navigate("/template")};
                }}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default State;
