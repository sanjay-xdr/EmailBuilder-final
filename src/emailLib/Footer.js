import React from "react";

export default function Footer() {
  return (
    <div>


      <table
        align="center"
        style={{
          textAlign: "center",
          minWidth: "600px",
          backgroundColor: "#1E1E1E",
          verticalAlign:"top"
     
        }}
        width="600"
      >
        <tbody>
          <tr>
            <td width="600" align="center" style={{width:"600px",verticalAlign:"top"}}>
              <div
                style={{
                  color: "#ffffff",
                  alignContent: "center",
                }}
              >
                <div style={{ marginTop: "20px", marginBottom: "16px" }}>
                  <a
                    href="https://www.linkedin.com/company/cginfinity"
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: "inline-block" }}
                  >
                    <img
                      src="https://udqpsjhnskuytmiteqwd.supabase.co/storage/v1/object/public/Demo/linkedin.png"
                      alt="LinkedIn Icon"
                      style={{ width: "32px" }}
                    />
                  </a>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <a
                    href="https://www.youtube.com/CGInfinityInc"
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: "inline-block" }}
                  >
                    <img
                      src="https://udqpsjhnskuytmiteqwd.supabase.co/storage/v1/object/public/Demo/youtube.png"
                      alt="Youtube Icon"
                      style={{ width: "32px" }}
                    />
                  </a>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <a
                    href="https://www.facebook.com/cginfinityinc/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: "inline-block" }}
                  >
                    <img
                      src="https://udqpsjhnskuytmiteqwd.supabase.co/storage/v1/object/public/Demo/facebook.png"
                      alt="Facebook Icon"
                      style={{ width: "32px" }}
                    />
                  </a>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <a
                    href="https://www.instagram.com/cginfinityinc/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: "inline-block" }}
                  >
                    <img
                      src="https://udqpsjhnskuytmiteqwd.supabase.co/storage/v1/object/public/Demo/instagram%20(1).png"
                      alt="Facebook Icon"
                      style={{ width: "32px" }}
                    />
                  </a>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <a
                    href="https://twitter.com/cginfinityinc"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://udqpsjhnskuytmiteqwd.supabase.co/storage/v1/object/public/Demo/twitter.png"
                      alt="Twitter Icon"
                      style={{ width: "32px" }}
                    />
                  </a>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div>
                  <a
                    href="https://cginfinity.com/"
                    style={{
                      textDecoration: "none",
                      fontSize: "16px",
                      marginTop: 0,
                      display: "block",
                      color: "#ffffff",
                      fontWeight: 400,
                      marginBottom: "8px",
                      letterSpacing: 0.5,
                    }}
                  >
                    www.cginfinity.com
                  </a>
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <span
                    style={{
                      marginTop: 0,
                      marginBottom: 0,
                      fontFamily: "Helvetica, Arial, sans-serif",
                      fontWeight: 400,
                      fontSize: "14px",
                      textDecoration: "none",
                      color: "#ffffff",
                      letterSpacing: 1,
                    }}
                  >
                    © 2023 CG Infinity. All rights reserved
                  </span>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

     
    </div>
  );
}
