import { Box } from "../styles/components";
import React from "react";

export function insertBreak(str) {
  if (str.includes("<br>")) {
    return str.split("<br>").map((str, index) => {
      return (
        <React.Fragment key={index}>
          {str}
          <br />
        </React.Fragment>
      );
    });
  } else {
    return str;
  }
}

export function convertGoldText(list) {
  return list.map((str, index) => {
    if (str.startsWith("gold_")) {
      return (
        <Box color="gold" as="span">
          {str.slice(5)}
        </Box>
      );
    } else {
      return insertBreak(str);
    }
  });
}
