const { faker } = require("@faker-js/faker");
const fs = require("fs");

// Set Faker locale to India
faker.locale = "en_IND"; 

// Function to generate a random doctor
const generateDoctor = () => ({
  id: faker.string.uuid(), // Unique ID
  name: `Dr. ${faker.person.firstName()} ${faker.person.lastName()}`,
  specialty: faker.helpers.arrayElement([
    "Cardiologist",
    "Dermatologist",
    "Pediatrician",
    "Orthopedic",
    "ENT Specialist",
    "Neurologist",
    "Gynecologist"
  ]),
  location: `${faker.helpers.arrayElement([
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai",
    "Kolkata", "Ahmedabad", "Pune", "Jaipur", "Surat"
  ])}, ${faker.helpers.arrayElement([
    "Maharashtra", "Delhi NCR", "Karnataka", "Telangana",
    "Tamil Nadu", "West Bengal", "Gujarat", "Rajasthan"
  ])}`,
  distance: faker.number.int({ min: 1, max: 15 }), // Distance in km
  queueStatus: faker.number.int({ min: 1, max: 10 }),
  estimatedWaitTime: `${faker.number.int({ min: 5, max: 30 })} mins`,
  ratings: faker.number.float({ min: 3.0, max: 5.0, precision: 0.1 }),
  availableSlots: Array.from({ length: 4 }, () =>
    faker.date.future().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })
  )
});

// Generate a list of doctors
const generateDoctors = (count) => Array.from({ length: count }, generateDoctor);

// Write the generated data to a file
const doctors = generateDoctors(20); // Generate 20 doctors
fs.writeFileSync("doctors.json", JSON.stringify(doctors, null, 2));

console.log("Mock data generated successfully!");
