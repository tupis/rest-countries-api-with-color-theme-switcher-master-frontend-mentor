export interface ICountry {
  name: {
    common: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  tld: string[];
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages: {
    [key: string]: string;
  };

  borders: string[];
  area: number;

  flag: string;
  flags: {
    png: string;
    svg: string;
  };
}

/*
    nativeName
    Border Country
    Currencies
*/
