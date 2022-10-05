import React from "react";
import {IIcon} from "@/components/display/icons";
import {AiOutlineHome, AiOutlineSearch, AiOutlineYoutube} from "react-icons/ai";

const PROFILE_NAVIGATION:IIcon[] = [
    {toolTip: "홈", icon: <AiOutlineHome/>,color:"#bbdefb"},
    {toolTip: "검색", icon: <AiOutlineSearch/>,color:"#b2ff59"},
    {toolTip: "유튜브", icon: <AiOutlineYoutube/>,color:"#f44336"},
];

export default PROFILE_NAVIGATION;
