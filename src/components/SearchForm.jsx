import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";

const SearchForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const locations = [
    "Hyderabad",
    "Bangalore",
    "Delhi",
    "Mumbai",
    "Pune",
    "Jaipur",
    "Kolkata",
  ];
  const specialties = [
    "Cardiologist",
    "Gynecologist",
    "Orthopedic",
    "ENT Specialist",
    "Dermatologist",
    "Neurologist",
    "Pediatrician",
  ];
  const onsubmit = (data) => {
    navigate(`/search?location=${data.location}&specialty=${data.Specialization}`);
    // console.log("Form submitted", data);
  };
  return (
    <div className="flex justify-center items-center ">
      <div className="border  rounded-md w-[550px] h-48 relative top-52 bg-white shadow-xl ">
        <form
          onSubmit={handleSubmit(onsubmit)}
          className="flex flex-col gap-3 justify-center items-center relative top-5"
        >
          <div className="flex justify-center items-center w-[480px] ">
            <select
              className="w-full px-5 py-2 rounded-md border"
              {...register("location")}
            >
              <option value="">Select Location</option>
              {locations.map((location) => (
                <option value={location}>{location}</option>
              ))}
            </select>
          </div>
          <div className="flex justify-center items-center w-[480px]">
            <select
              className="w-full px-5 py-2 rounded-md border"
              {...register("Specialization")}
            >
              <option value="">Select Specialization</option>
              {specialties.map((specialtie) => (
                <option value={specialtie}>{specialtie}</option>
              ))}
            </select>
          </div>
          <div className="flex justify-center w-[480px] items-center">
            <button className="bg-yellow-300 w-full p-2 rounded-md flex justify-center">
              Search Doctors
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
