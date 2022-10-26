import React, {useState} from "react";
import {Title, Wrapper} from "@/components/display/category/subject/styles";
import {ISubCategory} from "@/components/display/category";
import {useRouter} from "next/router";

interface ISubject {
    subCategory:ISubCategory,
    isMainOpen:boolean,
}
const Subject = ({subCategory,isMainOpen}: ISubject) => {
    const router = useRouter();
    const clickCategory = () => router.push(`/bulletin/${subCategory.link}`)
    return (
        <Wrapper isMainOpen={isMainOpen} backgroundColor={subCategory.color} onClick={clickCategory}>
            <Title>
                <span>{subCategory.icon}</span>
                <span>{subCategory.main}</span>
            </Title>
        </Wrapper>
    );
}

export default Subject;