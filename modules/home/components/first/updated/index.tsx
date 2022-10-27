import React from "react";
import {Badge, IconsContainer, Rounded, Wrapper} from "./styles";
import {AiFillHtml5} from "react-icons/ai";
import {DiCss3, DiJavascript, DiReact} from "react-icons/di";
import {SiCoursera, SiCplusplus, SiNextdotjs, SiNodedotjs, SiTypescript} from "react-icons/si";

const Updated = (): JSX.Element => {
    const Icons = [
        {icon:<AiFillHtml5 color="#E96228" size={50}/>,color:"#E96228"},
        {icon:<DiCss3 color="#3595CF" size={50} />,color:"#3595CF"},
        {icon:<DiJavascript color="#EADB19" size={50} />,color:"#EADB19"},
        {icon:<SiTypescript color="#2F74C0" size={50} />,color:"#2F74C0"},
        {icon:<DiReact color="#8DD8EF" size={50} />,color:"#8DD8EF"},
        {icon:<SiNextdotjs color="#1E2128" size={50} />,color:"#1E2128"},
        {icon:<SiNodedotjs color="#7DD354" size={50} />,color:"#7DD354"},
        {icon:<SiCoursera color="#5A68BB"  size={50} />,color:"#5A68BB"},
        {icon:<SiCplusplus color="#005395"  size={50} />,color:"#005395"},
    ]
    return (
        <Wrapper>
            <IconsContainer>
                {Icons.map((elem,id)=>{
                    return <Badge key={id} background={elem.color}>
                        <Rounded>
                            {elem.icon}
                        </Rounded>
                    </Badge>
                })}
            </IconsContainer>
        </Wrapper>
    );
}
export default Updated;