import { Box } from "../../styles/components";
import Link from "next/link";
import { useRouter } from "next/router";
import { Step_arrow } from "../../public/img/svg/Step_arrow";
import { theme } from "../../lib/theme";

export function Nav({ nav }) {
  const active_step = Number(useRouter().asPath.slice(-1));
  return (
    <Box position="relative">
      <Box
        position="absolute"
        top={0}
        right={0}
        background="linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);"
        height="100%"
        width="20%"
        zIndex={6}
        display={["block", "block", "block"]}
      />
      <Box
        display="flex"
        overflow="scroll"
        maxWidth={890}
        width="100%"
        className="noscroll"
      >
        {nav.map((step, i) => {
          if (i + 1 !== active_step) {
            return (
              <NormalCard
                content={step}
                href={"/reservation/step" + String(i + 1)}
                i={4 - i}
              />
            );
          } else {
            return (
              <ActiveCard
                content={step}
                href={"/reservation/step" + String(i + 1)}
                i={4 - i}
              />
            );
          }
        })}
      </Box>
    </Box>
  );
}

function NormalCard(props) {
  return (
    <Link href={props.href}>
      <Box
        className="pointer"
        style={{ whiteSpace: "nowrap" }}
        position="relative"
        display="flex"
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
        // fontWeight="bold"
        fontSize={[13, 14]}
      >
        <Box>{5 - props.i}</Box>
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
      </Box>
    </Link>
  );
}

function ActiveCard(props) {
  return (
    <Link href={props.href}>
      <Box
        className="pointer"
        style={{ whiteSpace: "nowrap" }}
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
        <Box>{5 - props.i}</Box>
        <Box display={["none", "block", "block"]}>. {props.content}</Box>
        <Box
          position="absolute"
          display={["none", "block", "block"]}
          top={0}
          right={-20}
          borderTop="solid 20px transparent"
          borderBottom="solid 20px transparent"
          borderLeft={"solid 20px " + theme.colors.gold}
        />
      </Box>
    </Link>
  );
}
