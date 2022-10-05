import React from "react";
import {Tooltip, Wrapper} from "@/components/display/icons/styles";

export interface IIcon {
    color:string,
    icon: JSX.Element,
    toolTip: string,
}

const Icon = ({color,toolTip, icon}: IIcon) => {
    return (
        <Wrapper color={color}>
            <Tooltip>{toolTip}</Tooltip>
            <span>{icon}</span>
        </Wrapper>
    );
}

export default Icon;