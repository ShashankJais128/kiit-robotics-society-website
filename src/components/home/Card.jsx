import event from "../../public/event.jpg";

function Card() {
    return (
      <div>
        <div class="max-w-sm box-border bg-black border-4 border-solid border-amber-400  rounded-3xl">
          <div>
            <img src={event} className="rounded-lg px-14 pt-8" />
          </div>
          <div class="p-5">
            <h1 className="text-center font-poppins text-2xl font-bold py-2 text-amber-400">
              PRADARSHANA 1.0
            </h1>
            <p class="mb-3 font-WorkSans text-white text-justify px-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
              veniam reprehenderit aperiam autem, placeat labore quod voluptates
              quas vitae earum ratione perspiciatis eius voluptas excepturi
              praesentium vel dolore neque veritatis?\
            </p>
          </div>
          <button
            type="button"
            class=" flex items-center justify-center w-full px-6 py-4 bg-amber-400 text-black font-WorkSans text-2xl font-bold rounded-b-2xl hover:bg-amber-600 "
          >
            REGISTER
          </button>
        </div>
      </div>
    );
  }

  export default Card