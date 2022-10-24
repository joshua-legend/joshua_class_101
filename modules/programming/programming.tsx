import React from "react";
import {Frame, FlexLayout, Title, CardLayout} from "@/modules/programming/styles";
import Card from "@/components/display/cards";

interface IPage {
    posts:{
        slug:string,
        summary:{
            title:string,
            date:string,
        }
    }[],
    url:string,
}
const Programming = ({posts,url}:IPage):JSX.Element => {
    return (
        <Frame>
            <FlexLayout>
                <Title>{url} Articles</Title>
                <CardLayout>
                    {posts.map((_Card,id)=> <Card key={id} slug={_Card.slug} summary={_Card.summary}/>)}
                </CardLayout>
            </FlexLayout>
        </Frame>
    );
}
export default Programming