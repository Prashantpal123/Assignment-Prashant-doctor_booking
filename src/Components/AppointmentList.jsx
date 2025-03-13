import React, { useState, useEffect } from "react";

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentAppointment, setCurrentAppointment] = useState(null);

  useEffect(() => {
    const storedAppointments = localStorage.getItem("appointments");
    if (storedAppointments) {
      setAppointments(JSON.parse(storedAppointments));
    }
  }, []);

  // Delete an appointment
  const handleDelete = (id) => {
    const updatedAppointments = appointments.filter((_, index) => index !== id);
    setAppointments(updatedAppointments);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
  };

  // Open edit modal
  const handleEdit = (index) => {
    setCurrentAppointment({ ...appointments[index], index });
    setIsEditing(true);
  };

  // Handle form input change
  const handleInputChange = (e) => {
    setCurrentAppointment({ ...currentAppointment, [e.target.name]: e.target.value });
  };

  // Save edited appointment
  const handleSave = () => {
    const updatedAppointments = [...appointments];
    updatedAppointments[currentAppointment.index] = currentAppointment;
    setAppointments(updatedAppointments);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 flex flex-col items-center p-4 md:p-6">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
        📅 Booked Appointments
      </h1>

      {appointments.length === 0 ? (
        <p className="text-lg text-gray-600 mt-10 text-center">No appointments booked yet.</p>
      ) : (
        <div className="w-full max-w-5xl">
          {/* Desktop View - Table */}
          <div className="hidden md:block bg-white shadow-xl rounded-2xl p-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-500 text-white text-lg">
                  <th className="p-3 rounded-tl-2xl">Doctor</th>
                  <th className="p-3">Patient</th>
                  <th className="p-3">Age</th>
                  <th className="p-3">Mobile</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Time</th>
                  <th className="p-3 rounded-tr-2xl">Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appt, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                    <td className="p-3 font-semibold">{appt.doctorName}</td>
                    <td className="p-3">{appt.patientName}</td>
                    <td className="p-3">{appt.age}</td>
                    <td className="p-3">{appt.mobile}</td>
                    <td className="p-3">{appt.date}</td>
                    <td className="p-3">{appt.slotTime}</td>
                    <td className="p-3 flex gap-2">
                      <button
                        onClick={() => handleEdit(index)}
                        className="bg-green-500 text-white cursor-pointer px-3 py-1 rounded-lg hover:bg-green-600 transition"
                      >
                         Edit
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="bg-red-500 text-white cursor-pointer px-3 py-1 rounded-lg hover:bg-red-600 transition"
                      >
                         Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile View - Card Layout */}
          <div className="md:hidden flex flex-col sm:grid sm:grid-cols-2 gap-4">
            {appointments.map((appt, index) => (
              <div key={index} className="bg-white flex flex-col shadow-lg rounded-xl p-4 border border-gray-300">
                <h2 className="text-lg font-bold text-gray-800">🩺 {appt.doctorName}</h2>
                <p className="text-gray-600"><strong>👤 Patient:</strong> {appt.patientName}</p>
                <p className="text-gray-600"><strong>📅 Date:</strong> {appt.date}</p>
                <p className="text-gray-600"><strong>⏰ Time:</strong> {appt.slotTime}</p>
                <p className="text-gray-600"><strong>📞 Mobile:</strong> {appt.mobile}</p>
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
                  >
                     Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                  >
                     Cancel
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={() => (window.location.href = "/")}
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition text-lg font-medium"
      >
        ⬅ Go Back to Home
      </button>

      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center  border-sky-600 border backdrop-blur-md transition-opacity duration-300 bg-opacity-50  bg-opacity-50">
          <div className="bg-white border border-blue-600  p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Edit Appointment</h2>
            <p className="text-gray-600 mb-2">Doctor: {currentAppointment.doctorName}</p>
            <p className="text-gray-600 mb-2">Patient: {currentAppointment.patientName}</p>

            <input
              type="number"
              name="age"
              value={currentAppointment.age}
              onChange={handleInputChange}
              className="w-full p-2 border focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-none rounded mb-2"
              placeholder="Age"
            />
            <input
              type="tel"
              name="mobile"
              value={currentAppointment.mobile}
              onChange={handleInputChange}
              className="w-full p-2 border focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-none rounded mb-2"
              placeholder="Mobile Number"
            />
            <input
              type="date"
              name="date"
              value={currentAppointment.date}
              onChange={handleInputChange}
              className="w-full p-2 border focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-none rounded mb-2"
            />
                         <select name="slotTime" value={currentAppointment.slotTime} onChange={handleInputChange} required className="w-full p-2 border focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-none rounded">
                <option value="">Select Time Slot</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
              </select>

            <div className="flex mt-4 justify-between">
              <button
                onClick={handleSave}
                className="bg-blue-500 hover:bg-blue-700 curp text-white px-2 py-2 rounded-full w-32"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-500 cursor-pointer hover:bg-red-600 text-white px-2 py-2 rounded-full  w-32 "
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AppointmentList;
