import axios from "axios";

const APIContry = axios({
  baseURL: "https://restcountries.com/v2/",
});

export const CountryServices = {
  allCountry: async () => {},
  filterCountryBySearch: async () => {},
  filterCountryByRegion: async () => {},
};
