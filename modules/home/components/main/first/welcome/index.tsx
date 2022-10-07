import React from "react";
import {Text, Wrapper} from "./styles";

const Welcome = (): JSX.Element => {
    return (
        <Wrapper>
            <Text>
                Joshua의
                개발 블로그에
                오신걸을 진심으로
                환영합니다!
            </Text>
        </Wrapper>
    );
}
export default Welcome;