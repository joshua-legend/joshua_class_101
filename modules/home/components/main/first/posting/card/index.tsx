import React from "react";
import {_Card, Wrapper, NumberBox, TitleBox, ImgBox, ContentsBox} from "./styles";

interface ICard {
    imgUrl:string,
    number:number,
    title:string,
}

const Card = ({imgUrl,number,title}:ICard):JSX.Element => {
    return (
        <Wrapper>
            <_Card>
                <ImgBox>
                    <img src={imgUrl} alt=""/>
                </ImgBox>
                <ContentsBox>
                    <TitleBox>
                        <h2>{title}</h2>
                    </TitleBox>
                    <NumberBox>
                        <h2>{number}</h2>
                    </NumberBox>
                </ContentsBox>
            </_Card>
        </Wrapper>
    );
}
export default Card;