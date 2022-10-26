import React from "react";
import {Image, Wrapper} from "./styles";
import {useRouter} from "next/router";


const SelfPortrait: React.FC = () => {
    const imgSrc = "/images/profile/profile.svg";
    const router = useRouter()
    const goHome = ()=>router.push("/");
    return (
        <Wrapper onClick={goHome}>
            <Image src={imgSrc} />
        </Wrapper>
    );
}

export default SelfPortrait