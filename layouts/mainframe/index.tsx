import React from "react";
import {Frame} from "./styles";
import Contents from "@/layouts/mainframe/contents";
import Sidebar from "@/layouts/mainframe/sidebar";

const MainFrame: React.FC = () => {
    return (
        <Frame>
            <Sidebar />
            <Contents>123</Contents>
        </Frame>
    );
}
export default MainFrame