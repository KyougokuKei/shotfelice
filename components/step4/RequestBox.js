import { Box } from "../../styles/components";
export function RequestBox({ request }) {
  return (
    <Box pr={[20, 40, 80]} mb={0}>
      <Box mb={24} fontSize={20} fontWeight="bold">
        質問・ご要望
      </Box>
      <Box
        width="100%"
        height={200}
        px={20}
        pt={20}
        style={{ outline: "none" }}
        whileFocus={{ border: "1px solid #333", scale: 1.005 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        border="solid 1px #e1e1e1"
        fontSize={16}
        fontFamily="Noto Sans JP, sans-serif"
      >
        {request}
      </Box>
    </Box>
  );
}
