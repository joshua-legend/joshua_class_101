import React, {ReactElement} from "react";
import {Frame} from "./styles";
import Contents from "@/layouts/mainframe/contents";
import Sidebar from "@/layouts/mainframe/sidebar";
interface IMainFrame {
    modules:ReactElement<any, any>,
}
const MainFrame: React.FC<IMainFrame> = ({modules}:IMainFrame) => {
    return (
        <Frame>
            <Sidebar />
            <Contents contents={modules} />
        </Frame>
    );
}
export default MainFrame