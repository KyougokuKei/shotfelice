import { AnimatePresence } from "framer-motion";
import { Box, MotionDiv } from "../styles/components";
export function SendingAnimation(props) {
  return (
    <AnimatePresence>
      {props.isSending && (
        <MotionDiv
          position="fixed"
          bottom={0}
          left={0}
          width="100vw"
          height="100vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          zIndex={7}
          initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
        >
          <Box color="white" fontSize={32} mb={10}>
            送信中・・・
          </Box>
          <Box className="loader">ok</Box>
        </MotionDiv>
      )}
    </AnimatePresence>
  );
}
