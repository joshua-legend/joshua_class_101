import React from "react";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {Container} from "@/components/display/ratings/styles";

interface IRating {
    stars:number
}

const Rating = ({stars}: IRating) => {
    const arrayStars = [...Array(5).fill(false).map((el,id)=> id < stars ? <AiFillStar /> : <AiOutlineStar />)]
    return (
        <Container>
            {[...arrayStars]}
        </Container>
    );
}

export default Rating;