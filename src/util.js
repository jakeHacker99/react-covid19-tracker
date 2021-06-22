import React from "react";
import { Circle, Popup } from "react-leaflet";
import numeral from "numeral";
const casesTypeColors = {
  cases: {
    hex: "#0000ff",
    rgb: "rgb(204, 16,52, 0.5)",
    hal_op: "rgba(204,16,52,0.5)",
    multiplier: 400,
  },
  recovered: {
    hex: "#7ddd71d",
    rgb: "rgb(125, 215, 29)",
    halp_op: "rgba(125, 215, 29. 0.5)",
    multiplier: 800,
  },
  deaths: {
    hex: "#fb4443",
    rgb: "rgb(251, 68, 67)",
    half_op: "rgba(251, 68, 67, 0.5",
    multiplier: 1500,
  },
};

export const sortData = (data) => {
  const sortedData = [...data];

  return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
};
export const showDataOnMap = (data, casesType = "cases") =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.4}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <h1>im a popup</h1>
      </Popup>
    </Circle>
  ));
