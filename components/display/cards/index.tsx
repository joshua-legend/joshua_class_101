import React from "react";
import {BtnContainer, Container, InfoContainer, Square, Upper} from "@/components/display/cards/styles";
import Chip from "@/components/display/chips";
import Icon from "@/components/display/icons";
import {AiOutlineShareAlt} from "react-icons/ai";
import {useRouter} from "next/router";

interface ICard {
    subject:string,
    posts:{
        summary:{
            title:string,
            date:string,
            chips:string,
        },
        file:string,
    },
}

const Card = ({subject,posts}: ICard) => {
    const chips = posts.summary.chips?.split(",");
    const src = `/images/card/${subject}.svg`
    const router = useRouter();
    const clickContainer = () => router.push(`/articles/${subject}/${posts.file}`)
    return (
        <Container onClick={clickContainer} >
            <Square>
                <img src={src}/>
                <h1>{posts.summary.title}</h1>
                <BtnContainer>
                    <InfoContainer>
                        <Upper>
                            {chips?.map((text,num)=> <Chip text={text} key={num}/>)}
                        </Upper>
                    </InfoContainer>
                    <Icon icon={<AiOutlineShareAlt />} color={""}></Icon>
                </BtnContainer>
            </Square>
        </Container>
    );
}

export default Card;