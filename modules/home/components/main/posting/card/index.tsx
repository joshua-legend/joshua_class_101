import React from "react";
import {_Card, Wrapper, ImgBox, ContentBox} from "./styles";

const Card = ():JSX.Element => {
    return (
        <Wrapper>
            <_Card>
                <ImgBox>
                    <img src="https://assets.codepen.io/4164355/shoes.png" alt=""/>
                </ImgBox>
                <ContentBox>
                    <h2>Nike</h2>
                </ContentBox>
            </_Card>
        </Wrapper>
    );
}
export default Card;