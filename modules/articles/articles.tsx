import React from "react";
import {Frame, FlexLayout, Title} from "@/modules/programming/styles";
import BreadCrumb from "@/components/display/breadcrumb";
import Navigation from "@/components/display/navigation";
import Markup from "@/components/display/markup";

interface IArticles {
    title:string;
    content:string;
}


const Articles = ({title,content}:IArticles): JSX.Element => {
    return (
        <Frame>
            <FlexLayout>
                <Title>{title}</Title>
                <BreadCrumb/>
                <Navigation/>
                <Markup content={content} />
            </FlexLayout>
        </Frame>
    );
}

export default Articles