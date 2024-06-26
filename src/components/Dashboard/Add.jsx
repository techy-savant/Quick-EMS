import React, { useState } from "react";
import Swal from "sweetalert2";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firestore";

const Add = ({ employees, setEmployees, setIsAdding, getEmployees }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");
  const [role, setRole] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !salary || !date) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const newEmployee = {
      firstName,
      lastName,
      email,
      role,
      salary,
      date,
    };

    employees.push(newEmployee);

    try {
      // Add a new document 
      await addDoc(collection(db, "employees"), {
        ...newEmployee,
      });
    } catch (error) {
      console.error(error.message);
    }

    setEmployees(employees);
    setIsAdding(false);
    getEmployees();

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${firstName} ${lastName}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
       <h1 className='logo' style={{marginBottom: '30px'}}>Quick-EMS</h1>
      <form onSubmit={handleAdd}>
        <h3>Add Employee</h3>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="role">Role</label>
        <input
          id="role"
          type="text"
          name="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <label htmlFor="salary">Salary (₦)</label>
        <input
          id="salary"
          type="number"
          name="salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
