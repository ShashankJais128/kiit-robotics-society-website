import React from "react";

function ContactUs() {
  return (
    <div
      className="bg-[#111111] w-[20%]  mx-10 my-5 flex justify-center rounded-3xl h-80"
      style={{ position: "relative",alignItems:"center" }}
    >
      <div className="bg-yellow-500 w-64 h-12 rounded-3xl rounded-b"  style={{ position: "absolute", top: "0" }}></div>
      <div className="w-[96.5%] h-[97%] rounded-3xl bg-black" style={{ zIndex:"9"}}>
      </div>
      <div
        className="bg-yellow-500 w-64 h-12 rounded-3xl rounded-t"
        style={{ position: "absolute", bottom: "0" }}
      ></div>
    </div>
  );
}

export default ContactUs;
