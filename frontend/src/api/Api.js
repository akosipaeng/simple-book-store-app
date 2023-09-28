import React from "react";
import axios from "axios";

const Api = () => {
  const customAxios = axios.create({
    baseURL: "https://book-store-xh82.onrender.com",
  });

  return customAxios;
};

export default Api;
