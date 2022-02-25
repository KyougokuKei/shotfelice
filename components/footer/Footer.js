import { Box, MotionDiv, Clickable } from "../../styles/components";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";
import { Phone, InstagramTxt } from "../../public/img/svg";
import { SNS } from "./SNS";
const data = require("./data");

const RScroll = (props) => (
  <MotionDiv whileHover={{ opacity: 0.8 }} style={{ cursor: "pointer" }}>
    <Scroll to={props.to} duration={400} smooth={true} {...props}>
      {props.children}
    </Scroll>
  </MotionDiv>
);

export function Footer() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      background="#212529"
      py={100}
      px="5%"
      color="greye"
    >
      <Box display="flex" width="100%">
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
        <Box fontSize={16} mr={[0, 60, 120]}>
          {/* ホーム */}
          <MotionDiv
            whileHover={{ opacity: 0.8 }}
            fontWeight="bold"
            fontSize={20}
            mb={20}
          >
            <RScroll to="ホーム">{data.body.home.title}</RScroll>
          </MotionDiv>

          {data.body.home.items.map((item, index) => (
            <Box key={index} mb={20}>
              <RScroll to={item}>{item}</RScroll>
            </Box>
          ))}
        </Box>

        {/* お問い合わせ */}
        <Box fontSize={16} mr={[0, 60, 120]}>
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
        <Box fontSize={16}>
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
      <Box mt={64} display="flex" alignItems="center" justifyContent="flex-end">
        <Box fontSize={16} color="grey8" mr="auto">
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
