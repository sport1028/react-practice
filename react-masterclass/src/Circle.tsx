import styled from 'styled-components';

interface ContainerProps {
    bgColor: string;
    borderColor: string;
}

const Container = styled.div<ContainerProps>`
    width: 100px;
    height: 100px;
    background-color: ${(props) => props.bgColor};
    border-radius: 50%;
    margin: 20px;
    border: 5px solid ${(props) => props.borderColor};
`;

interface CircleProps {
    bgColor: string;
    borderColor?: string;
    name?: string;
}

function Circle({ bgColor, borderColor, name = "default Name" }: CircleProps) {
    return (
        <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
            {name}
        </Container>
    )
}

export default Circle;

interface PlayerShape {
    name: string;
    age: number;
}

const sayHello = (player: PlayerShape) => {
    console.log(`Hello ${player.name}, you are ${player.age} years old.`);
}

sayHello({ name: 'Alice', age: 30 });
sayHello({ name: 'Bob', age: 25 });