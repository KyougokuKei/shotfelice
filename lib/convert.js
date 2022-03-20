import { Box } from "../styles/components";
import React from "react";
import Link from "next/link";

export function dataFormat(data, key) {
  let ids = JSON.parse(localStorage.getItem("hooks:" + key));
  console.log;
  if (key === "category") {
    return data.categories[ids].title;
  } else if (key === "category_detail") {
    return ids
      .map((id) => {
        const category = JSON.parse(localStorage.getItem("hooks:category"));
        return data.category.categories[category][id];
      })
      .join("・");
  } else if (key === "number_of_shots") {
    return ids
      .map((id) => {
        return Object.keys(data.number_of_shots.fee)[id];
      })
      .join("・");
  } else if (key === "data_type") {
    return ids
      .map((id) => {
        return Object.keys(data.data_type.fee)[id];
      })
      .join("・");
  } else if (key === "place") {
    const prefecture = JSON.parse(localStorage.getItem("hooks:prefecture"));
    const address = JSON.parse(localStorage.getItem("hooks:address"));
    return prefecture + "/" + address;
  } else if (key === "date") {
    const month = JSON.parse(localStorage.getItem("hooks:month"));
    const day = JSON.parse(localStorage.getItem("hooks:day"));
    const time = JSON.parse(localStorage.getItem("hooks:time"));
    const [hour, minutes] = time.split(":");
    const now = new Date();
    const year = now.getFullYear();
    const thisDate = new Date(year, month - 1, day, hour, minutes);
    // thisDateの曜日を取得
    const week = ["日", "月", "火", "水", "木", "金", "土"];
    const weekDay = week[thisDate.getDay()];

    return `${year}年${month}月${day}日 ${hour}時${minutes}分 (${weekDay})`;
  } else {
    return ids;
  }
}

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

// 引数として受け取ったstrの数字の文字列を三桁ずつ","で区切る
export function insertComma(str) {
  return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 引数として受け取ったlistの各要素のstrの数字の文字列を三桁ずつ","で区切る
export function insertCommaList(list) {
  return list.map((str) => {
    return "¥" + insertComma(str);
  });
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
