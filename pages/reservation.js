import React from "react";
import { Box } from "../styles/components";
import { PageTransition } from "../components/PageTransition";

export default function Reservation() {
  return (
    <PageTransition>
      <Box
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        Hello world!
      </Box>
    </PageTransition>
  );
}
