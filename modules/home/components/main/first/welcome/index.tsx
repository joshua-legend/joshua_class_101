import React from "react";
import {Box, Description, Numbers, Text, Wrapper} from "./styles";

const Welcome = (): JSX.Element => {

    return (
        <Wrapper>
            <Text>알잘딱갈센</Text>
            <Text>Joshua의 개발 블로그</Text>
            <Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Description>
            <Numbers>
                <Box>
                    <dt>Since</dt><dd>2022</dd>
                </Box>
                <Box>
                    <dt>Launched programs</dt><dd>7</dd>
                </Box>
                <Box>
                    <dt>Article</dt><dd>7</dd>
                </Box>
            </Numbers>
        </Wrapper>
    );
}
export default Welcome;