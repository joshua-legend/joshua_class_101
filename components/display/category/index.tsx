import React from "react";
import Item from "@/components/display/category/item";
import {Title, Wrapper} from "@/components/display/category/styles";

export interface IItems {
    main:string,
    sub:string[],
}

export interface mainCategory{
    title:string,
    icon:JSX.Element,
}

export interface ICategory {
    // main:mainCategory,
    title:string,
    icon:JSX.Element,
    items:IItems[],
}

const Category = ({title,icon,items}:ICategory) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            {items.map((item,id)=> <Item key={id}icon={icon} items={item} />)}
        </Wrapper>
    );
}

export default Category;