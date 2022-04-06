import React, { useState } from "react";
import { Box, MotionInput, MotionTextarea } from "../../styles/components";
import { PageTransition } from "../../components/PageTransition";
import { Nav, RequiredBox } from "../../components/reservation";
import { loadYamls } from "../../lib/posts";

import Head from "next/head";
import { Button, BackButton } from "../../components/Button";

import { usePersist } from "../../lib/usepersist";
import { keys } from "../../lib/localStorageKeys";
import Seo from "../../lib/Seo";

export const getStaticProps = async () => {
  const postDatas = await loadYamls([
    "reservation/common.yml",
    "reservation/step3.yml",
  ]);
  return {
    props: {
      data: postDatas,
    },
  };
};

export default function Step3({ data }) {
  const [_phone, _setPhone] = usePersist(keys.phone, "");
  const [phone, setPhone] = useState(_phone);
  const [_email, _setEmail] = usePersist(keys.email, "");
  const [email, setEmail] = useState(_email);
  const [_request, _setRequest] = usePersist(keys.request, "");
  const [request, setRequest] = useState(_request);

  return (
    <PageTransition>
      <Seo pageTitle="お客様情報の入力 - Shotfelice" noIndex />
      <Box display="flex" justifyContent="center" pt={[20, 50]}>
        <Box maxWidth={910} width="100%" overflow="hidden" px={["4%", 20]}>
          {/* ---- Step Header ---- */}
          <Nav nav={data.nav} />
          <Box my={[10, 24]} width="100%" borderBottom="solid 1px #e1e1e1" />
          {/* ---- Step title ---- */}
          <Box
            display="flex"
            alignItems="center"
            fontWeight="bold"
            color="black"
          >
            <Box fontSize={34}>3.</Box>
            <Box fontSize={24}>{data.nav[2]}</Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            fontSize={26}
            fontWeight="bold"
            color="black"
            mt={32}
            mb={24}
          >
            {data.title}
          </Box>
          {/* ---- Custumer Info Input ---- */}
          {/* phone */}
          <Box
            fontSize={12}
            mb={4}
            mt={30}
            color="grey7"
            display="flex"
            alignItems="center"
          >
            {data.phone.title_en}
            <RequiredBox required />
          </Box>
          <MotionInput
            width="100%"
            height={64}
            px={20}
            placeholder={data.phone.placeholder}
            style={{ outline: "none" }}
            whileFocus={{ border: "1px solid #333", scale: 1.005 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            value={phone}
            border="solid 1px #e1e1e1"
            fontSize={16}
            onChange={(e) => {
              setPhone(e.target.value);
              _setPhone(e.target.value);
            }}
          />
          {/* email */}
          <Box
            fontSize={12}
            mb={4}
            mt={30}
            color="grey7"
            display="flex"
            alignItems="center"
          >
            {data.email.title_en}
            <RequiredBox required />
          </Box>
          <MotionInput
            width="100%"
            height={64}
            px={20}
            placeholder={data.email.placeholder}
            style={{ outline: "none" }}
            whileFocus={{ border: "1px solid #333", scale: 1.005 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            value={email}
            border="solid 1px #e1e1e1"
            fontSize={16}
            onChange={(e) => {
              setEmail(e.target.value);
              _setEmail(e.target.value);
            }}
          />
          {/* request */}
          <Box
            fontSize={12}
            mb={4}
            mt={30}
            color="grey7"
            display="flex"
            alignItems="center"
          >
            {data.request.title_en}
            <RequiredBox />
          </Box>
          <MotionTextarea
            width="100%"
            height={200}
            px={20}
            pt={20}
            placeholder={data.request.placeholder}
            style={{ outline: "none" }}
            whileFocus={{ border: "1px solid #333", scale: 1.005 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            value={request}
            border="solid 1px #e1e1e1"
            fontSize={16}
            onChange={(e) => {
              setRequest(e.target.value);
              _setRequest(e.target.value);
            }}
          />
          {/* ---- Next Button ---- */}
          <Button
            href="/reservation/step4"
            mt={42}
            disable={!(phone !== "" && email !== "")}
          >
            {data.next_btn_text}
          </Button>
          <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mt={20}
          >
            <BackButton href="/reservation/step2" mt={10} mb={200} width={80}>
              {data.back_btn_text}
            </BackButton>
          </Box>
        </Box>
      </Box>
    </PageTransition>
  );
}
