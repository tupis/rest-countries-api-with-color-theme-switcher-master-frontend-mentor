import axios from "axios";

const APIContry = axios.create({
  baseURL: "https://restcountries.com/v2/",
});

export const CountryServices = {
  allCountry: async () => {
    return await APIContry.get("all").then((res) => res.data);
  },
  filterCountryBySearch: async () => {},
  filterCountryByRegion: async () => {},
};
