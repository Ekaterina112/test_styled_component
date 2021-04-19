import React, {useState} from 'react';
import styled from 'styled-components'
import Flex from "./Flex";
import Line from "./Line";

const StyledConsole = styled.textarea`
  width: 100%;
  height: 70vh;
  background-color: black;
  font-size: 24px;
  border: none;
  color: ${props => props.color || props.theme.colors.primary};
  resize: none;

  &:focus {
    outline: none;
  }
;
  @media ${props => props.theme.media.tablet} {
    border: white 2px solid
  }
  @media ${props => props.theme.media.phone} {
    border: red 1px solid
  }`


const Console = ({color, ...props}) => {

    const [lines, setLines] = useState(['C/users/Kate_N>'])
    const onKeyPress = e => {
        if (e.charCode === 13) {
            setLines([...lines, 'C/users/Kate_N>'])
        }
    }
    return (
        <Flex>
            <Flex direction='column' margin="0,10px">
                {lines.map(line =>
                    <Line color={color}>
                        {line}
                    </Line>)}
            </Flex>
            <StyledConsole onKeyPress={onKeyPress} color={color} {...props}/>
        </Flex>
    );
};

export default Console;