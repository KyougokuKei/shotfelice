import { Box } from "../../styles/components";
import styled from "styled-components";

export function RightArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Arrow right className={className} onClick={onClick}>
      <Box />
    </Arrow>
  );
}

export function LeftArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Arrow className={className} onClick={onClick}>
      <Box />
    </Arrow>
  );
}

const Arrow = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  cursor: pointer;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
  ${(props) => `background-color: ${props.theme.colors.white}`};
  ${(props) => (props.right ? `right: 14%;` : `left: 14%;`)};
  transition: 0.2s;

  &:hover {
    ${(props) => `background-color: ${props.theme.colors.brown}`};
    div {
      ${(props) => `border-top: solid 2px ${props.theme.colors.white}`};
      ${(props) => `border-right: solid 2px ${props.theme.colors.white}`};
    }
    transition: 0.2s;
  }

  & div {
    border-radius: 2px;
    width: 12px;
    height: 12px;
    ${(props) => `border-top: solid 2px ${props.theme.colors.brown}`};
    ${(props) => `border-right: solid 2px ${props.theme.colors.brown}`};
    ${(props) =>
      `transform: translateX(${props.right ? -3 : 3}px) rotate(${
        props.right ? 45 : 225
      }deg)`};
    transition: 0.2s;
  }

  //SlickSlider標準のarrowの位置を表示させない
  &::before {
    content: "" !important;
  }
`;
