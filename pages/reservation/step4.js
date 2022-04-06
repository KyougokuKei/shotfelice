import React, { useState, useEffect } from "react";
import { Box, MotionDiv } from "../../styles/components";
import { PageTransition } from "../../components/PageTransition";
import { Nav } from "../../components/reservation";
import { loadYamls } from "../../lib/posts";

import { reservationSubmit } from "../../lib/mailsubmit";
import Head from "next/head";
import { Button, BackButton } from "../../components/Button";
import { RequestBox, GoldTitle, ConfirmBox } from "../../components/step4";
import { insertComma, getFromatDate, calcFee } from "../../lib/convert";
import { keys } from "../../lib/localStorageKeys";
import { SendingAnimation } from "../../components/SendingAnimation";
import Seo from "../../lib/Seo";

export const getStaticProps = async () => {
  const postDatas = await loadYamls([
    "reservation/common.yml",
    "reservation/step1.yml",
    "reservation/step2.yml",
    "reservation/step4.yml",
  ]);
  return {
    props: {
      data: postDatas,
    },
  };
};

export default function Step4({ data }) {
  const [isSending, setIsSending] = useState(false);
  let inputData = {};
  let formatData = {};
  let fee = {};
  if (typeof document !== "undefined") {
    for (let key of Object.keys(keys)) {
      inputData[key] = JSON.parse(localStorage.getItem(`hooks:${key}`));
    }

    formatData = {
      [data.input_confirmation.col1[0]]:
        data.categories[inputData[keys.category]].title,
      [data.input_confirmation.col1[1]]:
        inputData[keys.number_of_shots].join("・"),
      [data.input_confirmation.col1[2]]:
        inputData[keys.prefecture] + "/" + inputData[keys.address],
      [data.input_confirmation.col1[3]]: inputData[keys.phone],
      [data.input_confirmation.col2[0]]:
        inputData[keys.category_detail].join("・"),
      [data.input_confirmation.col2[1]]: inputData[keys.data_type].join("・"),
      [data.input_confirmation.col2[2]]: getFromatDate(inputData),
      [data.input_confirmation.col2[3]]: inputData[keys.email],
      [data.input_confirmation.col3[0]]: inputData[keys.request],
    };
    const fkeys =
      data.input_confirmation.col1 +
      "," +
      data.input_confirmation.col2 +
      "," +
      data.input_confirmation.col3;
    formatData["keys"] = fkeys;
    fee = calcFee(data, inputData, formatData);
  }

  return (
    <PageTransition>
      <Seo pageTitle="入力の確認 - Shotfelice" noIndex />
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
          <Box my={[20, 30]} width="100%" borderBottom="solid 1px #e1e1e1" />
          {/* ---- Step title ---- */}
          <Box
            display="flex"
            alignItems="center"
            fontWeight="bold"
            color="black"
          >
            <Box fontSize={34}>4.</Box>
            <Box fontSize={24}>{data.nav[3]}</Box>
          </Box>
        </Box>

        <Box
          width="100%"
          maxWidth={["100%", 960, 1400]}
          borderTop={["none", "solid 1px #e1e1e1"]}
          mt={24}
          mb={200}
          display="flex"
          alignItems="flex-start"
          justifyContent="center"
          px={["4%", 20]}
          flexDirection={["column", "row"]}
        >
          {/* ---- [Left]  Input Confirmation ---- */}
          <Box width={["100%", "60%"]}>
            <GoldTitle>{data.input_confirmation.title}</GoldTitle>
            <Box
              display="flex"
              justifyContent="center"
              flexDirection={["column", "row"]}
            >
              {/* --- col1 */}
              <Box className="col1" width={["100%", "50%"]}>
                {data.input_confirmation.col1.map((title, index) => {
                  return (
                    <ConfirmBox
                      key={index}
                      title={title}
                      value={formatData[title]}
                    />
                  );
                })}
              </Box>
              {/* --- col2 */}
              <Box className="col2" width={["100%", "50%"]}>
                {data.input_confirmation.col2.map((title, index) => {
                  return (
                    <ConfirmBox
                      key={index}
                      title={title}
                      value={formatData[title]}
                    />
                  );
                })}
              </Box>
            </Box>
            {/*  ---- col3 */}
            {inputData?.request && <RequestBox request={inputData?.request} />}
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              mr={[20, 40, 80]}
              mt={32}
            >
              <BackButton href="/reservation/step3" width={120}>
                編集する
              </BackButton>
            </Box>
          </Box>
          {/* ---------------------------- [Left]  Input Confirmation END ---------------------------- */}

          {/* ---- [Right]  Input Confirmation ---- */}
          <Box width={["100%", "40%"]}>
            <GoldTitle>{data.payment_fee.title}</GoldTitle>
            <Box>
              {data.payment_fee.fee_titles.map((title, index) => {
                return (
                  <FeeBox
                    key={index}
                    title={title}
                    inputData={fee[title] ? fee[title][0] : ""}
                    price={fee[title] ? fee[title][1] : ""}
                  />
                );
              })}
            </Box>

            {/* Warning */}
            <Box display="block" my={32}>
              <Box fontSize={20} fontWeight="bold" mb={16}>
                {data.warning.title}
              </Box>
              {data.warning.content_list.map((content, index) => {
                return (
                  <Box key={index} lineHeight={1.9} fontSize={15} mb={8}>
                    {String(index + 1) + ". "}
                    {content}
                  </Box>
                );
              })}
            </Box>
            {/* sum */}
            <Box
              my={20}
              py={24}
              mb={32}
              borderBottom="solid 1px #B8B8B8"
              borderTop="solid 1px #B8B8B8"
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
              fontWeight="bold"
            >
              <Box fontSize={20} mr="auto">
                {data?.payment_fee?.sum_text}
              </Box>
              <Box fontSize={24}>
                ¥
                {insertComma(
                  fee[data.payment_fee.sum_text]
                    ? fee[data.payment_fee.sum_text]
                    : ""
                )}
              </Box>
            </Box>
            {/* 予約申し込みボタン */}
            <Button
              href="/"
              onClick={(e) => {
                e.preventDefault();
                reservationSubmit(e, formatData, setIsSending);
              }}
            >
              {data.reservation_btn_text}
            </Button>
            <SendingAnimation isSending={isSending} />

            {/* end */}
          </Box>
        </Box>
      </Box>
    </PageTransition>
  );
}

function FeeBox(props) {
  if (props.price !== 0) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        borderBottom="solid 1px #B8B8B8"
        pb={16}
        fontWeight="bold"
        fontSize={16}
        color="grey5"
        mb={20}
      >
        <Box
          display="flex"
          flexDirection={["column", "column", "row"]}
          alignItems={["flex-start", "flex-start", "center"]}
          justifyContent="center"
          mr="auto"
        >
          <Box mb={[8, 8, 0]}>{props.title}</Box>
          <Box mx={10} display={["none", "none", "block"]}>
            /
          </Box>
          <Box>{props.inputData}</Box>
        </Box>
        <Box>¥{insertComma(props.price)}</Box>
      </Box>
    );
  } else {
    return null;
  }
}
