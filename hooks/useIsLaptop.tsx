import {useEffect, useState} from "react";
import {useMediaQuery} from "react-responsive";

export function useIsLaptop() {
    const [isLaptop,setIsLaptop]=useState(false);
    const laptop = useMediaQuery({query:"(max-width: 1440px)"});
    useEffect(()=>{
        setIsLaptop(laptop)
    },[laptop])
    return isLaptop
}