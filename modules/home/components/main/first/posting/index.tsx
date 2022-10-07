import React from "react";
import {Wrapper} from "./styles";
import Card from "./card";

const Posting = ():JSX.Element => {

    const postings = [
        {imgUrl:"/images/posting/first.jpg",number:1234,title:"Visitor"},
        {imgUrl:"/images/posting/second.jpg",number:1234,title:"Article"},
        {imgUrl:"/images/posting/third.jpg",number:1234,title:"Open days"},
        {imgUrl:"/images/posting/fourth.jpg",number:1234,title:"Launched programs"},
    ]
    return (
        <Wrapper>
            {postings.map((el,id)=>{
                return <Card {...el} key={id}/>
            })}
        </Wrapper>
    );
}
export default Posting;