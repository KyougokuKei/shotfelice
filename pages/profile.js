import Image from "next/image";

import { Box } from "../styles/components";
import { PageTransition } from "../components/PageTransition";
import { Comma } from "../public/img/profile/Comma";
import {
  Age,
  Birthplace,
  Favorite_movie,
  Favorite_food,
  Height,
  Hobby,
} from "../public/img/profile/profile_list";

import { loadYaml } from "../lib/posts";
export const getStaticProps = async () => {
  const postData = await loadYaml("profile.yml");
  return {
    props: {
      data: postData,
    },
  };
};

export default function Profile({ data }) {
  console.log(data);
  const icons = {
    birthplace: <Birthplace />,
    age: <Age />,
    height: <Height />,
    hobby: <Hobby />,
    favorite_movie: <Favorite_movie />,
    favorite_food: <Favorite_food />,
  };
  return (
    <PageTransition>
      {/* Background Image */}

      <Box
        className="vh100"
        width="100vw"
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        color="white"
        textShadow="0 2px 2px rgba(0,0,0,0.1)"
        fontWeight="bold"
      >
        <Box
          position="absolute"
          left={0}
          right="0"
          width="100%"
          height="100%"
          zIndex={-1}
        >
          <Image
            src="/img/profile/profile_bg.jpg"
            alt="background_image"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </Box>
        <Box fontSize={50}>{data.name_jp}</Box>
        <Box fontSize={24}>{data.position}</Box>
      </Box>
      <Box
        my={20}
        px={["3%", 25]}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection={["column-reverse", "row"]}
      >
        <Box width={["100%", "50%"]} height={[360, 720]} position="relative">
          <Image
            src="/img/profile/profile_image.jpg"
            alt="background_image"
            // width={15}
            // height={17}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </Box>

        <Box
          width={["100%", "50%"]}
          height={["auto", 720]}
          background="#F8F9FA"
          ml={[0, 25]}
          py={[40, 40, 80]}
          px={[30, 30, 64]}
        >
          {/* ABOUT ME */}
          <Box display="flex" alignItems="flex-end" mb={[16, 16, 32]}>
            <Comma />
            <Box color="gold" fontWeight="bold" fontSize={18} ml={12}>
              {data.title}
            </Box>
          </Box>
          {/* NAME */}
          <Box fontWeight="bold" fontSize={[30, 38, 54]} mb={[16, 16, 32]}>
            {data.name_en}
          </Box>

          {/* MESSAGE */}
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            fontWeight="bold"
            fontSize={16}
            color="grey6"
            lineHeight={2}
            flexDirection={["column", "column", "row"]}
          >
            <Box width={["100%", "100%", "50%"]} mr={30}>
              {data.message[0]}
            </Box>
            <Box width={["100%", "100%", "50%"]}>{data.message[1]}</Box>
          </Box>

          <Box borderBottom="solid 1px #ddd" my={[16, 16, 32]} />

          {/* ACHIEVE and HISTORY */}
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            fontWeight="bold"
            lineHeight={2}
            flexDirection={["column", "column", "row"]}
          >
            {/* 実績 */}
            <Box width={["100%", "100%", "50%"]} mr={16}>
              <Box color="gold" fontSize={20} mb={[12, 8, 20]}>
                {data.achievement.title}
              </Box>
              {data.achievement.content.map((item, index) => (
                <Box key={index} fontSize={14} color="grey6" mb={6}>
                  ・{item}
                </Box>
              ))}
            </Box>
            {/* これまでの活動 */}
            <Box width={["100%", "100%", "50%"]}>
              <Box color="gold" fontSize={20} mb={[12, 8, 20]}>
                {data.history.title}
              </Box>
              <Box fontSize={14} color="grey6">
                {data.history.content}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Profile List */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        py={[32, 32, 64]}
        mb={20}
        background="#F8F9FA"
      >
        <Box mb={32} color="grey6">
          {data.profile.title}
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
          px={[20, 0, 0]}
        >
          {[...Array(data.profile.items.length).keys()].map((index) => {
            return (
              <ProfileItem
                key={index}
                index={index}
                profile={data.profile.items}
                icons={icons}
              />
            );
          })}
        </Box>
      </Box>
    </PageTransition>
  );
}

function ProfileItem(props) {
  return (
    <Box
      display="flex"
      alignItems="center"
      mr={[0, 0, props.index === props.profile.length - 1 ? 0 : 60]}
      width={["50%", "33%", "auto"]}
      mb={[24, 24, 0]}
      borderBottom="solid 1px #ddd"
    >
      <Box mr={10}>{props.icons[props.profile[props.index][2]]}</Box>
      <Box fontSize={15} fontWeight="bold">
        <Box mb={3}>{props.profile[props.index][0]}</Box>
        <Box color="grey6">{props.profile[props.index][1]}</Box>
      </Box>
    </Box>
  );
}
