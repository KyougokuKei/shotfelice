import React, { useState, useEffect } from "react";
import { Box, MotionTextarea } from "../../styles/components";
import { PageTransition } from "../../components/PageTransition";
import { Nav } from "../../components/reservation";
import { loadYamls } from "../../lib/posts";

import Head from "next/head";
import { insertBreak } from "../../lib/convert";
import { Success } from "../../public/img/svg";
import Seo from "../../lib/Seo";

export const getStaticProps = async () => {
  const postDatas = await loadYamls([
    "reservation/common.yml",
    "reservation/step5.yml",
  ]);
  return {
    props: {
      data: postDatas,
    },
  };
};

export default function Step5({ data }) {
  return (
    <PageTransition>
      <Seo pageTitle="予約の申し込み完了 - Shotfelice" noIndex />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        pt={[20, 50]}
      >
        <Box maxWidth={960} width="100%" overflow="hidden" px={["4%", 20]}>
          {/* ---- Step Header ---- */}
          <Nav nav={data.nav} />
          <Box my={[20, 50]} width="100%" borderBottom="solid 1px #e1e1e1" />
          {/* ---- Step title ---- */}
          <Box fontSize={[30, 34]} fontWeight="bold" mb={27} mt={[40, 50]}>
            {data.success_msg.title}
          </Box>
          <Box
            backgroundColor="green"
            width="100%"
            color="white"
            fontSize={18}
            py={[10, 20]}
            px={[15, 30]}
            display="flex"
            alignItems="center"
            mb={[30, 40]}
          >
            <Box mr={10}>
              <Success />
            </Box>
            {data.success_msg.body}
          </Box>

          <Box
            fontSize={[16, 20]}
            lineHeight={2}
            mb={200}
            display={["none", "block"]}
          >
            {insertBreak(data.success_msg.foot)}
          </Box>
          <Box
            fontSize={[16, 20]}
            lineHeight={2}
            mb={200}
            display={["block", "none"]}
          >
            {data.success_msg.foot.split("<br>")}
          </Box>
        </Box>
      </Box>
    </PageTransition>
  );
}
