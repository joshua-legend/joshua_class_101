import React, {useState} from "react";
import {DropDown, Sub_subject, Title, Wrapper} from "@/components/display/category/subject/styles";
import {ISubCategory} from "@/components/display/category";

interface ISubject {
    subCategory:ISubCategory,
    isMainOpen:boolean,
}

const Subject = ({subCategory,isMainOpen}: ISubject) => {
    const [isOpen, setIsOpen] = useState(false)
    const clickCategory = () => setIsOpen(!isOpen);
    return (
        <Wrapper isMainOpen={isMainOpen} onClick={clickCategory}>
            <Title>
                <span>{subCategory.icon}</span>
                <span>{subCategory.main}</span>
                <span>{subCategory.sub.length !== 0 ? isOpen ? "👇" : "👉" : null}</span>
            </Title>
            <DropDown isOpen={isOpen}>
                {subCategory.sub.map((str, id) => <Sub_subject key={id}>{str}</Sub_subject>)}
            </DropDown>
        </Wrapper>
    );
}

export default Subject;