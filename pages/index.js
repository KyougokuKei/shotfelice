import Head from 'next/head';
import Image from 'next/image';

import { PageTransition } from '../components/PageTransition'
import { Box, MotionDiv, Clickable, Text } from '../styles/components'

import { getPostData } from '../lib/posts'

export const getStaticProps = async () => {
  const postData = await getPostData("home");

  return {
    props: {
      data: postData,
    }
  }
}


export default function Home({ data }) {
  // ホームディレクトリのみpadding-top : 0;
  if (typeof document !== 'undefined') { document.getElementsByTagName("body")[0].style.paddingTop = 0; document.getElementsByTagName("body")[0].style.height = 0; }

  return (
    <PageTransition width="100%" height="100vh">

      <Head>
        <title>Shotfelice</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Sawarabi+Gothic&display=swap" rel="stylesheet" />
      </Head>

      {/* Background Image */}
      <Box width="100vw" height="100vh" position="fixed" overflow="hidden" zIndex="-1">
        <Image
          src="/img/background_image.jpg"
          alt="background_image"
          layout="fill"
          objectFit="cover"
          quality={100}
        >
        </Image>
      </Box>

      {/* Home Header */}
      <Box
        px={["10%", 80]}
        width="100%"
        height={54}
        alignItems="center" justifyContent="center"
        display={["none", "flex", "flex"]}
      >
        <Text
          display="flex" alignItems="center" justifyContent="center"
          color="black"
          fontSize={16}
          pt={10}
        >
          <Image width={26} height={26} src="/img/logo.png" alt="logo"></Image>
          <Box
            as="span"
            color="black"
            fontSize={26}
            mr={10}
            ml={10}
            fontWeight="bold"
          >
            {data.info.company}
          </Box>
          {data.info.short_catchphrase_jp}
        </Text>
        <Text
          ml="auto"
          color="black"
          fontSize={16}
          display={["none", "none", "block"]}
        >
          {data.info.short_catchphrase_en}
        </Text>
        <Box display="flex" ml="auto">
          <Clickable
            as="a"
            href="https://www.instagram.com/hamu_kimi5118"
            target="_blank"
            mr={20}
          >
            <Image src="/img/svg/instagram.svg" width={18} height={18} alt="instagram"></Image>
          </Clickable>
          <Image width={18} height={18} src="/img/svg/phone.svg" alt="phone"></Image>
          <Text color="black" fontSize={16} ml={4}>
            {data.info.phone_number}
          </Text>
        </Box>
      </Box>

    </PageTransition>
  )
}
