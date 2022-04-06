import Seo from "../lib/Seo";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Box } from "../styles/components";
import { loadYaml, getImgPaths } from "../lib/posts";

import { PageTransition } from "../components/PageTransition";
import { Header } from "../components/header/Header";
import {
  TopBar,
  Subheading,
  Service,
  Deliver,
  Garally,
} from "../components/home";

export const getStaticProps = async () => {
  const postData = await loadYaml("home.yml");
  const imgPaths = await getImgPaths();
  return {
    props: {
      data: postData,
      imgPaths: imgPaths,
    },
  };
};

export default function Home({ data, imgPaths }) {
  const router = useRouter();
  const hash = decodeURI(router.asPath.split("#")[1]);

  useEffect(() => {
    if (hash) {
      let elem = document.getElementById(hash);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [router]);

  return (
    <PageTransition width="100%" mt={-80}>
      <Seo pageTitle="Shotfelice" />

      {/* Background Image */}
      <Box
        width="100vw"
        height="100%"
        position="absolute"
        overflow="hidden"
        zIndex="-1"
      >
        <Image
          src="/img/general/background_image.jpg"
          alt="background_image"
          layout="fill"
          objectFit="cover"
          quality={100}
        ></Image>
      </Box>

      <Box className="vh100m94" display="flex" flexDirection="column">
        <TopBar top_bar={data.top_bar} />
        <Header nav={data.nav} />
        <Subheading subheading={data.subheading} nav={data.nav} />
      </Box>
      <Garally garally={data.garally} imgPaths={imgPaths} />
      <Deliver deliver={data.deliver} />
      <Service service={data.service} />
    </PageTransition>
  );
}
