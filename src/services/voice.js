const axios = require("axios");

const API_URL = "https://api.candyvoice.com/v1.0/";

export const getVoices = async () => {
  const config = {
    headers: {
      Authorization: `JWT ${sessionStorage.getItem("token")}`,
      setCookies: true,
    },
  };
  const voices = await axios.get(`${API_URL}voices`, config);
  console.log(voices.data);
  if (!voices) throw new Error("user not found");
  return voices.data;
};

export const getVoiceById = async (voiceId) => {
  const config = {
    headers: {
      Authorization: `JWT ${sessionStorage.getItem("token")}`,
      setCookies: true,
    },
  };
  const voice = await axios.get(`${API_URL}voices`, config, voiceId);
  if (!voice) throw new Error("user not found");
  return voice.data;
};
