const axios = require("axios");

const API_URL = "https://api.candyvoice.com/v1.0/";

export const login = async (user) => {
  const response = await axios.post(`${API_URL}auth/password`, {
    email: user.email,
    password: user.password,
    cookie: true,
  });
  sessionStorage.setItem("token", response.data.jwt_token);
  sessionStorage.setItem("xsrf_token", response.data.xsrf_token);
  return response;
};
