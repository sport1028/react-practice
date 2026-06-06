
import { useState } from "react";
import Circle from "./Circle";
import styled from 'styled-components';

function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { currentTarget: {value} } = event;
    setValue(value);
  };
  const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value);
  };

  const Container = styled.div`
    background-color: ${(props) => props.theme.bgColor}
  `;
  const H1Text = styled.h1`
    color: ${(props) => props.theme.textColor}
  `;

  return (
    <div>
      <Container>
        <H1Text>Hello, World!</H1Text>
      </Container>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Username" onChange={onChange} value={value} />
      </form>
      <Circle bgColor="teal" borderColor="yellow" />
      <Circle bgColor="coral" borderColor="black" name="Bob" />
    </div>
  );
}

export default App;
