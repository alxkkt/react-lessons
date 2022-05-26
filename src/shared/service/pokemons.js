import axios from "axios";

const instance = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  params: {
    limit: 10,
  },
});

export const getAbiities = async (params) => {
  const { data } = await instance.get("/ability", {
    params,
  });

  return data;
};
