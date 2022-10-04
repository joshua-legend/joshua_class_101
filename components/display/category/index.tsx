import React, {useState} from "react";
import Subject from "@/components/display/category/subject";
import {Arrow, Icon, Main, Title, Wrapper} from "@/components/display/category/styles";
import {IoIosArrowDown, IoIosArrowForward} from "react-icons/io";

interface IMainCategory{
    title:string,
    icon:JSX.Element,
}
export interface ISubCategory {
    icon:JSX.Element,
    main:string,
    sub:string[],
}
export interface ICategory {
    main:IMainCategory,
    sub:ISubCategory[],
}
const Category = ({main,sub}:ICategory) => {
    const [isOpen,setIsOpen] = useState(false)
    const clickMain = () => setIsOpen(!isOpen)
    return (
        <Wrapper>
            <Main onClick={clickMain}>
                <Icon>{main.icon}</Icon>
                <Title>{main.title}</Title>
                <Arrow>{isOpen ? <IoIosArrowDown/> : <IoIosArrowForward/>}</Arrow>
            </Main>
            {sub.map((item, id)=> <Subject key={id} isMainOpen={isOpen} subCategory={item}/>)}
        </Wrapper>
    );
}
export default Category;