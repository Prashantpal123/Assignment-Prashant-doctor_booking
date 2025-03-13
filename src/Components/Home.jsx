import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

const maleFirstNames = ["Amit", "Rahul", "Sandeep", "Vikram", "Arjun"];
const femaleFirstNames = ["Priya", "Neha", "Anjali", "Ritu", "Kiran"];
const lastNames = ["Sharma", "Verma", "Gupta", "Reddy", "Mehta"];
const specialties = ["Cardiologist", "Dermatologist", "Neurologist", "Pediatrician", "Dentist"];
const titles = ["MD", "MS", "PhD", "DM", "MCh"];

const generateDoctors = () => {
  return Array.from({ length: 20 }, (_, i) => {
    const isMale = i % 2 === 0;
    const firstName = isMale
      ? maleFirstNames[i % maleFirstNames.length]
      : femaleFirstNames[i % femaleFirstNames.length];

    return {
      id: i + 1,
      name: `Dr. ${firstName} ${lastNames[i % lastNames.length]} (${titles[i % titles.length]})`,
      specialty: specialties[i % specialties.length],
      experience: Math.floor(Math.random() * 20) + 5,
      location: ["Delhi", "Mumbai", "Bangalore", "Chennai", "Pune"][i % 5] + ", India",
      gender: isMale ? "Male" : "Female",
      image: `https://randomuser.me/api/portraits/${isMale ? "men" : "women"}/${i + 10}.jpg`,
    };
  });
};

function Home() {
  const [doctorsList, setDoctorsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointmentData, setAppointmentData] = useState({
    patientName: "",
    age: "",
    mobile: "",
    gender: "",
    date: "",
    slotTime: "",
  });

  useEffect(() => {
    const storedDoctors = localStorage.getItem("doctorsList");
    if (storedDoctors) {
      setDoctorsList(JSON.parse(storedDoctors));
    } else {
      const newDoctors = generateDoctors();
      setDoctorsList(newDoctors);
      localStorage.setItem("doctorsList", JSON.stringify(newDoctors));
    }
  }, []);

  const doctorsPerPage = 6;
  const filteredDoctors = doctorsList.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);
  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = filteredDoctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

  const handleBookAppointment = (doctor) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    setAppointmentData({ ...appointmentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedDoctor) return;

    const newAppointment = {
      doctorName: selectedDoctor.name,
      doctorGender: selectedDoctor.gender,
      ...appointmentData,
    };

    const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    storedAppointments.push(newAppointment);
    localStorage.setItem("appointments", JSON.stringify(storedAppointments));

    alert("Appointment booked successfully!");
    closeModal();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setAppointmentData({ patientName: "", age: "", mobile: "", gender: "", date: "", slotTime: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200 p-6 flex justify-center">
      <div className="w-full max-w-[1200px]">
        {/* Search Bar */}
        <div className="mb-8 flex justify-center">
  <div className="relative w-full max-w-xl">
    <input
      type="text"
      placeholder="Search doctor by name or specialty..."
      className="w-full p-4 pl-10 pr-4 border border-blue-300 rounded-full shadow-md bg-white text-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
      🔍
    </span>
  </div>
</div>

        {/* Doctor List */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white/70 p-6 rounded-3xl shadow-lg border border-gray-200">
              <img src={doctor.image} alt={doctor.name} className="w-24 h-24 mx-auto rounded-full mb-4" />
              <div className="text-center">
                <h2 className="text-2xl font-semibold">{doctor.name}</h2>
                <p className="text-gray-500">{doctor.specialty}</p>
                <p className="text-gray-500">📍 {doctor.location}</p>
                <button
                  className="mt-4 bg-blue-500 text-white px-4 cursor-pointer py-2 rounded-lg"
                  onClick={() => handleBookAppointment(doctor)}
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {/* Pagination */}
<div className="flex justify-center mt-6">
  <button
    disabled={currentPage === 1}
    onClick={() => setCurrentPage(currentPage - 1)}
    className={`flex items-center justify-center px-4 py-2 mx-2 rounded-lg transition duration-300 ease-in-out shadow-md ${
      currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"
    }`}
  >
    <span className="text-lg cursor-pointer">Prev</span>
  </button>
  
  <span className="px-4 py-2 text-lg font-semibold text-gray-700">
    Page <span className="font-bold text-blue-600">{currentPage}</span> of <span className="font-bold text-blue-600">{totalPages}</span>
  </span>
  
  <button
    disabled={currentPage === totalPages}
    onClick={() => setCurrentPage(currentPage + 1)}
    className={`flex items-center justify-center px-4 py-2 mx-2 rounded-md transition duration-300 ease-in-out shadow-md ${
      currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"
    }`}
  >
    <span className="text-lg cursor-pointer">Next </span>
  </button>
</div>
      </div>

      {/* Appointment Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center p-4 border-sky-600 border backdrop-blur-md transition-opacity duration-300 bg-opacity-50">
          <div className="bg-white p-6 border border-blue-600 shadow- rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Book Appointment</h2>
            <p className="text-gray-600 mb-2">Doctor: {selectedDoctor?.name}</p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input type="text" name="patientName" placeholder="Patient Name" value={appointmentData.patientName} onChange={handleInputChange} required className="w-full p-2  rounded border focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-none" />
              <input type="number" name="age" placeholder="Age" value={appointmentData.age} onChange={handleInputChange} required className="w-full p-2 border focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-none rounded" />
              <input type="number" name="mobile" placeholder="Phone" value={appointmentData.mobile} onChange={handleInputChange} required className="w-full p-2 border focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-none rounded" />
              <select name="gender" value={appointmentData.gender} onChange={handleInputChange} required className="w-full p-2 border focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-none rounded">
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <input type="date" name="date" value={appointmentData.date} onChange={handleInputChange} required className="w-full p-2 border focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-none rounded" />
              <select name="slotTime" value={appointmentData.slotTime} onChange={handleInputChange} required className="w-full p-2 border focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-none rounded">
                <option value="">Select Time Slot</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
              </select>
               
               <div className="flex justify-between ">
               <button type="submit" className="bg-blue-500 cursor-pointer text-white px-2 py-2 rounded-full w-32">Confirm</button>
               <button onClick={closeModal} className="bg-red-500 cursor-pointer text-white px-2 py-2 w-32 rounded-full ">Cancel</button>
               </div>
             
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
