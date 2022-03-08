import { Box, Text } from "../../styles/components";
import { convertGoldText } from "../../lib/convert";
import Image from "next/image";
import { Button } from "../../components/Button";

export function Service({ service }) {
  return (
    <Box id="サービス">
      <Box
        background="#F8F9FA"
        pb={[0, 40]}
        pt={[60, 80]}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Text pl={[0, 6]} pb={10} fontSize={16} color="grey5">
          {service.title_en}
        </Text>
        <Text fontSize={[30, 42, 42]} fontWeight="bold" color="black" mb={20}>
          {service.title_jp}
        </Text>
      </Box>

      {Object.keys(service.feature).map((key, index) => {
        const isOdd = index % 2 === 0;
        const isFinal = index === Object.keys(service.feature).length - 1;

        return (
          <Box
            key={index}
            width="100vw"
            height={["auto", 360, 460]}
            background={isOdd ? "#F8F9FA" : "#FFFFFF"}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexDirection={["column", isOdd ? "row-reverse" : "row"]}
            pb={[40, 0]}
          >
            <Box
              width={["100%", "50%", "40%"]}
              height="100%"
              display="flex"
              alignItems="flex-end"
              justifyContent="center"
            >
              <Box
                position="relative"
                width="100%"
                height="auto"
                mb={[40, 0]}
                maxWidth={["none", 340, 440]}
              >
                <Image
                  src={"/img/service/" + key + ".png"}
                  layout="responsive"
                  width={500}
                  height={500}
                  alt={key}
                  objectFit={"cover"}
                />
              </Box>
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              width={["100%", "50%", "60%"]}
              px={"5%"}
            >
              <Box
                fontSize={[32, 32, 46]}
                lineHeight={1.4}
                mb={[20, 32]}
                textAlign={isOdd ? "left" : "right"}
                fontWeight="bold"
              >
                {convertGoldText(service.feature[key].title)}
              </Box>
              <Box
                color="grey5"
                lineHeight={1.8}
                textAlign={isOdd ? "left" : "right"}
                fontWeight="bold"
              >
                {service.feature[key].sub_title}
              </Box>
              {isFinal && (
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-end"
                >
                  <Button
                    mt={[32]}
                    href="/reservation"
                    width={["100%", "100%", 300]}
                    fontWeight="normal"
                    py={30}
                  >
                    撮影を予約する
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
