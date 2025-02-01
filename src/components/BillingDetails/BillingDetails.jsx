import { useForm } from "react-hook-form";
import "./billingDetails.css";
import { useEffect, useState } from "react";
import { bangladesh, divisions } from "../../constants/location";

const BillingDetails = ({
  onSubmit,
  setSelectedDivision,
  setDistricts,
  // districts,
  selectedDivision,
  setSelectedDistrict,
  selectedDistrict,
  setShippingCharge,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleDivisionChange = (e) => {
    setSelectedDivision(e.target.value);
    setSelectedDistrict("");
    setShippingCharge(selectedDivision === "Dhaka" ? 80 : 150);
  };

  const handleDistrictChange = (e) => {
    const district = e.target.value;
    setSelectedDistrict(district);
    setShippingCharge(district === "Dhaka" ? 80 : 150);
  };

  const districts =
    divisions.find((division) => division.division === selectedDivision)
      ?.districts || [];

  // useEffect(() => {
  //   const districts = bangladesh.find(
  //     (div) => div.division === selectedDivision
  //   );
  //   setDistricts(districts.districts);
  // }, [selectedDivision]);

  console.log(districts);

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

        {/* divisions */}
        <div className="inputWrapper">
          <label htmlFor="divisions">Select Division</label>
          <select
            {...register("division", { required: true })}
            id="divisions"
            value={selectedDivision}
            onChange={handleDivisionChange}
          >
            <option>Select</option>
            {divisions.map((div, i) => (
              <option key={i} value={div.name}>
                {div.name}
              </option>
            ))}
          </select>
        </div>

        {/* district */}
        <div className="inputWrapper">
          <label htmlFor="district">Select District</label>
          <select
            id="district"
            {...register("district", { required: true })}
            value={selectedDistrict}
            onChange={handleDistrictChange}
            disabled={!selectedDivision}
          >
            {districts.map((district, i) => (
              <option key={i} value={district.name}>
                {district.name}
              </option>
            ))}
          </select>
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
