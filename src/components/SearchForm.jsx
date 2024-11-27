import React from "react";
import { useForm } from "react-hook-form";

const SearchForm = () => {
  const { register, handleSubmit } = useForm();
  const onsubmit = () => {
    console.log("Form submitted");
  };
  return (
    <div className="flex justify-center items-center ">
      <div className="border  rounded-md w-[550px] h-48 relative top-52 bg-white shadow-xl ">
        <form
          onSubmit={handleSubmit(onsubmit)}
          className="flex flex-col gap-3 justify-center items-center relative top-5"
        >
          <div className="flex justify-center items-center w-[480px] ">
            <input
              className="w-full px-5 py-2 rounded-md border shadow-sm"
              type="text"
              placeholder="current Location"
            />
          </div>
          <div className="flex justify-center items-center w-[480px]">
            <select
              className="w-full px-5 py-2 rounded-md border"
              {...register("category")}
            >
              <option value="">prdeaitricvan</option>
              <option value="">Option 2</option>
              <option value="">Option 3</option>
              <option value="">Option 4</option>
            </select>
          </div>
          <div className="flex justify-center w-[480px] items-center">
            <button className="bg-yellow-300 w-full p-2 rounded-md">
              Search Doctors
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
