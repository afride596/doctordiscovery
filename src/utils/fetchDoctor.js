import DoctorData from "../utils/doctors.json";

export const fetchDoctor = async () => {
  try {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(DoctorData);
      }, 1000);
    });
  } catch {
    console.log("Error fetching doctor");
    return [];
  }
};
