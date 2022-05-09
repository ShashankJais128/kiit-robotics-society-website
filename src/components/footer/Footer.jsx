import React from "react";
import Text from "./Text";
import Column from "./Column";

function Footer() {
  return (
    <div style={{ background: "#1C1C1C" }}>
      <div className="p-4 sm:p-6 flex justify-center md:justify-start">
        <Text />
        <div >
          <Column />
        </div>
      </div>

      <h1
        className="text-amber-400 flex justify-center "
        style={{
          fontFamily: "Roboto",
          fontSize: "13px"
        }}
      >
        Copyrights Reserved @2022 | KIIT Robotics Society
      </h1>
    </div>
  );
}
export default Footer;
