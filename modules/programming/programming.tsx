import React from "react";
import {Frame, FlexLayout, Title, CardLayout} from "@/modules/programming/styles";
import Card from "@/components/display/cards";

interface IPage {
    posts:{
        slug:string,
        frontMatter:{
            title:string,
            date:string,
        }
    }[]
}
const Programming = ({posts}:IPage):JSX.Element => {
    console.log("posts")
    console.log(posts)
    return (
        <Frame>
            <FlexLayout>
                <Title>HTML Articles!</Title>
                <CardLayout>
                    {posts.map((_Card,id)=> <Card key={id} slug={_Card.slug} frontMatter={_Card.frontMatter}/>)}
                </CardLayout>
            </FlexLayout>
        </Frame>
    );
}
export default Programming