import styled from 'styled-components'
import { flexbox, space, layout, border, position, background, typography, shadow, color } from 'styled-system'

export const Box = styled.div`
  font-family: 'TsukushiAMaruGhothic';
  ${flexbox};
  ${space};
  ${layout};
  ${border};
  ${position};
  ${background};
  ${typography};
  ${shadow};
  ${color};
  ${(props) => props.color && `color: ${props.theme.colors[props.color]}`};
  ${(props) => props.bg && `background-color: ${props.theme.colors[props.bg]}`};
`
