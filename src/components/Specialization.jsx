import React from "react";

const Specialization = () => {
  const items = ["General Practice", "Dentistry", "Pediatrics", "Cardiology"];
  return (
    <div className="flex justify-center items-center relative flex-col top-72 cursor-pointer">
      <div className=" flex flex-col w-96 mb-10 ">
        <h1 className="text-3xl text-center">Popular Specializations</h1>
      </div>
      <div className="list-none flex gap-10 ">
        {items.map((item) => (
          <li className="text-lg border rounded-3xl shadow-md font-medium py-1 bg-[#f7f6f6] px-4">
            {item}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Specialization;
