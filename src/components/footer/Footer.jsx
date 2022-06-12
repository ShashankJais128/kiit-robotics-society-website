import React from "react";
import Text from "./Text";
import Useful from "./Useful";
import Social from "./Social";
import News from "./News";

function Footer() {
  return (
    <div style={{ background: "#1C1C1C" }} className="px-12 pt-4">
      <div className="p-4 sm:p-6 flex flex-col justify-between ">
        <Text />
        <Useful />
        <Social />
        <News />
        
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
