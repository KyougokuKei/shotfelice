import { Box, MotionDiv } from "../styles/components";

export default function Send() {
  const handleSubmit = (e, data) => {
    e.preventDefault();
    console.log("送信中");
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        console.log("送信が成功しました");
      }
    });
  };

  return (
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100%"
    >
      <MotionDiv
        background="rgba(41,159,255,1)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={200}
        py={20}
        onClick={(e) => {
          handleSubmit(e, [1, 2, 3]);
        }}
        color="white"
        borderRadius={10}
        style={{ cursor: "pointer" }}
        whileHover={{ scale: 1.1, opacity: 0.8 }}
      >
        送信
      </MotionDiv>
    </Box>
  );
}
