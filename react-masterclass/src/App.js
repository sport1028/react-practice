import styled from "styled-components";

const Father = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor};
`;

const Text = styled.h1`
  color: white;
  font-size: 2rem;
`;

const Circle = styled(Box)`
  border-radius: 50%;
`;

function App() {
  return (
    <Father>
      < Box bgColor="red">
        <Text>Hello, World!</Text>
      </Box>
      < Circle bgColor="blue" />
    </Father>
  );
}

export default App;
