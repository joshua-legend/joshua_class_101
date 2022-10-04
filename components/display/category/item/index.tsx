import React, {useState} from "react";
import {DropDown, SubItem, Title, Wrapper} from "@/components/display/category/item/styles";
import {IItems} from "@/components/display/category";

export interface IItem {
    items:IItems,
}

const Item = ({items}: IItem) => {
    const [isOpen, setIsOpen] = useState(false)
    const clickCategory = () => setIsOpen(!isOpen);
    return (
        <Wrapper onClick={clickCategory}>
            <Title>
                <span>{items.icon}</span>
                <span>{items.main}</span>
                <span>{items.sub.length !== 0 ? isOpen ? "👇" : "👉" : null}</span>
            </Title>
            <DropDown isOpen={isOpen}>
                {items.sub.map((str, id) => <SubItem key={id}>{str}</SubItem>)}
            </DropDown>
        </Wrapper>
    );
}

export default Item;