import React from "react";
import {Wrapper} from "./styles";
import Welcome from "./welcome";
import Posting from "./posting";

const Main = ():JSX.Element => {
    return (
        <Wrapper>
            <Posting/>
            <Welcome/>
        </Wrapper>
    );
}
export default Main;