import { Box } from "../styles/components";
import React from "react";
import Link from "next/link";
import { keys } from "../lib/localStorageKeys";

export const getFromatDate = (inputData) => {
  const [hour, minutes] = inputData.time.split(":");
  const now = new Date();
  const year = now.getFullYear();
  const thisDate = new Date(
    year,
    inputData.month - 1,
    inputData.day,
    hour,
    minutes
  );
  const week = ["日", "月", "火", "水", "木", "金", "土"];
  const weekDay = week[thisDate.getDay()];
  return `${year}年${inputData.month}月${inputData.day}日 ${hour}時${minutes}分 (${weekDay})`;
};

export const calcFee = (data, inputData, temp) => {
  const fee = {};

  fee[data.payment_fee.fee_titles[0]] = [
    temp[data.input_confirmation.col1[0]],
    data.categories[inputData[keys.category]].price,
  ];

  fee[data.payment_fee.fee_titles[1]] = [
    temp[data.input_confirmation.col2[0]],
    inputData.category_detail.reduce((acc, key) => {
      return acc + data.category.categories[inputData[keys.category]][key];
    }, 0),
  ];

  fee[data.payment_fee.fee_titles[2]] = [
    temp[data.input_confirmation.col1[1]],
    inputData[keys.number_of_shots].reduce((acc, key) => {
      return acc + data.number_of_shots.fee[key];
    }, 0),
  ];

  fee[data.payment_fee.fee_titles[3]] = [
    temp[data.input_confirmation.col2[1]],
    inputData[keys.data_type].reduce((acc, key) => {
      return acc + data.data_type.fee[key];
    }, 0),
  ];

  fee[data.payment_fee.fee_titles[4]] = [
    "(" + inputData[keys.prefecture] + "まで)",
    data.place.fee[inputData.prefecture],
  ];
  fee[data.payment_fee.sum_text] = Object.values(fee).reduce((acc, val) => {
    return acc + val[1];
  }, 0);
  return fee;
};

export function dataFormat(data, key) {
  let ids = JSON.parse(localStorage.getItem("hooks:" + key));
  if (key === "category") {
    return data.categories[ids].title;
  } else if (
    (key === "category_detail") |
    (key === "number_of_shots") |
    (key === "data_type")
  ) {
    return ids.join("・");
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
  if (str) {
    return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return "";
  }
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
