import {HiOutlineVariable} from "react-icons/hi";
import {FaObjectGroup} from "react-icons/fa";
import {IoLogoWebComponent} from "react-icons/io5";
import React from "react";
import {IIcon} from "@/components/display/icons";

const PROFILE_NAVIGATION:IIcon[] = [
    {toolTip: "Primitive", icon: <HiOutlineVariable/>},
    {toolTip: "Object", icon: <FaObjectGroup/>},
    {toolTip: "Component", icon: <IoLogoWebComponent/>},
];

export default PROFILE_NAVIGATION;
