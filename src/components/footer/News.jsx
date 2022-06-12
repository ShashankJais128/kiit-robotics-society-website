import vector from "../../public/Vector.png";

function News() {
  return (
    <div className="font-WorkSans mb-4 ">
      <div>
        <form>
          <div class="form mb-4">
            <input
              type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-zinc-800 rounded m-0"
              id="exampleInput7"
              placeholder="Name"
            />
          </div>
          <div class="form mb-4">
            <input
              type="email"
              class="fform-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-zinc-800 rounded m-0"
              id="exampleInput8"
              placeholder="Email address"
            />
          </div>
          <div class="form mb-4">
            <textarea
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-zinc-800 rounded m-0"
              id="exampleFormControlTextarea13"
              rows="3"
              placeholder="Message"
            ></textarea>
          </div>
          <div class="form-group form-check text-center mb-6"></div>
        </form>
      </div>
      <div
        className="
                form-control
                w-full
                px-3
                py-2
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
  );
}

export default News;
