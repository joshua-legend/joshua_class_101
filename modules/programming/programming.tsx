import React from "react";
import {Frame, FlexLayout, Title, CardLayout} from "@/modules/programming/styles";
import Card from "@/components/display/cards";

const Programming = ():JSX.Element => {
    return (
        <Frame>
            <FlexLayout>
                <Title>HTML Articles!</Title>
                <CardLayout>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </CardLayout>

            </FlexLayout>
        </Frame>
    );
}
export default Programming