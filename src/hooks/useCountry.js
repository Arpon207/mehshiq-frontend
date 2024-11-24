import axios from "axios";

const fetch = async () => {
  const data = await axios.get("https://bdapis.com/api/v1.2/divisions");
  return data;
};

const data = fetch();

console.log(data);
