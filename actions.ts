"use server";
import axios from "axios";

export const getUser = async () => {
  const response = await axios.get("http://localhost:8000/users");
  //   const response = await axios.get("http://api.open-notify.org/astros.json");
  return response.data;
};
