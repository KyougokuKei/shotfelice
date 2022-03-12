import React, { useState, useEffect } from "react";
import { Box, MotionDiv } from "../../styles/components";
import { ListCheck } from "../../public/img/svg";

export function SelectList(props) {
  const defaultValue =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem(props.name0))
      : [];
  const [selected, setSelected] = useState(defaultValue);
  const prices = props.price ? props.price : [];

  useEffect(() => {
    const sort_selected = selected.sort((a, b) => a - b);
    const selectedItem = sort_selected.map((item) => props.list[item]);
    const selectedPrice = sort_selected.map((item) => prices[item]);
    localStorage.setItem(props.name0, JSON.stringify(sort_selected));
    localStorage.setItem(props.name1, JSON.stringify(selectedItem));
    localStorage.setItem(props.name2, JSON.stringify(selectedPrice));
  }, [selected]);

  return (
    <Box position="relative" zIndex={0}>
      {[...Array(props.list.length).keys()].map((i) => {
        const item = props.list[i];
        const price = prices[i];
        return (
          <MotionDiv
            key={i}
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width="100%"
            background="#ffffff"
            animate={{
              backgroundColor: selected.includes(i) ? "#f5f5f5" : "#ffffff",
            }}
            transition={{ duration: 0.2 }}
            height={68}
            px={40}
            position="relative"
            border="solid 1px #e1e1e1"
            borderTop={i !== 0 ? "none" : "solid 1px #e1e1e1"}
            style={{ cursor: "pointer" }}
            onTap={() => {
              props.multipleSelect
                ? multipleSelect(i, selected, setSelected)
                : oneSelect(i, selected, setSelected);
            }}
          >
            <ListCheck
              style={{
                position: "absolute",
                top: "50%",
                left: "24px",
                transform: "translateY(-50%)",
              }}
              toggle={selected.includes(i)}
            />
            <Box mr="auto" ml={12}>
              {item}
            </Box>
            <Box>{price}</Box>
          </MotionDiv>
        );
      })}
    </Box>
  );
}

function multipleSelect(i, selected, setSelected) {
  if (selected.includes(i)) {
    setSelected(selected.filter((item) => item !== i));
  } else {
    setSelected([...selected, i]);
  }
}

function oneSelect(i, selected, setSelected) {
  if (selected.includes(i)) {
    setSelected([]);
  } else {
    setSelected([i]);
  }
}
