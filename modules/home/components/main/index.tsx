import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {SwiperWrapper} from "./styles";
import First from "./first";
import Second from "./second";

const Main = ():JSX.Element => {
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
                    <First />
                </SwiperSlide>
            </Swiper>
        </SwiperWrapper>
    );
}
export default Main;