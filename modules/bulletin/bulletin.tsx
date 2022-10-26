import React from "react";
import {Frame, FlexLayout, Title, CardLayout} from "@/modules/bulletin/styles";
import Card from "@/components/display/cards";

interface IPage {
    subject:string,
    posts:{
        summary:{
            title:string,
            date:string,
        }
    }[],
}
const Bulletin = ({subject,posts}:IPage):JSX.Element => {
    return (
        <Frame>
            <FlexLayout>
                <Title>{subject} Articles</Title>
                <CardLayout>
                    {posts.map((_Card,id)=> <Card key={id} summary={_Card.summary}/>)}
                </CardLayout>
            </FlexLayout>
        </Frame>
    );
}
export default Bulletin;