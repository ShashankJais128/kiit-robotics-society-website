function FlipCard(props) {
  return (
    <div class="flip-card flex justify-center items-center">
      <div class="flip-card-inner">
        <div class="flip-card-front border-2 border-yellow-500 rounded-2xl ">
          <img
            className="rounded-2xl p-5 w-[70%] h-[80%] m-auto"
            src={props.img}
          ></img>
          <div className="text-3xl text-white">{props.title}</div>
        </div>
        <div class="flip-card-back border-8 border-black border-double bg-yellow-500 rounded-2xl">
          <h1>{props.title}</h1>
          <p>{props.desc}</p>
          <p>We love that guy</p>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
