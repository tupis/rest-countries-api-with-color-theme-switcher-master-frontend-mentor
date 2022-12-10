interface ILanguages {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface ICountry {
  name: string;
  topLevelDomain: string[];
  capital: string;
  subregion: string;
  region: string;
  area: number;
  population: number;
  borders: string[];
  flags: {
    svg: string;
    png: string;
  };
  nativeName: string;
  currencies: [
    {
      code: string;
      name: string;
      symbol: string;
    }
  ];
  flag: string;
  languages: ILanguages[];
}
