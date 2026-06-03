import styled, {keyframes} from "styled-components";

const Father = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor};
`;

const Text = styled.h1`
  color: ${(props) => props.theme.textColor};
  font-size: 2rem;
`;

const Circle = styled(Box)`
  border-radius: 50%;
`;

const Btn = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => props.bgColor};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`; 
const Input = styled.input.attrs({required: true, maxLength: 10})`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Emoji = styled.span`
  font-size: 2rem;
  animation: ${rotateAnimation} 2s linear infinite;
`;

const Box2 = styled(Box)`
  width: 150px;
  height: 150px;
  animation: ${rotateAnimation} 2s linear infinite;
  span{
    display: block;
    text-align: center;
    line-height: 150px;
    color: white;
]   &:hover {
      animation-play-state: paused;
    }
    &:active {
      animation-play-state: running;
    }
  }
  ${Emoji} {
    animation-play-state: paused;
    &:hover {
      animation-play-state: running;
    }
  }

`;  

function App() {
  return (
    <Father>
      < Box bgColor="red">
        <Text>Hello, World!</Text>
      </Box>
      < Circle bgColor="blue" />
      < Btn bgColor="blue">Click me!</Btn>
      < Btn bgColor="green" as="a" href="https://www.naver.com">Click me!</Btn>
      < Input placeholder="Enter text" />
      < Input placeholder="Enter text" />
      < Input placeholder="Enter text" />
      < Input placeholder="Enter text" />
      < Input placeholder="Enter text" />
      < Box2 bgColor="purple">
        <span>Rotate</span>
      </Box2>
      < Box2 bgColor="darkblue">
        <Emoji as="p">🔄</Emoji>
      </Box2>
    </Father>
  );
}

export default App;
