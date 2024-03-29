import React, { useState } from "react";
import { Box, MotionDiv } from "../../styles/components";
import { PageTransition } from "../../components/PageTransition";
import { Nav } from "../../components/reservation/Nav";
import { loadYamls } from "../../lib/posts";
import { convertLink, insertComma } from "../../lib/convert";
import Image from "next/image";
import Head from "next/head";
import { Button } from "../../components/Button";
import { usePersist } from "../../lib/usepersist";
import { ListCheck } from "../../public/img/svg";
import { keys } from "../../lib/localStorageKeys";
import Seo from "../../lib/Seo";

export const getStaticProps = async () => {
  const postDatas = await loadYamls([
    "reservation/common.yml",
    "reservation/step1.yml",
  ]);
  return {
    props: {
      data: postDatas,
    },
  };
};

export default function Step1({ data }) {
  const [_active, _setActive] = usePersist(keys.category, "");
  const [category_detail, setCategory_detail] = usePersist(
    keys.category_detail,
    []
  );
  const [active, setActive] = useState(_active);

  return (
    <PageTransition>
      <Seo pageTitle="撮影のご予約 - Shotfelice" />
      <Box display="flex" justifyContent="center" pt={[20, 50]}>
        <Box maxWidth={910} width="100%" overflow="hidden" px={["4%", 20]}>
          <Nav nav={data.nav} />
          <Box my={[10, 24]} width="100%" borderBottom="solid 1px #e1e1e1" />

          <Box>
            <Box
              display="flex"
              alignItems="center"
              fontWeight="bold"
              color="black"
            >
              <Box fontSize={34}>1.</Box>
              <Box fontSize={24}>{data.nav[0]}</Box>
            </Box>
            <Box fontSize={16} mt={26} mb={26} lineHeight={2}>
              {convertLink(data.content)}
            </Box>
          </Box>

          <Box
            display="flex"
            width="100%"
            flexWrap="wrap"
            style={{ boxSizing: "border-box" }}
          >
            {Object.keys(data.categories).map((key, i) => {
              return (
                <Card
                  key={i}
                  active={active}
                  setActive={setActive}
                  _setActive={_setActive}
                  setCategory_detail={setCategory_detail}
                  data={data.categories[key]}
                  index={i}
                />
              );
            })}
          </Box>

          <Button
            href="/reservation/step2"
            mt={42}
            mb={200}
            disable={active === ""}
          >
            {data.next_btn_text}
          </Button>
        </Box>
      </Box>
    </PageTransition>
  );
}

function Card({
  active,
  setActive,
  _setActive,
  setCategory_detail,
  data,
  index,
}) {
  return (
    <MotionDiv
      whileHover={{ opacity: 0.8 }}
      onTap={() => {
        setCategory_detail([]);
        if (active !== data.title_en) {
          setActive(data.title_en);
          _setActive(data.title_en);
        } else {
          setActive("");
          _setActive("");
        }
      }}
      mr={[0, index % 2 === 0 ? 5 : 10]}
      ml={[0, index % 2 === 1 ? 5 : 10]}
      mb={[10, index < 2 ? 30 : 0]}
      style={{ cursor: "pointer" }}
      height={"auto"}
      width={["100%", "calc(50% - 15px)"]}
      background="white"
      display="flex"
      alignItems={["flex-start", "center"]}
      justifyContent="center"
    >
      <Box width={[140, 190]} height={[140, 190]} position="relative">
        <MotionDiv
          position="absolute"
          width="100%"
          height="100%"
          top={0}
          left={0}
          background="rgba(0,0,0,0)"
          initial={{ backgroundColor: "rgba(0,0,0,0)" }}
          variants={{
            active: {
              backgroundColor: "rgba(0,0,0,0.2)",
            },
            inactive: {
              backgroundColor: "rgba(0,0,0,0.0)",
            },
          }}
          animate={active === data.title_en ? "active" : "inactive"}
          transition={{ duration: 0.2, ease: "linear" }}
          zIndex={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <ListCheck
            stroke="white"
            toggle={active === data.title_en}
            width={80}
            height={80}
          />
        </MotionDiv>

        <Image src={data.url} width={190} height={190} alt={data.url} />
      </Box>
      <Box
        width={["calc(100% - 140px)", "calc(100% - 190px)"]}
        height={["auto", 190]}
        display="flex"
        alignItems="flex-start"
        justifyContent={["flex-start", "center"]}
        flexDirection="column"
        border={["none", "solid 1px #e1e1e1"]}
        px={20}
        pr={[0, 20]}
      >
        <Box fontSize={[18, 20]} fontWeight="bold" mb={10}>
          {data.title}
        </Box>
        {data.price && (
          <Box fontSize={16} mb={8}>
            ¥{insertComma(data.price)}
          </Box>
        )}
        <Box fontSize={14} lineHeight={1.6}>
          {data.content}
        </Box>
      </Box>
    </MotionDiv>
  );
}
