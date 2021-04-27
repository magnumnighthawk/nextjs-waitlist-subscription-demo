import styled, { keyframes } from "styled-components";

const dualRingAnimate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spin = styled.div`
  display: inline-block;
  width: 32px;
  height: 32px;
  margin-left: 10px;

  &:after {
    content: " ";
    display: block;
    width: 24px;
    height: 24px;
    margin: 2px;
    border-radius: 50%;
    border: 2px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${dualRingAnimate} 1.2s linear infinite;
  }
`;

export default function Spinner(props) {
  return <Spin />;
}
