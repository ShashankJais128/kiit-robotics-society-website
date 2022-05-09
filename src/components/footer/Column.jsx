import Useful from "./Useful";
import Social from "./Social";
import News from "./News";

function Column() {
  return (
    <div className="flex justify-center md:justify-between">
     <Useful />
     <Social />
     <News />
    </div>
  );
}

export default Column;
