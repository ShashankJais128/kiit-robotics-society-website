import letter from "../../public/letter.png";
import bulb from "../../public/bulb.png";
import tar from "../../public/tar.png";
import other from "../../public/other.png";

const AboutUsData = [
  {
    description:
      "THE CONCEPT AND CREATION OF MANUAL AND AUTONOMOUS MACHINES DATED WAY BACK TO THE EARLY CENTURIES. HOWEVER CREDIBLE RESEARCH INTO THE EFFECTIVE FUNCTIONALITY AND POTENTIAL USAGE OF THESE MACHINES DID NOT GROW SUBSTANTIALLY UNTIL ",
    img: bulb,
  },
  {
    description:
      "THE CONCEPT AND CREATION OF MANUAL AND AUTONOMOUS MACHINES DATED WAY BACK TO THE EARLY CENTURIES. HOWEVER CREDIBLE RESEARCH INTO THE EFFECTIVE FUNCTIONALITY AND POTENTIAL USAGE OF THESE MACHINES DID NOT GROW SUBSTANTIALLY UNTIL ",
    img: letter,
  },
  {
    description:
      "THE CONCEPT AND CREATION OF MANUAL AND AUTONOMOUS MACHINES DATED WAY BACK TO THE EARLY CENTURIES. HOWEVER CREDIBLE RESEARCH INTO THE EFFECTIVE FUNCTIONALITY AND POTENTIAL USAGE OF THESE MACHINES DID NOT GROW SUBSTANTIALLY UNTIL ",
    img: tar,
  },
  {
    description:
      "THE CONCEPT AND CREATION OF MANUAL AND AUTONOMOUS MACHINES DATED WAY BACK TO THE EARLY CENTURIES. HOWEVER CREDIBLE RESEARCH INTO THE EFFECTIVE FUNCTIONALITY AND POTENTIAL USAGE OF THESE MACHINES DID NOT GROW SUBSTANTIALLY UNTIL ",
    img: other,
  }
];

function f1() {
  return (
    <div>
      <div className="w-full py-5 grid grid-cols-2 justify-items-center ">
        {AboutUsData.map((data) => {
          return (
            <div className="mx-10 my-5 px-8 py-8 w-[500px] h-[250px] rounded-2xl border border-yellow-500 bg-[#00000070] ">
              <img className="w-[60px] h-[60px] " src={data.img} alt="" />
              <p className="text-white text-sm mx-5 my-5 text-justify">
                {data.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default f1;
