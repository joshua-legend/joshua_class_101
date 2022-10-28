import {useEffect, useState} from "react";
import {useMediaQuery} from "react-responsive";

export function useIsTablet() {
    const [isTablet,setIsTablet]=useState(false);
    const tablet = useMediaQuery({query:"(max-width: 1024px)"});
    useEffect(()=>{
        setIsTablet(tablet)
    },[tablet])
    return isTablet
}