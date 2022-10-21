import React from "react";
import {BtnContainer, Container, InfoContainer, Square, Upper} from "@/components/display/cards/styles";
import Chip from "@/components/display/chips";
import Icon from "@/components/display/icons";
import {AiOutlineShareAlt} from "react-icons/ai";
import {useRouter} from "next/router";

interface ICard {
    slug:string,
    frontMatter:{
        title:string,
        date:string,
    }
}

const Card = ({slug,frontMatter}: ICard) => {
    const router = useRouter();
    const clickContainer = () => router.push(`/programming/html/test/${slug}`)
    return (
        <Container onClick={clickContainer} >
            <Square>
                <img src="/images/card/html5.svg"/>
                <h1>{frontMatter.title}</h1>
                <BtnContainer>
                    <InfoContainer>
                        <Upper>
                            <Chip />
                            <Chip />
                            <Chip />
                        </Upper>
                    </InfoContainer>
                    <Icon icon={<AiOutlineShareAlt />} color={""}></Icon>
                </BtnContainer>
            </Square>
        </Container>
    );
}

export default Card;