import { Logo, Instagram, Phone } from "../../public/img/svg";
import { Box, Clickable, Text } from "../../styles/components";

export function TopBar({ top_bar }) {
  return (
    <Box
      px={["5%", 80]}
      width="100%"
      height={54}
      alignItems="center"
      justifyContent="center"
      display="flex"
      pt={10}
    >
      <Text
        display="flex"
        alignItems="center"
        justifyContent="center"
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
        <Text display={["none", "block"]}>{top_bar.short_catchphrase_jp}</Text>
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
        <Box
          alignItems="center"
          justifyContent="center"
          display={["none", "flex"]}
        >
          <Phone width={18} height={18} />
          {/* <Image width={18} height={18} src="/img/svg/phone.svg" alt="phone"></Image> */}
          <Text color="black" fontSize={16} ml={4}>
            {top_bar.phone_number}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
