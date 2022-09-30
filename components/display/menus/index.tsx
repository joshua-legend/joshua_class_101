import React, {useState} from "react";
import {Wrapper} from "@/components/display/menus/styles";
import Category from "@/components/display/category";
import CATEGORY_DATA from "@/constants/Category/CategoryData";


const Menus = () => {
    const [data,setData] = useState(CATEGORY_DATA);
    return (
        <Wrapper>
            {data.map((value,id) => (<Category key={id} {...value}/>))}
        </Wrapper>
    );
}

export default Menus;