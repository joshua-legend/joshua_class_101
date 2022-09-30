import React from "react";
import {Tooltip, Wrapper} from "@/components/display/icons/styles";

export interface IIcon {
    toolTip: string,
    icon: JSX.Element,
}

const Icon = ({toolTip, icon}: IIcon) => {
    return (
        <Wrapper>
            <Tooltip>{toolTip}</Tooltip>
            <span>{icon}</span>
        </Wrapper>
    );
}

export default Icon;