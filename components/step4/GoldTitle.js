import { Box } from "../../styles/components";
export function GoldTitle(props) {
  return (
    <Box fontWeight="bold" fontSize={24} color="gold" my={[32, 40]}>
      {props.children}
    </Box>
  );
}
