import React, {ReactElement} from "react";
import {Box, Card, Cards, Tables, Text, Wrapper} from "./styles";
import {BiHighlight} from "react-icons/bi";
import {SiBookstack} from "react-icons/si";
import {MdSelfImprovement} from "react-icons/md";

interface ICard {
    icon:ReactElement;
    text:string,
}
interface ITable {
    key:string,
    value:string,
}

const Welcome = (): JSX.Element => {

    const cards:ICard[] =[
        {icon:<BiHighlight size={30} />,text:"3줄 요약 좋아함"},
        {icon:<SiBookstack size={30} />,text:"책에 없는 내용만 올림"},
        {icon:<MdSelfImprovement size={30} />,text:"프로그래밍은 스스로공부"},
    ]
    const tables:ITable[] = [
        {key:"Since",value:"2022"},
        {key:"Article",value:"7"},
    ]

    return (
        <Wrapper>
            <Text>알잘딱갈센</Text>
            <Text>Joshua의 개발 블로그</Text>
            <Cards>
                {cards.map((elem,num)=>{
                    return <Card key={num}>{elem.icon}<span>{elem.text}</span></Card>
                })}
            </Cards>
            <Tables>
                {tables.map((elem,num)=>{
                    return (<Box key={num}><dt>{elem.key}</dt><dd>{elem.value}</dd></Box>)
                })}
            </Tables>
        </Wrapper>
    );
}
export default Welcome;