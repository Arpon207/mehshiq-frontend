import { useForm } from "react-hook-form";
import "./billingDetails.css";
import { Country, State, City } from "country-state-city";
import { useEffect, useState } from "react";
import axios from "axios";

const BillingDetails = ({ onSubmit }) => {
  const [divisions, setDivisions] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [upazillas, setUpazillas] = useState([]);

  useEffect(() => {
    axios
      .get("https://bdapis.com/api/v1.1/divisions")
      .then((res) => setDivisions(res.data.data));
  }, []);

  useEffect(() => {}, [divisions]);

  const handleDivision = (e) => {
    const division = e.target.value;
    axios
      .get(`https://bdapis.com/api/v1.1/division/${division}`)
      .then((res) => setDistricts(res.data.data));
  };

  const handleDistrict = (e) => {
    const selectedDistrict = e.target.value;
    const district = districts.find((dis) => dis.district === selectedDistrict);
    console.log(district);
    setUpazillas(district.upazilla);
  };

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
            onChange={(e) => handleDivision(e)}
          >
            {divisions.map((div, i) => (
              <option value={div.division}>{div.division}</option>
            ))}
          </select>
        </div>
        <div className="inputWrapper">
          <label htmlFor="district">District</label>
          <select
            name="district"
            id="district"
            onChange={(e) => handleDistrict(e)}
          >
            {districts.map((dis, i) => (
              <option value={dis.district}>{dis.district}</option>
            ))}
          </select>
        </div>
        <div className="inputWrapper">
          <label htmlFor="upazilla">Upazilla</label>
          <select
            name="upazilla"
            id="upazilla"
            // onChange={(e) => handleDivision(e)}
          >
            {upazillas.map((upazilla, i) => (
              <option key={i} value={upazilla}>
                {upazilla}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};

export default BillingDetails;
