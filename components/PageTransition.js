import React, { useState } from "react";
import { MotionDiv } from "../styles/components";

export function PageTransition(props) {
  return (
    <MotionDiv
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
      {...props}
    >
      {props.children}
    </MotionDiv>
  );
}
