import { Box } from "../../styles/components";
export function ConfirmBox(props) {
  return (
    <Box mb={[32, 42]} pr={[20, 40, 80]}>
      <Box fontSize={20} fontWeight="bold">
        {props.title}
      </Box>
      <Box
        mt={[12, 24]}
        fontSize={16}
        borderBottom="solid 1px #D8D8D8"
        fontFamily={
          props.isAddress ? "Noto Sans JP, sans-serif" : "TsukushiAMaruGhothic"
        }
        pb={6}
        color="black"
      >
        {props.value}
      </Box>
    </Box>
  );
}
