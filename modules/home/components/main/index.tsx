import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {SwiperWrapper} from "./styles";
import First from "./first";
import Second from "./second";
import ReactMarkdown from 'react-markdown'


const markdown = `
 # 레정두
`

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
                    <ReactMarkdown>{markdown}</ReactMarkdown>
                </SwiperSlide>
            </Swiper>
        </SwiperWrapper>
    );
}
export default Main;