import React from "react";
import {Wrapper} from "@/components/display/breadcrumb/styles";

export interface IBreadCrumb {
}

const BreadCrumb = ({}: IBreadCrumb) => {
    return (
        <Wrapper>
            <li><a href="#">Home</a></li>
            <li><a href="#">Pictures</a></li>
            <li><a href="#">Summer 15</a></li>
            <li>Italy</li>
        </Wrapper>
    );
}

export default BreadCrumb;