import styled from "styled-components";
import {
  flexbox,
  space,
  layout,
  border,
  position,
  background,
  typography,
  shadow,
  color,
} from "styled-system";
import { motion } from "framer-motion";

export const MotionDiv = styled(motion.div)`
  ${flexbox};
  ${space};
  ${layout};
  ${border};
  ${position};
  ${background};
  ${typography};
  ${shadow};
  ${color};
  ${(props) => props.bg && `background-color: ${props.theme.colors[props.bg]}`};
`;
export const MotionInput = styled(motion.input)`
  font-family: "Noto Sans JP", sans-serif;
  font-weight: 200;
  ${flexbox};
  ${space};
  ${layout};
  ${border};
  ${position};
  ${background};
  ${typography};
  ${shadow};
  ${color};
  ${(props) => props.bg && `background-color: ${props.theme.colors[props.bg]}`};
`;

export const MotionTextarea = styled(motion.textarea)`
  font-family: "Noto Sans JP", sans-serif;
  font-weight: 200;
  ${flexbox};
  ${space};
  ${layout};
  ${border};
  ${position};
  ${background};
  ${typography};
  ${shadow};
  ${color};
  ${(props) => props.bg && `background-color: ${props.theme.colors[props.bg]}`};
`;
