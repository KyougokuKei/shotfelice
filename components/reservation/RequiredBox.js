import { Box } from "../../styles/components";

export function RequiredBox(props) {
  return (
    <Box
      as="span"
      display="flex"
      alignItems="center"
      justifyContent="center"
      //   background={props.required ? "#da7882" : "#68b162"}
      borderBottom="solid 1px #aaa"
      fontWeight={props.required ? "bold" : "normal"}
      fontSize={12}
      color={props.required ? "black" : "grey7"}
      textShadow={[0, "none"]}
      width={44}
      minWidth={44}
      height={20}
      ml={10}
      {...props}
    >
      {props.required ? "*必須" : "任意"}
    </Box>
  );
}
