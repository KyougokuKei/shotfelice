import { Box, Text, MotionDiv } from "../../styles/components";
import { useState } from "react";
import { LayoutGroup, AnimatePresence } from "framer-motion";
import { theme } from "../../lib/theme";

export function Nav({ list, active, setActive }) {
  return (
    <Box
      pb={24}
      display="flex"
      alignItems="center"
      justifyContent={["center", "flex-start"]}
      px={[0, 80]}
    >
      <LayoutGroup>
        {list.map((category, index) => {
          return (
            <Box
              key={index}
              onClick={() => setActive(category)}
              mr={[
                index === list.length - 1 ? 0 : 20,
                index === list.length - 1 ? 0 : 20,
              ]}
              position="relative"
              style={{ cursor: "pointer" }}
              fontWeight="bold"
              fontSize={[14, 16]}
              color={
                active === category ? theme.colors.black : theme.colors.grey5
              }
            >
              {category}

              {/* border-bottom　のアニメーション */}
              {active === category && (
                <MotionDiv
                  layoutId="underline"
                  position="absolute"
                  bottom={-8}
                  background={theme.colors.black}
                  height={2}
                  width="100%"
                ></MotionDiv>
              )}
            </Box>
          );
        })}
      </LayoutGroup>
    </Box>
  );
}
