import React from "react";
import Form from "../components/register/Form";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import bg from "../public/bg.png";
import Info from "../components/register/Info";
import { useState } from "react";

function Register() {
  const [submit, setSubmit] = useState(false);

  const onSubmit = () => {
    console.log("going")
    setSubmit(true);}
  return (
    <div>
      <Navbar />
      <div
        className="bg-cover bg-fixed bg-black bg-bottom py-5"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${bg})`,
        }}
      >
        <div
          className="border-2 border-yellow-500 h-96 flex rounded-lg ml-14 mb-10"
          style={{ width: "90%", background: "rgba(4, 0, 0, 0.60)" }}
        >
          <div className="flex justify-start items-center">
            {!submit && <Form onsubmit={onSubmit} />}
            <Info />
            {submit && <div>SUBMITTED</div>}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Register;
