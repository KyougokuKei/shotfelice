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
import { loadYamls } from "../../lib/posts";

import Head from "next/head";
import Image from "next/image";
import { BackButton, Button } from "../../components/Button";

import { usePersist } from "../../lib/usepersist";
import { insertBreak, insertCommaList } from "../../lib/convert";
import { keys } from "../../lib/localStorageKeys";
import Seo from "../../lib/Seo";

export const getStaticProps = async () => {
  const postData = await loadYamls([
    "reservation/common.yml",
    "reservation/step2.yml",
    "reservation/step1.yml",
  ]);
  return {
    props: {
      data: postData,
    },
  };
};

export default function Step2({ data }) {
  const [category_detail, setCategory_detail] = usePersist(
    keys.category_detail,
    []
  );
  const [number_of_shots, setNumber_of_shots] = usePersist(
    keys.number_of_shots,
    []
  );
  const [data_type, setData_type] = usePersist(keys.data_type, []);
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [prefecture, setPrefecture] = useState("");
  const [_address, _setAddress] = usePersist(keys.address, "");
  const [address, setAddress] = useState(_address);
  const [category, setCategory] = usePersist(keys.category, "wedding");
  console.log(
    category_detail,
    number_of_shots,
    data_type,
    month,
    day,
    time,
    prefecture,
    address
  );
  console.log(category_detail.length === 0);
  return (
    <PageTransition>
      <Seo pageTitle="予約プランの選択 - Shotfelice" noIndex />
      <Box display="flex" justifyContent="center" pt={[20, 50]}>
        <Box maxWidth={910} width="100%" overflow="hidden" px={["4%", 20]}>
          {/* ---- Step Header ---- */}
          <Nav nav={data.nav} />
          <Box my={[10, 24]} width="100%" borderBottom="solid 1px #e1e1e1" />

          {/* ---- Step Content ---- */}
          <Box
            display="flex"
            alignItems="center"
            fontWeight="bold"
            color="black"
          >
            <Box fontSize={34}>2.</Box>
            <Box fontSize={24}>{data.nav[1]}</Box>
          </Box>

          {/* ---- Select Input ---- */}
          <PlanTitle data={data.category} multipleSelect required />

          <Box
            mb={24}
            ml={10}
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
          >
            <MotionDiv
              // maxWidth={"100%"}
              // // height={100}
              border="solid 1px white"
              boxShadow="0 4px 8px rgba(0,0,0, 0.2)"
              animate={{ rotate: -2 }}
              mr={[30, 60]}
            >
              <Image
                src={"/img/category/" + category + ".jpg"}
                width={100}
                height={100}
                alt={category}
              />
            </MotionDiv>
            <Box fontSize={16} fontWeight="normal" lineHeight={1.8}>
              {data.categories[category].title}
              {insertBreak(data.category.content)}
            </Box>
          </Box>

          <SelectList
            multipleSelect={category === "wedding"}
            list={Object.keys(data.category.categories[category])}
            price={insertCommaList(
              Object.values(data.category.categories[category])
            )}
            value={category_detail}
            setValue={setCategory_detail}
          />

          <PlanTitle data={data.number_of_shots} />

          <Box
            mb={24}
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
          >
            <Box
              width={170}
              minWidth={140}
              mr={[8, 16]}
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              fontWeight="bold"
            >
              <Image
                src={"/img/general/photos.png"}
                width={513}
                height={412}
                alt="photos"
              />
              <Box mt={[-10, -20]} fontSize={16}>
                60枚
              </Box>
              <Box fontSize={14}>free</Box>
            </Box>
            <Box
              fontSize={60}
              color="grey5"
              mr={[15, 30]}
              display={["none", "block"]}
            >
              +
            </Box>
            <Box fontSize={[16, 16]} fontWeight="normal" lineHeight={1.8}>
              {insertBreak(data.number_of_shots.content)}
            </Box>
          </Box>

          <SelectList
            list={Object.keys(data.number_of_shots.fee)}
            price={insertCommaList(Object.values(data.number_of_shots.fee))}
            value={number_of_shots}
            setValue={setNumber_of_shots}
          />

          <PlanTitle data={data.data_type} multipleSelect />

          <Box
            mb={24}
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
          >
            <Box
              width={80}
              minWidth={80}
              mr={16}
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              fontWeight="bold"
            >
              <Image
                src={"/img/general/usb.png"}
                width={296}
                height={304}
                alt="usb"
              />
              <Box mt={0} fontSize={16}>
                USB
              </Box>
              <Box fontSize={14}>free</Box>
            </Box>
            <Box
              fontSize={60}
              color="grey5"
              mr={30}
              display={["none", "block"]}
            >
              +
            </Box>
            <Box
              fontSize={16}
              fontWeight="normal"
              lineHeight={1.8}
              display={["none", "block"]}
            >
              {insertBreak(data.data_type.content)}
            </Box>
            <Box
              fontSize={16}
              fontWeight="normal"
              lineHeight={1.8}
              display={["block", "none"]}
            >
              {data.data_type.content.replace(/<br>/g, "")}
            </Box>
          </Box>

          <SelectList
            multipleSelect
            list={Object.keys(data.data_type.fee)}
            price={insertCommaList(Object.values(data.data_type.fee))}
            value={data_type}
            setValue={setData_type}
          />
          {/* --- Input title---- */}
          <Box fontWeight="bold" fontSize={26} mt={50} mb={14}>
            {data.date_and_place.title}
          </Box>
          <Box fontSize={16} mb={40} lineHeight={1.6}>
            {data.date_and_place.content}
          </Box>

          {/* ---- Date Input ---- */}
          <Box
            fontSize={12}
            mb={4}
            color="grey7"
            display="flex"
            alignItems="center"
          >
            {data.date.date_title_en}
            <RequiredBox required />
          </Box>
          <Box
            width="100%"
            height={84}
            py={10}
            px={20}
            display="flex"
            border="solid 1px #e1e1e1"
          >
            <Dropdown
              strage_key={keys.month}
              value={month}
              setValue={setMonth}
              list={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
              placeholder="月"
              prefix="月"
              width={"70%"}
            />
            <Box width="1px" background="#e1e1e1" mx={10} />
            <Dropdown
              strage_key={keys.day}
              value={day}
              setValue={setDay}
              list={[...Array(31).keys()].map((i) => i + 1)}
              placeholder="日"
              prefix="日"
              width={"30%"}
            />
          </Box>
          <Box
            width="100%"
            height={84}
            py={10}
            px={20}
            display="flex"
            border="solid 1px #e1e1e1"
            borderTop="none"
          >
            <Dropdown
              strage_key={keys.time}
              value={time}
              setValue={setTime}
              list={data.date.time_list}
              placeholder="時間"
            />
          </Box>

          {/* ---- Palce Input ---- */}
          <Box
            fontSize={12}
            mb={4}
            mt={20}
            color="grey7"
            display="flex"
            alignItems="center"
          >
            {data.place.place_title_en}
            <RequiredBox required />
          </Box>
          <Box
            width="100%"
            py={10}
            px={20}
            display="flex"
            flexDirection="column"
            border="solid 1px #e1e1e1"
          >
            <Dropdown
              strage_key={keys.prefecture}
              value={prefecture}
              setValue={setPrefecture}
              list={Object.keys(data.place.fee)}
              placeholder="都道府県"
            />
            <Box width="100%" height={1} background="#e1e1e1" my={10} />
            <MotionInput
              height={64}
              px={20}
              placeholder={data.place.address2_placeholder}
              style={{ outline: "none" }}
              whileFocus={{ border: "1px solid #333", scale: 1.005 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
                _setAddress(e.target.value);
              }}
            />
          </Box>

          {/* ---- Next Button ---- */}
          <Button
            href="/reservation/step3"
            mt={42}
            disable={
              !(
                category_detail.length !== 0 &&
                number_of_shots.length !== 0 &&
                data_type.length !== 0 &&
                month !== "" &&
                day !== "" &&
                time !== "" &&
                prefecture !== "" &&
                address !== ""
              )
            }
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
            <BackButton href="/reservation/step1" mt={10} mb={200} width={80}>
              {data.back_btn_text}
            </BackButton>
          </Box>
        </Box>
      </Box>
    </PageTransition>
  );
}
