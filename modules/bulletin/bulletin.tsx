import React, {useState} from "react";
import {CardLayout, Empty, FlexLayout, Frame, Title} from "@/modules/bulletin/styles";
import Card from "@/components/display/cards";
import {IBulletin} from "@/modules/bulletin/IBulletin";

const Bulletin = ({subject,posts}:IBulletin):JSX.Element => {
    const cardNum = posts.length;
    return (
        <Frame>
            <FlexLayout>
                <Title>{subject} Articles</Title>
                <CardLayout cardNum={cardNum}>
                    {cardNum !== 0 ? posts.map((card,id)=> <Card key={id} subject={subject} posts={card}/>) : <Empty>내용이 없습니다.😥</Empty>}
                </CardLayout>
            </FlexLayout>
        </Frame>
    );
}
export default Bulletin;