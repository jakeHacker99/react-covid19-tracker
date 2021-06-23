import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";
function InfoBox({ title, cases, total, active, isRed, ...props }) {
  return (
    <Card
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      }`}
      onClick={props.onClick}
    >
      <CardContent>
        <Typography color="textSecondary" className="InfoBox__title">
          {title}
        </Typography>
        <h2 className={`infoBox__cases ${isRed && "infoBox__cases--red"}`}>
          {cases}
        </h2>

        <Typography className="info__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
