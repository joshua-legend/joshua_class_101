import React from "react";
import {Content, Wrapper} from "./styles";
import Welcome from "./welcome";
import Updated from "./updated";

const First = ():JSX.Element => {
    return (
        <Wrapper>
            <Content>
                <Welcome/>
            </Content>
            <Content>
                <Updated />
            </Content>
        </Wrapper>
    );
}
export default First;


