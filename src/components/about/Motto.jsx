import letter from "../../public/letter.png";
import lightbulb from "../../public/lightbulb.png";
import target from "../../public/target.png";
import hand from "../../public/hand.png";


const AboutUsData = [
  {
    description:
      "THE CONCEPT AND CREATION OF MANUAL AND AUTONOMOUS MACHINES DATED WAY BACK TO THE EARLY CENTURIES. HOWEVER CREDIBLE RESEARCH INTO THE EFFECTIVE FUNCTIONALITY AND POTENTIAL USAGE OF THESE MACHINES DID NOT GROW SUBSTANTIALLY UNTIL ",
    img: lightbulb,
  },
  {
    description:
      "THE CONCEPT AND CREATION OF MANUAL AND AUTONOMOUS MACHINES DATED WAY BACK TO THE EARLY CENTURIES. HOWEVER CREDIBLE RESEARCH INTO THE EFFECTIVE FUNCTIONALITY AND POTENTIAL USAGE OF THESE MACHINES DID NOT GROW SUBSTANTIALLY UNTIL ",
    img: letter,
  },
  {
    description:
      "THE CONCEPT AND CREATION OF MANUAL AND AUTONOMOUS MACHINES DATED WAY BACK TO THE EARLY CENTURIES. HOWEVER CREDIBLE RESEARCH INTO THE EFFECTIVE FUNCTIONALITY AND POTENTIAL USAGE OF THESE MACHINES DID NOT GROW SUBSTANTIALLY UNTIL ",
    img: target,
  },
  {
    description:
      "THE CONCEPT AND CREATION OF MANUAL AND AUTONOMOUS MACHINES DATED WAY BACK TO THE EARLY CENTURIES. HOWEVER CREDIBLE RESEARCH INTO THE EFFECTIVE FUNCTIONALITY AND POTENTIAL USAGE OF THESE MACHINES DID NOT GROW SUBSTANTIALLY UNTIL ",
    img: hand,
  },
 
];

function Motto() {
  return (
    <div>
      <div className="w-full py-5 grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 justify-items-center">
        {AboutUsData.map((data) => {
          return (
            <div className="mx-10 my-5 px-8 py-8 lg:w-[500px] lg:h-[250px] rounded-2xl border border-yellow-500 bg-[#00000070] ">
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

export default Motto;