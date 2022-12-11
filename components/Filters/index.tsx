import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ICountry } from "../../@types";
import {
  Container,
  InputSearch,
  Option,
  Region,
  WrapperInput,
  MagniferSearch,
} from "./style";

interface Props {
  allCountries: ICountry[];
  setFilteredCountries: Dispatch<SetStateAction<ICountry[]>>;
}

const Filters = ({
  allCountries,
  setFilteredCountries,
}: Props): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<string>("all");

  function filterByRegion() {
    if (selectedRegion === "all") {
      setFilteredCountries(allCountries);
    } else {
      setFilteredCountries((pv) =>
        allCountries.filter((country) =>
          country.region
            .toLocaleLowerCase()
            .includes(selectedRegion.toLocaleLowerCase())
        )
      );
    }

    setSearch("");
  }

  function filterBySearch() {
    if (search.trim() === "") {
      filterByRegion();
    } else {
      setFilteredCountries((pv) =>
        pv.filter((country) =>
          country.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
      );
    }
  }

  useEffect(() => {
    filterByRegion();
  }, [selectedRegion, setFilteredCountries]);

  useEffect(() => {
    filterBySearch();
  }, [allCountries, search, setFilteredCountries]);

  return (
    <>
      <Container>
        <WrapperInput>
          <MagniferSearch />
          <InputSearch
            placeholder="Search for a country..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </WrapperInput>

        <Region onChange={(e: any) => setSelectedRegion(e.target.value)}>
          <Option value="all">All Regions</Option>
          <Option value="Americas">Americas</Option>
          <Option value="Europe">Europe</Option>
          <Option value="Africa">Africa</Option>
          <Option value="Asia">Asia</Option>
          <Option value="Oceania">Oceania</Option>
          {/* Antártida. América. Ásia. África. Europa. Oceania. */}
        </Region>
      </Container>
    </>
  );
};

export default Filters;
