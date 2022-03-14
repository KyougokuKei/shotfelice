import React, { useState, useEffect } from "react";
import { Box, MotionDiv, MotionInput } from "../../styles/components";
import { PageTransition } from "../../components/PageTransition";
import {
  Nav,
  SelectList,
  PlanTitle,
  Dropdown,
  RequiredBox,
} from "../../components/reservation";
import { getPostData } from "../../lib/posts";

import Head from "next/head";
import { Button } from "../../components/Button";

import { usePersist } from "../../lib/usepersist";

export const getStaticProps = async () => {
  const postData = await getPostData("reservation");
  return {
    props: {
      data: postData,
    },
  };
};

export default function Step3({ data }) {
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [prefecture, setPrefecture] = useState("");
  const [_address, _setAddress] = usePersist("address", "");
  const [address, setAddress] = useState(_address);

  return (
    <PageTransition>
      <Head>
        <title>Shotfelice-ご予約-撮影カテゴリの選択</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box display="flex" justifyContent="center" pt={[20, 50]}>
        <Box maxWidth={910} width="100%" overflow="hidden" px={["4%", 20]}>
          {/* ---- Step Header ---- */}
          <Nav nav={data.nav} />
          <Box my={[20, 50]} width="100%" borderBottom="solid 1px #e1e1e1" />

          {/* ---- Step Content ---- */}
          <Box
            display="flex"
            alignItems="center"
            fontWeight="bold"
            color="black"
          >
            <Box fontSize={34}>3.</Box>
            <Box fontSize={24}>{data.nav[2].slice(2, data.nav[2].length)}</Box>
          </Box>

          {/* ---- Next Button ---- */}
          <Button href="/reservation/step2" mt={42} mb={200}>
            {data.next_btn_text}
          </Button>
        </Box>
      </Box>
    </PageTransition>
  );
}