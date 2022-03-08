import { useState } from "react";
import { Box, MotionDiv, Clickable, Text } from "../../styles/components";
import HamburgerMenu from "./HamburgerMenu";
import OutsideClickHandler from "react-outside-click-handler";
import Link from "next/link";
import { Logo, Instagram, Phone } from "../../public/img/svg";
import { useRouter } from "next/router";

const data = require("./data");

export function GeneralHeader() {
  const router = useRouter();
  const isActive = (router, path) => {
    return router.asPath === `/${path}`;
  };
  const [isOpen, setIsOpen] = useState(false);
  const variants = {
    false: {
      opacity: 0,
      height: 0,
      paddingTop: 0,
    },
    true: {
      opacity: 1,
      height: 300,
      paddingTop: 40,
    },
  };
  return (
    <MotionDiv
      initial={{ x: -100, opacity: 0, height: 0 }}
      animate={{ x: 0, opacity: 1, height: 90 }}
      transition={{ ease: "easeOut", transition: { duration: 0.2 } }}
      position="fixed"
      top={0}
      width="100%"
      height={[80, 90]}
      zIndex={7}
      background="white"
    >
      <OutsideClickHandler
        style={{ height: "100%", position: "relative" }}
        onOutsideClick={() => {
          if (isOpen) {
            setIsOpen(false);
          }
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height={[80, 90]}
          px={["5%", 80]}
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

          <Box
            position="absolute"
            left={["100px", "50%", "50%"]}
            style={{ transform: "translateX(-50%)" }}
            display={["flex", "none", "flex"]}
            alignItems="center"
            justifyContent="center"
          >
            <Logo width={24} />
            <Box ml={4} fontSize={24} fontWeight="bold">
              Shotfelice
            </Box>
          </Box>

          <MotionDiv
            position="absolute"
            px={["5%", 80]}
            top={[80, "inherit"]}
            width="100%"
            display="flex"
            flexDirection={["column", "row"]}
            alignItems={["flex-start", "center"]}
            justifyContent="flex-start"
            // background={["white", "none"]}
            variants={variants}
            transition={{ duration: 0.2 }}
            initial={String(isOpen)}
            animate={String(isOpen)}
            height={["auto", "auto !important"]}
            opacity={["1", "1 !important"]}
            background="white"
            // background="#aaa"
          >
            {[...Array(data.href.length).keys()].map((i) => {
              const href = data.href[i].slice(1);
              const active = isActive(router, href);
              return (
                <Link key={i} href={data.href[i]} passHref>
                  <Clickable ml={i === 0 ? 0 : [0, 30]} mb={[20, 0]}>
                    <Text
                      color={active ? "gold" : "black"}
                      fontSize={16}
                      fontWeight="bold"
                    >
                      {data.title_jp[i]}
                    </Text>
                    <Text
                      pl={4}
                      color={active ? "gold" : "black"}
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

          <Box ml="auto" display={["none", "flex"]}>
            <Clickable
              as="a"
              href="https://www.instagram.com/hamu_kimi5118"
              target="_blank"
              mr={[0, 10]}
              title="Instagram"
            >
              <Instagram width={18} height={18} />
              {/* <Image src="/img/svg/instagram.svg" width={18} height={18} alt="instagram"></Image> */}
            </Clickable>
            <Box alignItems="center" justifyContent="center" display="flex">
              <Phone width={18} height={18} />
              {/* <Image width={18} height={18} src="/img/svg/phone.svg" alt="phone"></Image> */}
              <Text color="black" fontSize={16} ml={4}>
                000-000-0000
              </Text>
            </Box>
          </Box>
        </Box>
      </OutsideClickHandler>
    </MotionDiv>
  );
}
