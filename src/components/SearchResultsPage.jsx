import React, { useState } from "react";
import { fetchDoctor } from "../utils/fetchDoctor";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import FilterAltIcon from "@mui/icons-material/FilterAlt";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "react-router";

const SearchResultsPage = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const locationfilter = query.get("location");
  const specialtyfilter = query.get("specialty");
  const { data, error, isLoading } = useQuery({
    queryKey: ["doctors"], // The unique key for the query
    queryFn: fetchDoctor, // The function that fetches the data
  });
  //filter data based on location and specialty

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  const filteredData = data.filter((doctor) => {
    if (locationfilter && specialtyfilter) {
      return (
        doctor.location === locationfilter &&
        doctor.specialty === specialtyfilter
      );
    }
    if (locationfilter) {
      return doctor.location === locationfilter;
    }
    if (specialtyfilter) {
      return doctor.specialty === specialtyfilter;
    }
  });
  //   console.log(filteredData);
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
  } = data;
  //   console.log(data);

  return (
    <div className=" h-[100%] flex-col w-[100%] bg-[#f7fee7] flex items-center ">
      <div className="relative right-[370px] top-9">
        <Link to="/">
          <button className="border px-2 flex gap-2 py-2 rounded-md bg-white font-medium shadow-md">
            <KeyboardBackspaceIcon />
            Back to Search
          </button>
        </Link>
      </div>
      <div className="flex justify-center relative top-10  items-center gap-[450px]     w-[50vw] h-[20vh] ">
        <div className="">
          <h1 className="font-semibold text-2xl">
            Doctors near Current Location
          </h1>
          <span className="font-medium text-base text-[#777474]">
            {filteredData.length} doctors found{" "}
          </span>
        </div>
        <div>
          <button className="border px-5 rounded-md text-lg shadow-2xl py-1 bg-white ">
            <FilterAltIcon /> Filter
          </button>
        </div>
      </div>
      {/* Search Results */}
      {filteredData.map((doctor) => (
        <div
          key={doctor.id}
          className=" border w-[50vw] mb-4 gap-[200px] justify-center items-center px-16  py-10 flex bg-white rounded-md shadow-xl"
        >
          <div>
            <h1 className="font-semibold text-xl">{doctor.name}</h1>
            <p>{doctor.specialty}</p>
            <div>
              <span className="flex gap-1 text-base text-[#5f5656]  w-96 mt-2 mb-1">
                <LocationOnIcon />
                {doctor.location} ({doctor.distance} km away)
              </span>
            </div>
            <div>
              <span className="flex gap-1 text-base text-[#5f5656]  w-96 mt-2 mb-1">
                <PersonRoundedIcon />
                current queue:{doctor.queueStatus} patients
              </span>
            </div>
            <div>
              <span className="flex gap-1 text-base text-[#5f5656]  w-96 mt-2 mb-1">
                <AccessTimeIcon />
                Estimated Wait:{doctor.estimatedWaitTime}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <h1 className="font-semibold text-xl">Available Today</h1>
            </div>
            <div className="relative left-[76px]">
              <span className="">{doctor.availableSlots[0]}</span>
            </div>
            <div className="mt-5">
              <button className="border font-medium bg-yellow-300 rounded-lg shadow-lg px-3 py-2">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResultsPage;
