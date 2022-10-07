import React from "react";
import {Content, Wrapper} from "./styles";
import Posting from "./posting";
import Welcome from "./welcome";
import Lines from "@/components/display/lines";

const First = ():JSX.Element => {

    return (
        <Wrapper>
            <Lines isRight={false}></Lines>
            <Content>
                <Posting/>
                <Welcome/>
            </Content>
            <Lines isRight={true}></Lines>
        </Wrapper>
    );
}
export default First;


