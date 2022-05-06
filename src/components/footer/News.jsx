import vector from "../../public/Vector.png";

function News() {
  return (
    <div className="font-WorkSans mb-4 ">
      <h1 className="font-bold px-20 text-white">Newsletter</h1>
      <div
        className="px-20"
        style={{
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "18px",
          lineHeight: "36px",
          color: "#7B7B7B",
          justifyItems: "center",
        }}
      >
        <p>Enter your email and get notified about news</p>
        <div
          className="
                form-control
                
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-zinc-800
                border border-solid border-gray-900
                rounded-full
                transition
                ease-in-out
                m-0 flex justify-between
              "
        >
          <input
            className="bg-zinc-800"
            type="text"
            placeholder="Your Email address"
          />

          <button className="border rounded-full bg-amber-400 w-12 h-12 flex justify-center items-center">
            <img src={vector}></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default News;
