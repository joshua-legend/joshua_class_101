import React from "react";
import {Container} from "@/components/display/ratings/styles";
import ReactMarkdown from "react-markdown";


interface IMarkup {
    content?:string,
}

const Markup = ({content}:IMarkup) => {
    return (
        <Container>
            <ReactMarkdown>{content ?? "loading"}</ReactMarkdown>
        </Container>
    );
}

export default Markup;