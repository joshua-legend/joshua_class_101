import React from "react";
import {Wrapper} from "./styles";
import SelfPortrait from "@/layouts/mainframe/sidebar/profile/selfPortrait";
import NameBar from "@/layouts/mainframe/sidebar/profile/nameBar";
import Navigation from "@/layouts/mainframe/sidebar/profile/navigation";


const Profile: React.FC = () => {
    return (
        <Wrapper>
            <SelfPortrait/>
            <NameBar />
            <Navigation />
        </Wrapper>
    );
}

export default Profile