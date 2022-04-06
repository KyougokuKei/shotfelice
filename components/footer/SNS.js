import React, { useState } from "react";
import { Box } from "../../styles/components";
import { Fb, Line, Hatena, Twitter } from "../../public/img/svg";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  HatenaShareButton,
  HatenaIcon,
  LineShareButton,
  LineIcon,
} from "react-share";

const siteURL = "https://shotfelice.net/";
export function SNS() {
  return (
    <Box mt={[40, 100]}>
      <LineShareButton url={siteURL} style={{ marginRight: "14px" }}>
        <Line width={24} height={24} white />
      </LineShareButton>
      <FacebookShareButton url={siteURL} style={{ marginRight: "14px" }}>
        <Fb width={24} height={24} white />
      </FacebookShareButton>
      <TwitterShareButton url={siteURL} style={{ marginRight: "14px" }}>
        <Twitter width={24} height={24} white />
      </TwitterShareButton>
      <HatenaShareButton url={siteURL} style={{ marginRight: "14px" }}>
        <Hatena width={24} height={24} white />
      </HatenaShareButton>
    </Box>
  );
}
