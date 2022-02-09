import styled from 'styled-components'
import { flexbox, space, layout, border, position, background, typography, shadow, color } from 'styled-system'
import { motion } from 'framer-motion'

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
`


