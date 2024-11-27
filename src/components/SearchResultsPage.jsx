import React, { useState } from "react";
import { fetchDoctor } from "../utils/fetchDoctor";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

import FilterAltIcon from "@mui/icons-material/FilterAlt";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import { useQuery } from "@tanstack/react-query";

const SearchResultsPage = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["doctors"], // The unique key for the query
    queryFn: fetchDoctor, // The function that fetches the data
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  const {
    availableSlots,
    distance,
    estimatedWaitTime,
    id,
    location,
    name,
    queueStatus,
    ratings,
    specialty,
  } = data[1];
  console.log(data);

  return (
    <div className=" h-[100vh] flex-col w-[100vw] bg-[#f7fee7] flex items-center">
      <div className="flex justify-center relative top-11  items-center gap-[450px]  w-[50vw] h-[20vh] ">
        <div className="">
          <h1 className="font-semibold text-2xl">
            Doctors near Current Location
          </h1>
          <span className="font-medium text-base text-[#777474]">
            {data.length} doctors found{" "}
          </span>
        </div>
        <div>
          <button className="border px-5 rounded-md text-lg shadow-2xl py-1">
            <FilterAltIcon /> Filter
          </button>
        </div>
      </div>
      {/* Search Results */}
      <div className=" border w-[50vw] gap-[200px] justify-center items-center px-16 py-10 flex bg-white rounded-md shadow-xl">
        <div>
          <h1 className="font-semibold text-xl">{name}</h1>
          <p>{specialty}</p>
          <div>
            <span className="flex gap-1 text-base text-[#5f5656]  w-96 mt-2 mb-1">
              <LocationOnIcon />
              {location} ({distance} km away)
            </span>
          </div>
          <div>
            <span className="flex gap-1 text-base text-[#5f5656]  w-96 mt-2 mb-1">
              <PersonRoundedIcon />
              current queue:{queueStatus} patients
            </span>
          </div>
          <div>
            <span className="flex gap-1 text-base text-[#5f5656]  w-96 mt-2 mb-1">
              <AccessTimeIcon />
              Estimated Wait:{estimatedWaitTime}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="font-semibold text-xl">Available Today</h1>
          </div>
          <div className="relative left-[76px]">
            <span className="">{availableSlots[0]}</span>
          </div>
          <div className="mt-5">
            <button className="border font-medium bg-yellow-300 rounded-lg shadow-lg px-3 py-2">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;
