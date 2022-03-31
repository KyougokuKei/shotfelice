import React, { useState, useEffect } from "react";
import { usePersist } from "../../lib/usepersist";
import { Box, MotionDiv } from "../../styles/components";
import { ListCheck } from "../../public/img/svg";

export function SelectList(props) {
  const [selected, setSelected] = useState(props.value);
  const prices = props.price ? props.price : [];

  useEffect(() => {
    const sort_selected = selected.sort((a, b) => a - b);
    props.setValue(sort_selected);
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
              backgroundColor: selected.includes(item) ? "#f5f5f5" : "#ffffff",
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
                ? multipleSelect(item, selected, setSelected)
                : oneSelect(item, selected, setSelected);
            }}
          >
            <ListCheck
              style={{
                position: "absolute",
                top: "50%",
                left: "24px",
                transform: "translateY(-50%)",
              }}
              toggle={selected.includes(item)}
            />
            <Box mr="auto" ml={12}>
              {item}
            </Box>
            {price !== "¥0" && <Box>{price}</Box>}
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
