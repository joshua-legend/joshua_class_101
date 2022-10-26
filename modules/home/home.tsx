import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import First from "./components/first";
import Second from "./components/second";
import ReactMarkdown from "react-markdown";
import styled from "@emotion/styled";

const SwiperWrapper = styled.section`height: 100vh;`
const markdown = `
 # 레정두
`
const Home = ():JSX.Element => {
    return (
        <SwiperWrapper>
            <Swiper
                pagination={{clickable: true,}}
                direction={"vertical"}
                style={{width:"100%",height:"100%"}} >
                <SwiperSlide>
                    <First />
                </SwiperSlide>
                <SwiperSlide>
                    <Second />
                </SwiperSlide>
                <SwiperSlide>
                    <ReactMarkdown>{markdown}</ReactMarkdown>
                </SwiperSlide>
            </Swiper>
        </SwiperWrapper>
    );
}
export default Home