import React from "react";
import {FlexLayout, Frame, Title} from "@/modules/bulletin/styles";
import BreadCrumb from "@/components/display/breadcrumb";
import Navigation from "@/components/display/navigation";
import Markup from "@/components/display/markup";
import {IArticles} from "@/pages/articles/IArticles";


const Articles = ({posts}:IArticles): JSX.Element => {
    return (
        <Frame>
            <FlexLayout>
                <Title>{posts.summary.title}</Title>
                <BreadCrumb/>
                <Navigation/>
                <Markup content={posts.content} />
            </FlexLayout>
        </Frame>
    );
}

export default Articles;