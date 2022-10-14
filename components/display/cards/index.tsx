import React from "react";
import {BtnContainer, Container, InfoContainer, Square, Upper} from "@/components/display/cards/styles";
import Chip from "@/components/display/chips";
import Rating from "@/components/display/ratings";
import Icon from "@/components/display/icons";
import {AiOutlineShareAlt} from "react-icons/ai";

interface ICard {

}

const Card = ({}: ICard) => {
    return (
        <Container>
            <Square>
                <img src="https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e1c8fe0c9197d66232511525bfd1cc82&auto=format&fit=crop&w=1100&q=80"/>
                <h1>Is Apple a Design Company?</h1>
                <p>Apple is more than a tech company; it became a culture unto itself, a passion of most of people and the birthplace of the world’s most revolutionized products.</p>
                <BtnContainer>
                    <InfoContainer>
                        <Upper>
                            <Chip />
                            <Chip />
                            <Chip />
                        </Upper>
                        <Rating stars={3} />
                    </InfoContainer>
                    <Icon icon={<AiOutlineShareAlt />} color={""}></Icon>
                </BtnContainer>
            </Square>
        </Container>
    );
}

export default Card;