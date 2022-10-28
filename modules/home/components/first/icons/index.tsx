import React, {useEffect, useState} from "react";
import {Badge, IconsContainer, Rounded, Wrapper} from "./styles";
import {IconContext} from "react-icons";
import {useIsMobile} from "@/hooks/useIsMobile";
import {useIsTablet} from "@/hooks/useIsTablet";
import MainIcons from "@/constants/Icons/Main/MainIcon";
import {useIsLaptop} from "@/hooks/useIsLaptop";

const Icons = (): JSX.Element => {
    const Icons = MainIcons;
    const isMobile = useIsMobile();
    const isTablet = useIsTablet();
    const isLaptop = useIsLaptop();
    const [size,setSize] = useState({iconSize:"50px", iconBgSize:6, margin:2});

    const updateState = (iconSize:string,iconBgSize:number,margin:number) =>(
        setSize((prevState => ({...prevState,iconSize,iconBgSize,margin})))
    )

    useEffect(()=>{
        isMobile ? updateState("20px",3,1) : isTablet ? updateState("30px",4,1.25) : isLaptop ? updateState("40px",5,1.5) : updateState("50px",6,2);
    },[isMobile,isTablet,isLaptop])

    return (
        <Wrapper>
            <IconsContainer>
                {Icons.map((elem,id)=>{
                    return <Badge key={id} background={elem.color} size={size.iconBgSize} margin={size.margin}>
                        <Rounded>
                            <IconContext.Provider value={{size:size.iconSize}}>
                                {elem.icon}
                            </IconContext.Provider>
                        </Rounded>
                    </Badge>
                })}
            </IconsContainer>
        </Wrapper>
    );
}
export default Icons;