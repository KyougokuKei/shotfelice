import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import { PageTransition } from '../components/PageTransition';
import { Box, MotionDiv, Clickable, Text } from '../styles/components';

import { getPostData, getImgPaths } from '../lib/posts';
import HamburgerMenu from '../components/HamburgerMenu';
import { Button } from '../components/Button';

import OutsideClickHandler from 'react-outside-click-handler';

import { RightArrow, LeftArrow } from '../components/SlickSlider/Arrow';
import { SlickSlider } from '../components/SlickSlider/Slider';
import { Logo, Instagram, Phone, Send } from "../public/img/svg";


export const getStaticProps = async () => {
  const postData = await getPostData("home");
  const imgPaths = await getImgPaths();
  return {
    props: {
      data: postData,
      imgPaths: imgPaths,
    }
  }
}

export default function Home({ data, imgPaths }) {
  // ホームディレクトリのみpadding-top : 0;
  if (typeof document !== 'undefined') {
    document.getElementsByTagName("body")[0].style.paddingTop = 0;
  }

  return (
    <PageTransition width="100%" height="100%" styles={{ overflow: "hidden" }}>
      <Head>
        <title>Shotfelice</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Background Image */}
      <Box width="100vw" height="100%" position="absolute" overflow="hidden" zIndex="-1">
        <Image
          src="/img/general/background_image-min.jpg"
          alt="background_image"
          layout="fill"
          objectFit="cover"
          quality={100}
        >
        </Image>
      </Box>

      <TopBar top_bar={data.top_bar} />
      <NavBar nav={data.nav} />
      <Subheading subheading={data.subheading} nav={data.nav} />
      <Garally garally={data.garally} imgPaths={imgPaths} />
      <Deliver deliver={data.deliver} />

    </PageTransition>
  )
}

function Deliver({ deliver }) {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">

      {/* Deliver Head */}
      <Box
        pt={[60, 80, 100]}
        display="flex" alignItems="center" justifyContent="center" flexDirection="column"
      >
        <Text
          pl={[0, 6]}
          pb={10}
          fontSize={16}
          color="grey5"
        >
          {deliver.title_en}
        </Text>
        <Text
          fontSize={[30, 40, 40]}
          fontWeight="bold"
          color="black"
          mb={20}
        >
          {deliver.title_jp}
        </Text>
        <Send />
      </Box>

      {/* Deliver Body */}
      <Box
        px={[10, 80]}
        pb={[0, 48, 48]}
        pt={[0, 30, 30]}
        pl={["10%", 30, 80]}
        mb={[50, 0, 0]}
        display="flex"
        flexDirection={["column", "row"]}
        maxWidth={980}
      >
        {[...Array(deliver.step_title.length).keys()].map((index) => {
          const title = deliver.step_title[index];
          const content = deliver.step_content[index];
          return (
            <Box
              key={index}
              position="relative"
              style={{ boxSizing: "border-box" }}
              width={["100%", "33.3333333%"]}
              minWidth={255}
              maxWidth={["100%", "100%", "100%"]}
              px={20}
              pr={["10%", 20, 20]}
              pt={30}
              ml={10}
              pb={[20, 0]}
            >
              <Box
                position="absolute"
                width={20}
                height={20}
                top={[30, -10]}
                left={[-10, 18]}
                borderRadius={20}
                backgroundColor="#eeeeee"
              />

              <Box
                position="absolute"
                width={["1px", index === deliver.step_title.length - 1 ? "calc(100% - 40px)" : "100%"]}
                height={[index !== 0 ? "100%" : "calc(100% - 30px)", 1]}
                background="#eeeeee"
                top={[index === 0 ? 30 : 0, 0]}
                left={[0, index === 0 ? 30 : 0]}
                display={["block", "block"]}
              />

              <Box display="flex" alignItems="center" justifyContent="flex-start">
                <Text
                  mr={10}
                  display="flex" alignItems="center" justifyContent="center"
                  fontSize={[16, 20]}
                  color="black"
                  border="solid 1px #e9e9e9"
                  width={24}
                  height={24}
                >
                  {index + 1}
                </Text>
                <Text
                  display="inline"
                  fontWeight="bold"
                  fontSize={[20, 24]}
                  color="black"
                >
                  {title}
                </Text>
              </Box>
              <Text
                pl={40}
                pt={6}
                fontSize={14}
                color="grey5"
                display={["none", "block"]}
              >
                step{index}
              </Text>
              <Text
                pt={16}
                lineHeight="1.43"
                fontWeight="bold"
                fontSize={14}
                color="grey5"
              >
                {content}
              </Text>
            </Box>
          );
        })}
      </Box>

      {/* Deliver Footer */}
      <Box
        justifyContent="center"
        mb={100}
        width={["calc(100% - 60px)", "inherit", "inherit"]}
        display={["none", "block", "block"]}
      >
        <Button width={["100%", "inherit", "inherit"]} href="/reservation">
          撮影を予約する
        </Button>
      </Box>

    </Box>
  )
}

