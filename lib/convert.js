import { Box } from "../styles/components";
import React from "react";
import Link from "next/link";

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

// 引数にstrをとり、str内のcontact部分をリンクに変換する
export function convertLink(str) {
  if (str.includes("こちら")) {
    const [a, b] = str.split("こちら");
    return (
      <Box>
        {a}
        <Link href="/contact">
          <Box display="inline" color="gold" className="pointer">
            こちら
          </Box>
        </Link>
        {b}
      </Box>
    );
  }
}
