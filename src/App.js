import './App.css';
import styled from 'styled-components'
import Title from "./components/Title";
import Flex from "./components/Flex";
import Console from "./components/Console";
import Button from "./components/Button";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background-color: black;
  font-family: Consolas;
`

function App() {
    return (
        <AppWrapper>
            <Flex justify='center'>
                <Title> Console cmd 2021.</Title>
            </Flex>
            <Flex direction='column' >
                <Console/>
                <Button primary color='green' background='black' align='flex-end'>Send</Button>
            </Flex>

        </AppWrapper>
    );
}

export default App;
