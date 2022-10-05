import React, {useState} from "react";
import {Wrapper} from "@/layouts/mainframe/sidebar/profile/navigation/styles";
import Icon, {IIcon} from "@/components/display/icons";
import PROFILE_NAVIGATION from "@/constants/Icons/IconData";

const Navigation: React.FC = () => {
    const [icons, setIcons] = useState<IIcon[]>(PROFILE_NAVIGATION)
    return (
        <Wrapper>
            {icons.map((icons, id) => <Icon key={id} {...icons} />)}
        </Wrapper>
    );
}

export default Navigation