import React from "react";
import {Bg, Content, Wrapper} from "./styles";
import Welcome from "./welcome";
import Icons from "./icons";

const First = ():JSX.Element => {
    return (
        <Wrapper>
            <Content>
                <Welcome/>
            </Content>
            <Content>
                <Icons />
            </Content>
            <Bg />
        </Wrapper>
    );
}
export default First;


