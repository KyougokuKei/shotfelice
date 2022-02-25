import { Box, Text } from "../../styles/components";
import { Button } from "../../components/Button";
import { Send } from "../../public/img/svg";

export function Deliver({ deliver }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      py={[100, 160, 160]}
      id="お届けまでの流れ"
    >
      {/* Deliver Head */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Text pl={[0, 6]} pb={10} fontSize={16} color="grey5">
          {deliver.title_en}
        </Text>
        <Text fontSize={[30, 42, 42]} fontWeight="bold" color="black" mb={20}>
          {deliver.title_jp}
        </Text>
        <Send />
      </Box>

      {/* Deliver Body */}
      <Box
        px={[10, 0]}
        pb={[0, 48, 48]}
        pt={[0, 30, 30]}
        pl={["10%", 0]}
        mb={[50, 0, 0]}
        display="flex"
        flexDirection={["column", "row"]}
        maxWidth={1140}
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
                width={[
                  "1px",
                  index === deliver.step_title.length - 1
                    ? "calc(100% - 40px)"
                    : "100%",
                ]}
                height={[index !== 0 ? "100%" : "calc(100% - 30px)", 1]}
                background="#eeeeee"
                top={[index === 0 ? 30 : 0, 0]}
                left={[0, index === 0 ? 30 : 0]}
                display={["block", "block"]}
              />

              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
              >
                <Text
                  mr={10}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
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
                step{index + 1}
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
        width={["calc(100% - 60px)", "inherit", "inherit"]}
        display={["none", "block", "block"]}
      >
        <Button width={["100%", "inherit", "inherit"]} href="/reservation">
          撮影を予約する
        </Button>
      </Box>
    </Box>
  );
}