function Garally({ garally, imgPaths }) {
  return (
    <Box background="white" >
      <Box
        pt={60}
        pb={[24, 48]}
        pl={[0, 80]}
        display={["flex", "block", "block"]}
        justifyContent={["center", "none"]}
        alignItems={["center", "none"]}
        flexDirection="column"
      >
        <Text
          pl={[0, 6]}
          pb={10}
          fontSize={16}
          color="grey5"
        >
          {garally.title_en}
        </Text>
        <Text
          fontWeight="bold"
          fontSize={[30, 40, 40]}
          color="black"
        >
          {garally.title_jp}
        </Text>
      </Box>
      <SlickSlider imgPaths={imgPaths}></SlickSlider>
    </Box>
  )
}

function NavBar({ nav }) {
  const [isOpen, setIsOpen] = useState(false);
  const variants = {
    false: {
      opacity: 0,
      height: 0
    },
    true: {
      opacity: 1,
      height: 300
    }
  }

  return (
    <Box position="relative" height={[40, 90]}>
      <OutsideClickHandler onOutsideClick={() => {
        if (isOpen) {
          setIsOpen(false);
        }
      }}>
        <HamburgerMenu
          position="absolute"
          right="5%"
          top={30}
          isOpen={isOpen}
          onClick={() => { setIsOpen(!isOpen); }}
          display={["block", "none"]}
          zIndex={2}
        />
        <MotionDiv
          position="absolute"
          px={["5%", 80]}
          py={[40, 0]}
          width="100%"
          display="flex"
          flexDirection={["column", "row"]}
          alignItems={["flex-start", "center"]} justifyContent="flex-start"
          mt={[0, 30]}
          background={["white", "none"]}
          variants={variants}
          transition={{ duration: 0.2 }}
          initial={String(isOpen)}
          animate={String(isOpen)}
          height={["auto", "auto !important"]}
          opacity={["1", "1 !important"]}
        >
          {[...Array(nav.href.length).keys()].map(i => {
            return (
              <Link key={i} href={nav.href[i]} passHref>
                <Clickable ml={i === 0 ? 0 : [0, 30]} mb={[20, 0]}>
                  <Text
                    color={i === 0 ? "gold" : "black"}
                    fontSize={16}
                    fontWeight="bold"
                  >
                    {nav.title_jp[i]}
                  </Text>
                  <Text
                    pl={4}
                    color={i === 0 ? "gold" : "black"}
                    fontSize={12}
                    fontWeight="bold"
                  >
                    {nav.title_en[i]}
                  </Text>
                </Clickable>
              </Link>
            )
          })}
        </MotionDiv>
      </OutsideClickHandler>
    </Box>
  );
}


function TopBar({ top_bar }) {
  return (
    <Box
      px={["5%", 80]}
      width="100%"
      height={54}
      alignItems="center" justifyContent="center"
      display="flex"
      pt={10}
    >
      <Text
        display="flex" alignItems="center" justifyContent="center"
        color="black"
        fontSize={16}
      >
        <Logo width={26} height={26} />
        {/* <Image width={26} height={26} src="/img/general/logo.png" alt="logo"></Image> */}
        <Box
          as="span"
          color="black"
          fontSize={26}
          mr={10}
          ml={10}
          fontWeight="bold"
        >
          {top_bar.company}
        </Box>
        <Text display={["none", "block"]}>
          {top_bar.short_catchphrase_jp}
        </Text>
      </Text>
      <Text
        ml="auto"
        color="black"
        fontSize={16}
        display={["none", "none", "block"]}
      >
        {top_bar.short_catchphrase_en}
      </Text>
      <Box display="flex" ml="auto">
        <Clickable
          as="a"
          href="https://www.instagram.com/hamu_kimi5118"
          target="_blank"
          mr={[0, 20]}
          title="Instagram"
        >
          <Instagram width={18} height={18} />
          {/* <Image src="/img/svg/instagram.svg" width={18} height={18} alt="instagram"></Image> */}
        </Clickable>
        <Box alignItems="center" justifyContent="center" display={["none", "flex"]}>
          <Phone width={18} height={18} />
          {/* <Image width={18} height={18} src="/img/svg/phone.svg" alt="phone"></Image> */}
          <Text color="black" fontSize={16} ml={4} >
            {top_bar.phone_number}
          </Text>
        </Box>
      </Box>
    </Box >
  );
}

function Subheading({ subheading, nav }) {
  return (
    <Box
      display="flex" alignItems="flex-start" justifyContent="center" flexDirection="column"
      style={{ boxSizing: "border-box" }}
      px={["5%", "10%", "10%"]}
      width="100%"
      height={["calc(100% - 94px)", "calc(100% - 144px)"]}
    >
      <Text
        mb={30}
        color="black"
        fontSize={[24, 28]}
      >
        {subheading.subtitle}
      </Text>
      <Text
        mb={30}
        color="black"
        fontSize={[54, 64, 64]}
        lineHeight="1.05"
        fontWeight="bold"
      >
        {
          subheading.title.split('<br>').map((str, index) => {
            return (
              <React.Fragment key={index}>{str}<br /></React.Fragment>
            )
          })
        }
      </Text>
      <Text
        mb={30}
        maxWidth={500}
        color="grey5"
        fontSize={14}
        lineHeight="2.07"
        fontWeight="bold"
        style={{ textShadow: "0 0 2px  rgba(255, 255, 255, 1" }}
      >
        {subheading.body}
      </Text>
      <Button height={50} href={nav.href[1]}>
        撮影を予約する
      </Button>
    </Box>
  )
}
