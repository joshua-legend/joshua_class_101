import React from "react";
import {Card, Cards, Wrapper} from "./styles";
import Reviews from "@/constants/Reviews/Reviews";


const Second = ():JSX.Element => {
    const reviews = Reviews
    return (
        <Wrapper>
            <Cards>
                {reviews.map((content,num)=>{
                    return(
                    <Card key={num}>
                        <h2>{content.subject}</h2>
                        <hr/>
                        <p>{content.review}</p>
                    </Card>)
                })}
            </Cards>
        </Wrapper>
    );
}
export default Second;


