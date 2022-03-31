import { Box, MotionDiv } from "../../styles/components";
import Link from "next/link";
import { useRouter } from "next/router";
import { Step_arrow } from "../../public/img/svg/Step_arrow";
import { theme } from "../../lib/theme";

import { formsAreInputed } from "../../lib/formchecker";

export function Nav(props) {
  const active_step = Number(useRouter().asPath.slice(-1));
  let inputedNumver = formsAreInputed();
  return (
    <Box position="relative">
      <Box
        display="flex"
        maxWidth={890}
        width="100%"
        className="noscroll"
        py={10}
      >
        {props.nav.map((step, i) => {
          if (i + 1 !== active_step) {
            return (
              <NormalCard
                content={step}
                href={"/reservation/step" + String(i + 1)}
                i={4 - i}
                inputedNumver={inputedNumver}
              />
            );
          } else {
            return (
              <ActiveCard
                content={step}
                href={"/reservation/step" + String(i + 1)}
                i={4 - i}
                inputedNumver={inputedNumver}
              />
            );
          }
        })}
      </Box>
    </Box>
  );
}

function NormalCard(props) {
  const index = 5 - props.i;
  const disable = index === 5 ? true : index > props.inputedNumver;
  // console.log(index, disable);
  return (
    <Link href={props.href}>
      <MotionDiv
        style={{
          whiteSpace: "nowrap",
          cursor: "pointer",
          pointerEvents: disable ? "none" : "auto",
        }}
        position="relative"
        display="flex"
        whileHover={{ rotate: [0, -3, 3, -3, 0], scale: 1.05 }}
        alignItems="center"
        justifyContent={["center", "flex-start", "flex-start"]}
        background="white"
        border="solid 1px #e1e1e1"
        height={42}
        pr={[16, 10, 20]}
        pl={[16, 30, 30]}
        mr={20}
        borderRadius={[100, 0, 0]}
        zIndex={props.i}
        ml={props.i === 4 ? 0 : -20}
        fontSize={[13, 14]}
      >
        <Box>{index}</Box>
        <Box display={["none", "block", "block"]}>. {props.content}</Box>
        <Box display={["none", "block", "block"]}>
          <Step_arrow
            style={{
              position: "absolute",
              right: "-31px",
              top: -1,
              height: "42px",
            }}
          />
        </Box>
      </MotionDiv>
    </Link>
  );
}

function ActiveCard(props) {
  const index = 5 - props.i;
  const disable = index === 5 ? true : index > props.inputedNumver;
  return (
    <Link href={props.href}>
      <MotionDiv
        style={{
          whiteSpace: "nowrap",
          cursor: "pointer",
          pointerEvents: disable ? "none" : "auto",
        }}
        whileHover={{ rotate: [0, -3, 3, -3, 0], scale: 1.05 }}
        position="relative"
        display="flex"
        alignItems="center"
        bg="gold"
        height={42}
        pr={[16, 10, 20]}
        pl={[16, 30, 30]}
        mr={20}
        borderRadius={[100, 0, 0]}
        zIndex={props.i}
        ml={props.i === 4 ? 0 : -20}
        color="white"
        fontWeight="bold"
        fontSize={[13, 14]}
      >
        <Box>{index}</Box>
        <Box display={["none", "block", "block"]}>. {props.content}</Box>
        <Box
          position="absolute"
          display={["none", "block", "block"]}
          top={0}
          right={-20}
          borderTop="solid 21px transparent"
          borderBottom="solid 21px transparent"
          borderLeft={"solid 21px " + theme.colors.gold}
        />
      </MotionDiv>
    </Link>
  );
}
