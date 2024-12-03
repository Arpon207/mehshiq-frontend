import { useForm } from "react-hook-form";
import "./billingDetails.css";
import { useEffect, useState } from "react";

const BillingDetails = ({ onSubmit, division, setDivision }) => {
  const divisions = [
    "Dhaka",
    "Chattogram",
    "Barishal",
    "Khulna",
    "Rangpur",
    "Rajshahi",
    "Sylhet",
    "Mymensingh",
  ];

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div className="billingDetails">
      <h3>Billing Details</h3>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="clientName">
          <div className="inputWrapper">
            <label htmlFor="firstname">First Name</label>
            <input
              id="firstname"
              type="text"
              {...register("firstname", { required: true })}
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="lastname">Last Name</label>
            <input
              id="lastname"
              type="text"
              {...register("lastname", { required: true })}
            />
          </div>
        </div>
        <div className="clientName">
          <div className="inputWrapper">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              {...register("email", { required: true })}
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="number"
              {...register("phone", { required: true })}
            />
          </div>
        </div>
        <div className="inputWrapper">
          <label htmlFor="lastname">Company Name (Optional)</label>
          <input
            id="lastname"
            type="text"
            {...register("lastname", { required: true })}
          />
        </div>
        <div className="inputWrapper">
          <label htmlFor="divisions">Division</label>
          <select
            name="divisions"
            id="divisions"
            value={division}
            onChange={(e) => setDivision(e.target.value)}
          >
            {divisions.map((div, i) => (
              <option value={div}>{div}</option>
            ))}
          </select>
        </div>
        <div className="inputWrapper">
          <label htmlFor="area">Area</label>
          <input
            id="area"
            type="text"
            {...register("area", { required: true })}
          />
        </div>
      </form>
    </div>
  );
};

export default BillingDetails;
