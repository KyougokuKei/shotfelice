import { Clickable, Text, MotionDiv } from "../styles/components";
import Link from "next/link";

export function Button(props) {
  return (
    <Link href={props.href} passHref>
      <MotionDiv
        whileHover={{ scale: 1.02, opacity: 0.9 }}
        style={{ pointerEvents: props.disable ? "none" : "auto" }}
        // backgroundColor={props.disable ? "#aaa" : "#4d4646"}
        animate={{ backgroundColor: props.disable ? "#aaa" : "#4d4646" }}
      >
        <Clickable
          height={props.height ? props.height : 50}
          styles={{ boxSizeing: "border-box" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          width={props.width}
          {...props}
        >
          <Text
            px={props.px === undefined ? 40 : props.px}
            fontSize={props.fontSize === undefined ? 18 : props.fontSize}
            color={props.color === undefined ? "white" : props.color}
            display="flex"
            alignItems="center"
            justifyContent="center"
            height={props.height ? props.height : 50}
          >
            {props.children}
          </Text>
        </Clickable>
      </MotionDiv>
    </Link>
  );
}

export function BackButton(props) {
  return (
    <Link href={props.href} passHref>
      <Clickable
        height={props.height ? props.height : 50}
        styles={{ boxSizeing: "border-box", cursor: "pointer" }}
        className="border-box pointer"
        display="flex"
        alignItems="center"
        justifyContent="center"
        backgroundColor="white"
        borderBottom="solid 1px #333"
        borderTop="solid 1px #333"
        width={props.width}
        {...props}
      >
        <Text
          fontSize={props.fontSize === undefined ? 16 : props.fontSize}
          color="black"
          display="flex"
          alignItems="center"
          justifyContent="center"
          height={props.height ? props.height : 50}
        >
          {props.children}
        </Text>
      </Clickable>
    </Link>
  );
}
