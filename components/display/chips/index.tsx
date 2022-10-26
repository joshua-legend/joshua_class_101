import React from "react";
import {Container} from "@/components/display/chips/styles";

interface IChip {
    text:string,
}

const Chip = ({text}: IChip) => {
    return (
        <Container>
            {text}
        </Container>
    );
}

export default Chip;