
# Doctor Search & Appointment Booking UI

A web application that allows users to search for doctors by name or specialty, book appointments, and manage their booked appointments. This project is designed to provide a user-friendly interface for patients seeking medical consultations.

## Features

### 1. Homepage (Doctor Search)
- A search bar where users can enter a doctor's name or specialty.
- Displays a list of doctors fetched from a mock API or a predefined list.
- Each doctor card includes:
  - Doctor's Name
  - Specialty
  - Experience (years)
  - Location
  - "Book Appointment" button
- Responsive design to ensure usability on various devices.

### 2. Appointment Booking Form
- When a user clicks on "Book Appointment," a modal/popup opens or navigates to a new page.
- Form fields include:
  - Patient Name
  - Age
  - Gender (Dropdown)
  - Mobile Number
  - Preferred Date (Date Picker)
  - Preferred Time Slot (Dropdown)
- A submit button to save appointment details in local state (no backend required).

### 3. Appointments List Page
- Displays a table/list of booked appointments.
- Each row includes:
  - Patient Name
  - Doctor Name
  - Date
  - Time
  - "Edit" and "Cancel" buttons.
- Editing functionality allows modification of appointment details.

## Installation Instructions

To run the Doctor Search & Appointment Booking UI locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Prashantpal123/Assignment-Prashant-doctor_booking
2. Navigate to the project directory:
   ```bash
    cd Assignment-Prashant-doctor_booking

4. Install dependencies:
   ```bash
     npm install
   
5. Start the development server: (Start the server by command based on your device )  
   ```bash
     npm run dev       
Usage
1. Open the application in your web browser.
2. Use the search bar on the homepage to find doctors by name or specialty.
3. Click on the "Book Appointment" button for the desired doctor to open the booking form.
4. Fill in the required details and submit the form to save the appointment.
5. Navigate to the appointments list page to view, edit, or cancel your booked appointments.
Contributing
6. Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

Fork the repository.
1. Create a new branch for your feature or bug fix.
2. Make your changes and commit them.
3. Push your changes to your forked repository.
4. Submit a pull request.
License
5. This project is licensed under the MIT License. See the LICENSE file for details.

Authors and Acknowledgments
This project was created by Prashant Pal.


FAQ
Q: What is the purpose of this application?
A: This application allows users to search for doctors and book appointments easily.

Q: How do I install the application?
A: Follow the installation instructions provided in the README.

Q: Can I edit my booked appointments?
A: Yes, you can edit your booked appointments from the appointments list page.

Q: Is there a backend for this application?
A: No, this application uses local state management for storing appointment details without a backend.
   
