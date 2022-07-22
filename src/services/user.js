const axios = require("axios");

const API_URL = "https://api.candyvoice.com/v1.0/";

export const getUserById = async (userId) => {
  const config = {
    headers: {
      Authorization: `JWT ${sessionStorage.getItem("token")}`,
      setCookies: true,
    },
  };
  const userDetails = await axios.get(`${API_URL}users/${userId}`, config);
  if (!userDetails) throw new Error("user not found");
  return userDetails.data;
};

export const getCurrentUserDetails = async () => {
  const config = {
    headers: {
      Authorization: `JWT ${sessionStorage.getItem("token")}`,
      setCookies: true,
    },
  };
  const userDetails = await axios.get(`${API_URL}users/me`, config);
  if (!userDetails) throw new Error("user not found");
  return userDetails.data;
};

export const updateUserDetails = async (userId, newDetails) => {
  const config = {
    headers: {
      Authorization: `JWT ${sessionStorage.getItem("token")}`,
      setCookies: true,
    },
  };
  const updatedUser = await axios.patch(
    `${API_URL}users/${userId}`,
    newDetails,
    config
  );
  return updatedUser.data;
};
