import React, {useState} from "react";
import {Wrapper} from "@/layouts/mainframe/sidebar/profile/navigation/styles";
import Icon, {IIcon} from "@/components/display/icons";
import Profile from "@/constants/Icons/Profile/ProfileIcon";

const Navigation: React.FC = () => {
    const [icons, setIcons] = useState<IIcon[]>(Profile)
    return (
        <Wrapper>
            {icons.map((icons, id) => <Icon key={id} {...icons} />)}
        </Wrapper>
    );
}

export default Navigation