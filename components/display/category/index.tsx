import React from "react";
import Item from "@/components/display/category/item";
import {Icon, Main, Title, Wrapper} from "@/components/display/category/styles";

export interface mainCategory{
    title:string,
    icon:JSX.Element,
}

export interface IItems {
    icon:JSX.Element,
    main:string,
    sub:string[],
}

export interface ICategory {
    main:mainCategory,
    sub:IItems[],
}

const Category = ({main,sub}:ICategory) => {
    return (
        <Wrapper>
            <Main>
                <Icon>{main.icon}</Icon>
                <Title>{main.title}</Title>
            </Main>
            {sub.map((item, id)=> <Item key={id} items={item} />)}
        </Wrapper>
    );
}

export default Category;