import React, { useState } from "react";
import Questions from "./Questions";

function Form({onsubmit}) {
  const [showForm, setFormStatus] = useState(false);

  const viewData = () => setFormStatus(true);
  return (
    <div className="flex justify-center items-center border-r-2 h-96 border-yellow-500" style={{width:"60%"}}>
      {!showForm && (
        <div>
          <text className="text-yellow-500 font-bold text-7xl underline underline-offset-4 decoration-stone-200">
            Hello!
          </text>

          <div className="flex justify-center mt-10">
            <a href="#Questions">
              <button
                className="bg-blue-800 hover:bg-blue-900 text-white py-2 px-4 rounded font-semibold  mr-5"
                onClick={viewData}
              >
                Register Yourselves!
              </button>
            </a>

            <text className="text-white flex justify-center items-center">
              <div>
                {" "}
                press <text className="font-bold text-xl ">Enter</text>
              </div>
              <div>
                <svg
                  width="45"
                  height="35"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33 13V33H13"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 29L13 33L17 37"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </text>
          </div>
        </div>
      )}
      {showForm && <Questions onsubmit={onsubmit} />}
    </div>
  );
}

export default Form;
