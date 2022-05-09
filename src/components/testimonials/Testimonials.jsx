import TestCard from "./TestCard";

function Testimonials() {
  return (
    <div className="bg-cover bg-[url('C:\Users\KIIT\OneDrive\Desktop\KRS_WEB\kiit-robotics-society-website\src\public\dronebackground.jpg')] py-5">
      <section className=" text-gray-700 m-14">
        <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto  py-6">
        <button className="p-2 rounded-full bg-zinc-800
                border border-solid border-zinc-800">
        <h1 className="text-center font-poppins text-xl font-bold text-amber-400">
        TESTIMONIALS </h1>
        </button>
        
          <p className="font-WorkSans text-2xl text-white pt-3">
          What ❤️️KIITians say ️
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-12 text-center m-8">
          <TestCard />
          <TestCard />
          <TestCard />
        </div>
      </section>
    </div>
  );
}

export default Testimonials;