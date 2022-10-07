import React from "react";
import {Lines} from "@/components/display/lines/styles";

export interface IIcon {
    isRight:boolean
}

const Line = ({isRight}: IIcon) => {
    return (
        <Lines rotate={isRight}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
            </svg>
        </Lines>
    );
}

export default Line;