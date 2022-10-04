import React, {useState} from "react";
import {DropDown, SubItem, Title, Wrapper} from "@/components/display/category/item/styles";
import {IItems} from "@/components/display/category";

export interface IItem {
    icon: JSX.Element,
    items:IItems,
}

const Item = ({icon, items}: IItem) => {
    const [isOpen, setIsOpen] = useState(false)
    const clickCategory = () => setIsOpen(!isOpen);
    return (
        <Wrapper onClick={clickCategory}>
            <Title>
                <span>{icon}</span>
                <span>{items.main}</span>
                <span>{isOpen ? "👇" : "👉"}</span>
            </Title>
            <DropDown isOpen={isOpen}>
                {items.sub.map((str, id) => <SubItem key={id}>{str}</SubItem>)}
            </DropDown>
        </Wrapper>
    );
}

export default Item;