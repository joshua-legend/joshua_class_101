import React from "react";
import {Wrapper} from "./styles";
interface IContent {
    contents:JSX.Element,
}
const Contents: React.FC<IContent> = ({contents}:IContent) => {
    return (
        <Wrapper>
            {contents}
        </Wrapper>
    );
}

export default Contents