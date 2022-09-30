import React from "react";
import {Image, Wrapper} from "./styles";


const SelfPortrait: React.FC = () => {

    const imgSrc = "images/profile/profile.png";

    return (
        <Wrapper>
            <Image src={imgSrc} />
        </Wrapper>
    );
}

export default SelfPortrait