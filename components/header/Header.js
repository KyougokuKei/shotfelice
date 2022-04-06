import { useState } from "react";
import { Box, MotionDiv, Clickable, Text } from "../../styles/components";
import HamburgerMenu from "./HamburgerMenu";
import OutsideClickHandler from "react-outside-click-handler";
import Link from "next/link";
const data = require("./data");

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const variants = {
    false: {
      opacity: 0,
      height: 0,
    },
    true: {
      opacity: 1,
      height: 300,
    },
  };
  return (
    <Box position="relative" height={[40, 90]} mb="auto">
      <OutsideClickHandler
        onOutsideClick={() => {
          if (isOpen) {
            setIsOpen(false);
          }
        }}
      >
        <HamburgerMenu
          position="absolute"
          right="5%"
          top={30}
          isOpen={isOpen}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          display={["block", "none"]}
          zIndex={2}
        />
        <MotionDiv
          position="absolute"
          px={["5%", 80]}
          py={[40, 0]}
          width="100%"
          display="flex"
          flexDirection={["column", "row"]}
          alignItems={["flex-start", "center"]}
          justifyContent="flex-start"
          mt={[0, 30]}
          background={["white", "none"]}
          variants={variants}
          transition={{ duration: 0.2 }}
          initial={String(isOpen)}
          animate={String(isOpen)}
          height={["auto", "auto !important"]}
          opacity={["1", "1 !important"]}
          overflow="hidden"
        >
          {[...Array(data.href.length).keys()].map((i) => {
            return (
              <Link key={i} href={data.href[i]} passHref>
                <Clickable ml={i === 0 ? 0 : [0, 30]} mb={[20, 0]}>
                  <Text
                    color={i === 0 ? "gold" : "black"}
                    fontSize={16}
                    fontWeight="bold"
                  >
                    {data.title_jp[i]}
                  </Text>
                  <Text
                    pl={4}
                    color={i === 0 ? "gold" : "black"}
                    fontSize={12}
                    fontWeight="bold"
                  >
                    {data.title_en[i]}
                  </Text>
                </Clickable>
              </Link>
            );
          })}
        </MotionDiv>
      </OutsideClickHandler>
    </Box>
  );
}
