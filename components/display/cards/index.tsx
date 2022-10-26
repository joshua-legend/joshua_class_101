import React from "react";
import {BtnContainer, Container, InfoContainer, Square, Upper} from "@/components/display/cards/styles";
import Chip from "@/components/display/chips";
import Icon from "@/components/display/icons";
import {AiOutlineShareAlt} from "react-icons/ai";
import {useRouter} from "next/router";

interface ICard {
    summary:{
        title:string,
        date:string,
    }
}

const Card = ({summary}: ICard) => {
    const router = useRouter();
    // const clickContainer = () => router.push(`/bulletin/html/test/${slug}`)
    return (
        <Container onClick={undefined} >
            <Square>
                <img src="/images/card/html5.svg"/>
                <h1>{summary.title}</h1>
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