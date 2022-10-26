import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import First from "./components/first";
import Second from "./components/second";
import styled from "@emotion/styled";

const SwiperWrapper = styled.section`height: 100vh;`
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
            </Swiper>
        </SwiperWrapper>
    );
}
export default Home