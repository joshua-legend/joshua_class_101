import React from "react";
import {Wrapper} from "./styles";
import Profile from "@/layouts/mainframe/sidebar/profile";
import Menus from "@/components/display/menus";


const Sidebar: React.FC = () => {
    return (
        <Wrapper>
            <Profile />
            <Menus />
        </Wrapper>
    );
}

export default Sidebar