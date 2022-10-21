import React, {ReactElement} from "react";
import {Frame} from "./styles";
import Contents from "@/layouts/mainframe/contents";
import Sidebar from "@/layouts/mainframe/sidebar";
interface IMainFrame {
    contents:ReactElement<any, any>,
}
const MainFrame: React.FC<IMainFrame> = ({contents}:IMainFrame) => {
    return (
        <Frame>
            <Sidebar />
            <Contents contents={contents} />
        </Frame>
    );
}
export default MainFrame