import axios from "axios";

const APIContry = axios.create({
  baseURL: "https://restcountries.com/v2/",
});

export const CountryServices = {
  allCountries: async () => {
    return await APIContry.get("all").then((res) => res.data);
  },
  Country: async (alphaCode: string) => {
    return await APIContry.get(`alpha/${alphaCode}`)
      .then((res) => res.data)
      .catch((res) => {
        return { message: "País inexistente" };
      });
  },
};
