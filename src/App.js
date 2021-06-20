import React, { useState, useEffect } from "react";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import "./App.css";

function App() {
  const [countries, setCountries] = useState(["us", "we", "ar"]);

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((res) => res.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <h1>Covid-19 tracker</h1>

        <FormControl className="app_dropdown">
          <Select variant="outlined" value="abc">
            {/* get all countries */}

            {countries.map((country) => (
              <MenuItem value="country">
                {" "}
                {country.value} {country.name}{" "}
              </MenuItem>
            ))}
            {/* 
          
<MenuItem value="worldwide">worldwide</MenuItem>
            <MenuItem value="worldwide">3</MenuItem>
            <MenuItem value="worldwide">4</MenuItem> */}
          </Select>
        </FormControl>
      </div>

      {/* header*/}
      {/* title input  */}

      {/* infobox */}
      {/* infobox */}
      {/* infobox */}

      {/*table  */}
      {/* graph */}

      {/* map */}
    </div>
  );
}

export default App;
