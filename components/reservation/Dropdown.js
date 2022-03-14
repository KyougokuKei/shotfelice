import { useState, useEffect, useRef } from "react";
import { Box, MotionDiv } from "../../styles/components";
import { AnimatePresence } from "framer-motion";
import { usePersist } from "../../lib/usepersist";
import OutsideClicker from "../../components/OutsideClicker";
// Select2(value, setValue, placeholder, list)
export function Dropdown(props) {
  const myRef = useRef("");
  const [value, setValue] = usePersist(props.strage_key, "");
  const [toggle, setToggle] = useState(false);
  const [top, setTop] = useState(false);
  value ? props.setValue(value) : null;

  useEffect(() => {
    if (myRef.current !== null) {
      const result =
        myRef.current.getBoundingClientRect().top +
          myRef.current.getBoundingClientRect().height / 2 >
        window.innerHeight / 2;
      setTop(result);
    }
  }, [toggle]);

  return (
    <MotionDiv
      ref={myRef}
      onTap={() => setToggle(!toggle)}
      position="relative"
      display="flex"
      alignItems="center"
      fontWeight="100"
      width={props.width ? props.width : "100%"}
      py={20}
      px={18}
      backgroundColor="#fff"
      animate={{
        scale: toggle ? 1.005 : 1,
        zIndex: 1,
        transitionEnd: { zIndex: toggle ? 1 : 0 },
      }}
      style={{
        outline: toggle ? "solid 1px #333" : "none",
        cursor: "pointer",
      }}
    >
      {/* ------------------Herader------------------ */}
      <Box
        display="inline-block"
        mr="auto"
        fontWeight="normal"
        color={props.value ? "black" : "grey7"}
      >
        {props.value ? props.value : props.placeholder}
        <Box as="span" ml={4}>
          {props.prefix && props.value ? props.prefix : ""}
        </Box>
      </Box>

      <Arrow toggle={toggle} />
      {/* ------------------Toggle List------------------ */}
      <AnimatePresence>
        {toggle && (
          <OutsideClicker onOutsideClick={() => setToggle(false)}>
            <MotionDiv
              maxHeight={200}
              overflowY="scroll"
              initial={{ opacity: 0, scaleY: 0.8, y: top ? 20 : -20 }}
              animate={{ opacity: 1, scaleY: 1, y: 0 }}
              exit={{ opacity: 0, scaleY: 0.8, y: top ? 20 : -20 }}
              transition={{ duration: 0.2 }}
              position="absolute"
              top={top ? "none" : "calc(100% + 1px)"}
              bottom={top ? "calc(100% + 1px)" : "none"}
              left={0}
              width="100%"
              style={{ boxSizing: "border-box" }}
              background="white"
              zIndex={3}
              color="black"
              border="solid 1px #aaa"
              borderTop={top ? "solid 1px #aaa" : "none"}
              borderBottom={top ? "none" : "solid 1px #aaa"}
            >
              {props.list.map((item, index) => {
                return (
                  <MotionDiv
                    key={index}
                    onTap={() => {
                      props.setValue(item);
                      setValue(item);
                    }}
                    background="white"
                    whileHover={{ backgroundColor: "#eee" }}
                    transition={{ duration: 0.1 }}
                    width="100%"
                    height={50}
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-start"
                    p={20}
                    fontWeight={item === props.value ? "bold" : "100"}
                    fontSize={14}
                    style={{ color: "black" }}
                  >
                    {item}
                  </MotionDiv>
                );
              })}
            </MotionDiv>
          </OutsideClicker>
        )}
      </AnimatePresence>
    </MotionDiv>
  );
}

function Arrow(props) {
  return (
    <MotionDiv
      display="inline-block"
      width={0}
      height={0}
      borderLeft="solid 6px transparent"
      borderRight="solid 6px transparent"
      borderTop="solid 6px #333"
      animate={{
        // scaleY: props.toggle ? -1 : 1,
        rotate: props.toggle ? "180deg" : "0deg",
        y: props.toggle ? "-2px" : "0px",
        transition: { duration: 0.1, ease: "linear" },
      }}
      ml={40}
      {...props}
    />
  );
}
