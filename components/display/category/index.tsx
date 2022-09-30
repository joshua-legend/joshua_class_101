import React from "react";
import Item from "@/components/display/category/item";
import {Title, Wrapper} from "@/components/display/category/styles";

export interface ICategory {
    title:string,
    icon:JSX.Element,
    items:{
        main:string
        sub:string[]
    },
}

const Category = ({title,icon,items}:ICategory) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <Item icon={icon} items={items} />
        </Wrapper>
    );
}

export default Category;