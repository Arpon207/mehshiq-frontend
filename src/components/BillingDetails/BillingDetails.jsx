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
      <form action="" onSubmit={handleSubmit(onSubmit)} id="orderFrom">
        <div className="inputWrapper">
          <label htmlFor="firstname">Name</label>
          <input
            id="firstname"
            type="text"
            {...register("name", { required: true })}
            placeholder="Name"
          />
        </div>

        <div className="clientName">
          <div className="inputWrapper">
            <label htmlFor="email">Email (Optional)</label>
            <input
              id="email"
              type="email"
              {...register("email")}
              placeholder="Email"
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="number"
              {...register("phone", { required: true })}
              placeholder="Phone"
            />
          </div>
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
          <label htmlFor="district">District</label>
          <input
            id="district"
            type="text"
            {...register("district", { required: true })}
            placeholder="District"
          />
        </div>
        <div className="inputWrapper">
          <label htmlFor="area">Area</label>
          <input
            id="area"
            type="text"
            {...register("area", { required: true })}
            placeholder="House No. / Road No. / Village / Thana / Upazilla"
          />
        </div>
        <div className="inputWrapper">
          <label htmlFor="additionalComment">
            Additional Comment ( Optional )
          </label>
          <textarea
            name=""
            id="additionalComment"
            {...register("additionalComment")}
            rows={5}
            placeholder="Additional Comment..."
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default BillingDetails;
