import { Box, MotionDiv } from "../styles/components";

const margin = 4;

export default function HamburgerMenu(props) {
  const isOpen = props.isOpen
  return (
    <Box style={{ cursor: "pointer" }} width={24} height={14} {...props}>
      <MotionDiv
        borderRadius={20}
        initial={{ y: 0 }}
        animate={
          isOpen ? { y: margin * 1.5, rotate: -45 } : { y: 0, rotate: 0 }
        }
        width="100%"
        height={2}
        background="#555555"
      ></MotionDiv>
      <MotionDiv
        borderRadius={20}
        initial={{ y: margin * 1, opacity: 1 }}
        animate={isOpen ? { opacity: 0 } : { opacity: 1, y: margin * 1 }}
        width="80%"
        height={2}
        background="#555555"
        transition={{ duration: 0.1 }}
      ></MotionDiv>
      <MotionDiv
        borderRadius={20}
        initial={{ y: margin * 2 }}
        animate={
          isOpen ? { y: margin / 2, rotate: 45 } : { y: margin * 2, rotate: 0 }
        }
        width="100%"
        height={2}
        background="#555555"
      ></MotionDiv>
    </Box>
  );
}
