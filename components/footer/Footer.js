import { Box, MotionDiv, Clickable } from "../../styles/components";
import Link from "next/link";
import { Phone, InstagramTxt } from "../../public/img/svg";
import { SNS } from "./SNS";
import Router from "next/router";

const data = require("./data");

export function Footer() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      background="#212529"
      py={100}
      px={["10%", "5%"]}
      color="greye"
      style={{ whiteSpace: "nowrap" }}
    >
      <Box display="flex" width="100%" flexDirection={["column", "row"]}>
        {/* Left */}
        <Box width="36%" mr="auto">
          <Box fontSize={32} fontWeight="bold" mb={8}>
            {data.head.company}
          </Box>
          <Box fontSize={18} mb={32}>
            {data.head.catchphrase}
          </Box>
          <Box display="flex" alignItems="center">
            <Phone white />
            <Box ml={8}>{data.head.phone}</Box>
          </Box>
          <SNS />
        </Box>

        {/* Right */}
        <Box fontSize={16} mr={[0, 60, 120]} mt={[40, 0]}>
          {/* ホーム */}
          <MotionDiv
            whileHover={{ opacity: 0.8 }}
            fontWeight="bold"
            fontSize={20}
            mb={20}
          >
            <Link href="/#ホーム">{data.body.home.title}</Link>
          </MotionDiv>

          {data.body.home.items.map((item, index) => (
            <Box key={index} mb={20}>
              <Link href={"/#" + item}>{item}</Link>
            </Box>
          ))}
        </Box>

        {/* お問い合わせ */}
        <Box fontSize={16} mr={[0, 60, 120]} mt={[40, 0]}>
          <MotionDiv
            whileHover={{ opacity: 0.8 }}
            fontWeight="bold"
            fontSize={20}
            mb={20}
          >
            <Link href="/contact">{data.body.contact.title}</Link>
          </MotionDiv>
          {data.body.contact.items.map((item, index) => (
            <MotionDiv whileHover={{ opacity: 0.8 }} key={index} mb={20}>
              <Link href="/contact">{item}</Link>
            </MotionDiv>
          ))}
        </Box>
        {/* その他 */}
        <Box fontSize={16} mt={[40, 0]}>
          <MotionDiv
            whileHover={{ opacity: 0.8 }}
            fontWeight="bold"
            fontSize={20}
            mb={24}
          >
            <Link href="/reservation">{data.body.reservation.title}</Link>
          </MotionDiv>
          <MotionDiv
            whileHover={{ opacity: 0.8 }}
            fontWeight="bold"
            fontSize={20}
            mb={24}
          >
            <Link href="/profile">{data.body.profile.title}</Link>
          </MotionDiv>
        </Box>
      </Box>
      <Box
        mt={[40, 64]}
        display="flex"
        alignItems={["flex-start", "center"]}
        justifyContent="flex-end"
        flexDirection={["column-reverse", "row"]}
      >
        <Box fontSize={16} color="grey8" mr="auto" mt={[20, 0]}>
          {data.foot.copyright}
        </Box>

        <Clickable
          as="a"
          href="https://www.instagram.com/hamu_kimi5118"
          target="_blank"
          title="Instagram"
        >
          <InstagramTxt white width={120} />
        </Clickable>
      </Box>
    </Box>
  );
}
