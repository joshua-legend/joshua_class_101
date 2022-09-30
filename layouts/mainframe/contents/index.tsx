import React, {PropsWithChildren} from "react";
import {Wrapper} from "./styles";


const Contents: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}

export default Contents