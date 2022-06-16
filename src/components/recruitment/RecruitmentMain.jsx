import React from "react";
import Recruit from '../../public/recruit.jpg'

const roboticsRecruit = [
  {
    name: "Shashank",
    roll: "2005405",
    year: "2nd",
  },
  {
    name: "Shashank",
    roll: "2005405",
    year: "2nd",
  },
  {
    name: "Shashank",
    roll: "2005405",
    year: "2nd",
  },
  {
    name: "Shashank",
    roll: "2005405",
    year: "2nd",
  }
];

const embeddeRecruit = [
  {
    name: "Shashank",
    roll: "2005405",
    year: "2nd",
  },
  {
    name: "Shashank",
    roll: "2005405",
    year: "2nd",
  },
];

const mlRecruit = [
  {
    name: "Shashank",
    roll: "2005405",
    year: "2nd",
  },
  {
    name: "Shashank",
    roll: "2005405",
    year: "2nd",
  },
];

const iotRecruit = [
  {
    name: "Shashank",
    roll: "2005405",
    year: "2nd",
  },
  {
    name: "Shashank",
    roll: "2005405",
    year: "2nd",
  },
];

const webdevRecruit = [
  {
    name: "Shashank",
    roll: "2005405",
    year: "2nd",
  },
  {
    name: "Shashank",
    roll: "2005405",
    year: "2nd",
  },
];

function RecruitmentMain() {
  return (
    <div className="bg-black bg-cover bg-fixed bg-top" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(${Recruit})`}}>
      <h1 className='text-center text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold pt-6 px-10 text-yellow-500'>Recruitment 2021</h1>
      {/* <hr className="mx-10 md:mx-24 mt-2 border-t-2 border-yellow-500" /> */}
      <p className="pt-4 px-4 font-semibold text-xl sm:text-xl md:text-2xl xl:text-3xl text-center text-white">We extend our heartliest welcome to all our new members!!!</p>

      <div className="py-16 mx-10 md:mx-14 lg:mx-28 px-5 md:px-20 lg:px-24">
        {/* robotics */}
        <h2 className="font-bold text-2xl pt-8 pb-2 text-yellow-500">Robotics</h2>
        <table className="w-full table-auto">
          <thead className="text-lg">
            <tr className="text-white">
              <th className="text-left ">Name</th>
              <th className="text-left">Roll</th>
              <th className="text-left">Year</th>
            </tr>
          </thead>
          <tbody className="text-lg">
            {roboticsRecruit.map((roboticsRecruit) => {
              return (
                <tr className="border-collapse border-t-[0.5px] border-b-[0.5px] text-white">
                  <td className="">{roboticsRecruit.name}</td>
                  <td className="">{roboticsRecruit.roll}</td>
                  <td className="">{roboticsRecruit.year}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Embedded */}
        <h2 className="font-bold text-2xl pt-8 pb-2 text-yellow-500">Embedded</h2>
        <table className="w-full table-auto">
          <thead className="text-lg">
            <tr className="text-white">
              <th className="text-left ">Name</th>
              <th className="text-left">Roll</th>
              <th className="text-left">Year</th>
            </tr>
          </thead>
          <tbody className="text-lg">
            {embeddeRecruit.map((embeddeRecruit) => {
              return (
                <tr className="border-collapse border-t-[1px] border-b-[1px] text-white">
                  <td className="">{embeddeRecruit.name}</td>
                  <td className="">{embeddeRecruit.roll}</td>
                  <td className="">{embeddeRecruit.year}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* ML */}
        <h2 className="font-bold text-2xl pt-8 pb-2 text-yellow-500">ML</h2>
        <table className="w-full table-auto">
          <thead className="text-lg">
            <tr className="text-white">
              <th className="text-left ">Name</th>
              <th className="text-left">Roll</th>
              <th className="text-left">Year</th>
            </tr>
          </thead>
          <tbody className="text-lg">
            {mlRecruit.map((mlRecruit) => {
              return (
                <tr className="border-collapse border-t-[1px] border-b-[1px] text-white">
                  <td className="">{mlRecruit.name}</td>
                  <td className="">{mlRecruit.roll}</td>
                  <td className="">{mlRecruit.year}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* IoT */}
        <h2 className="font-bold text-2xl pt-8 pb-2 text-yellow-500">IoT</h2>
        <table className="w-full table-auto">
          <thead className="text-lg">
            <tr className="text-white">
              <th className="text-left ">Name</th>
              <th className="text-left">Roll</th>
              <th className="text-left">Year</th>
            </tr>
          </thead>
          <tbody className="text-lg">
            {iotRecruit.map((iotRecruit) => {
              return (
                <tr className="border-collapse border-t-[1px] border-b-[1px] text-white">
                  <td className="">{iotRecruit.name}</td>
                  <td className="">{iotRecruit.roll}</td>
                  <td className="">{iotRecruit.year}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Web-Dev */}
        <h2 className="font-bold text-2xl pt-8 pb-2 text-yellow-500">Web Development</h2>
        <table className="w-full table-auto">
          <thead className="text-lg">
            <tr className="text-white">
              <th className="text-left ">Name</th>
              <th className="text-left">Roll</th>
              <th className="text-left">Year</th>
            </tr>
          </thead>
          <tbody className="text-lg">
            {webdevRecruit.map((webdevRecruit) => {
              return (
                <tr className="border-collapse border-t-[1px] border-b-[1px] text-white">
                  <td className="">{webdevRecruit.name}</td>
                  <td className="">{webdevRecruit.roll}</td>
                  <td className="">{webdevRecruit.year}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecruitmentMain;
