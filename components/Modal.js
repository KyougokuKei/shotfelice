import React from "react";
import { Box, MotionDiv } from "../styles/components";
import { AnimatePresence } from "framer-motion";
import OutsideClickHandler from "react-outside-click-handler";

export function Modal(props) {
  return (
    <AnimatePresence>
      {props.isVisible && (
        <MotionDiv
          style={{
            width: "100%",
            height: "100%",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 8,
          }}
          initial={{ backgroundColor: "rgba(0,0,0,0)" }}
          animate={{
            backgroundColor: "rgba(0,0,0," + String(props.opacity) + ")",
          }}
          exit={{ backgroundColor: "rgba(0,0,0,0)" }}
          transition={props.transition}
        >
          {props.isVisible && (
            <Box
              width="100%"
              height="100%"
              osition="relative"
              display="flex"
              alignItems={props.top}
              justifyContent={props.left}
            >
              <OutsideClickHandler
                display="contents"
                onOutsideClick={() => {
                  props.setIsVisible(!props.isVisible);
                }}
              >
                {props.children}
              </OutsideClickHandler>
            </Box>
          )}
        </MotionDiv>
      )}
    </AnimatePresence>
  );
}

Modal.defaultProps = {
  top: "center",
  left: "center",
  opacity: 0.5,
  transition: {
    type: "spring",
    damping: 20,
    stiffness: 300,
    duration: 0.15,
  },
};
