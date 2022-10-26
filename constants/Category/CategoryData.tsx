import {ICategory} from "@/components/display/category";
import {IoBrowsers, IoLayersSharp} from "react-icons/io5";
import React from "react";
import {AiFillAndroid, AiFillCloud, AiFillHtml5, AiOutlineBook, AiOutlineConsoleSql} from "react-icons/ai";
import {DiCss3, DiDatabase, DiJava, DiJavascript, DiReact, DiSass} from "react-icons/di";
import {
    SiGit,
    SiHeroku,
    SiIntellijidea,
    SiIos,
    SiJest,
    SiMaterialdesignicons,
    SiMongodb,
    SiNestjs,
    SiNextdotjs,
    SiNodedotjs,
    SiOracle,
    SiPostman,
    SiPycharm,
    SiTypescript,
    SiWebstorm
} from "react-icons/si";
import {FaAws, FaCircleNotch, FaCode, FaDev} from "react-icons/fa";
import {CgIfDesign} from "react-icons/cg";
import {MdDesignServices, MdOutlineComputer} from "react-icons/md";
import {BiNetworkChart, BiTestTube} from "react-icons/bi";
import {TbFrame} from "react-icons/tb";
import {FcAcceptDatabase} from "react-icons/fc";
import {GrTest} from "react-icons/gr";
import {RiSlideshowFill} from "react-icons/ri";

const programming = {
    main: {title: "Programming", icon: <FaCode/>, background: "#ffebee"},
    sub: [
        {icon: <AiFillHtml5 color="#E96228"/>, color: "#E96228", main: "HTML", link: "html"},
        {icon: <DiCss3 color="#3595CF"/>, color: "#3595CF", main: "CSS", link: "css"},
        {icon: <DiSass color="#C96195"/>, color: "#C96195", main: "SASS", link: "sass"},
        {icon: <DiJava color="#53A5CF"/>, color: "#53A5CF", main: "Java", link: "java"},
        {icon: <DiJavascript color="#EADB19"/>, color: "#EADB19", main: "Javascript", link: "javascript"},
        {icon: <SiTypescript color="#2F74C0"/>, color: "#2F74C0", main: "Typescript", link: "typescript"},
    ],
};
const framework = {
    main: {title: "Framework", icon: <TbFrame/>, background: "#fff3e0"},
    sub: [
        {icon: <DiReact color="#8DD8EF"/>, color: "#8DD8EF", main: "React JS", link: "react"},
        {icon: <SiNextdotjs color="#1E2128"/>, color: "#1E2128", main: "Next JS", link: "next"},
        {icon: <SiNodedotjs color="#7DD354"/>, color: "#7DD354", main: "Node JS", link: "node"},
        // {icon: <SiNestjs color="#D9224C"/>, color: "#D9224C", main: "Nest JS", link: "nest"},
    ]
};
const database = {
    main: {title: "DataBase", icon: <FcAcceptDatabase/>, background: "#ffe0b2"},
    sub: [
        {icon: <AiOutlineConsoleSql color="#B7C8CD"/>, color: "#B7C8CD", main: "SQL", link: "sql"},
        {icon: <DiDatabase/>, main: "DBMS", link: "database"},
        // {icon: <SiMongodb color="#66AB3E"/>, color: "#66AB3E", main: "Mongo", link: "mongo"},
        // {icon: <SiOracle color="#E3BAB5"/>, color: "#E3BAB5", main: "Oracle", link: "oracle"},
    ],
};

const devOps = {
    main: {title: "DevOps", icon: <FaDev/>, background: "#e8f5e9"},
    sub: [
        {icon: <AiFillAndroid color="#7DD354"/>, color: "#7DD354", main: "Android", link: "android"},
        {icon: <SiIos/>, main: "IOS", link: "ios"},
        {icon: <SiGit/>, main: "GIT", link: "git"},
        {icon: <FaCircleNotch/>, main: "CI & CD", link: "cicd"}
    ],
}

const cloud = {
    main: {title: "Cloud", icon: <AiFillCloud/>, background: "#e1f5fe"},
    sub: [
        {icon: <FaAws/>, main: "AWS", link: "aws"},
        {icon: <SiHeroku/>, main: "Heroku", link: "heroku"},
    ]
};

const knowledge = {
    main: {title: "Knowledge", icon: <AiOutlineBook/>, background: "#e8eaf6"},
    sub: [
        {icon: <CgIfDesign/>, main: "Data-Structure", link: "datastructure"},
        {icon: <SiMaterialdesignicons/>, main: "Algorithm", link: "algorithm"},
        {icon: <MdDesignServices/>, main: "Design-Pattern", link: "designpattern"},
        {icon: <IoBrowsers/>, main: "Web", link: "browser"},
        {icon: <BiNetworkChart/>, main: "Network", link: "network"},
        {icon: <MdOutlineComputer/>, main: "Computer-Science", link: "computer"},
    ]
}

const qa = {
    main: {title: "QA", icon: <GrTest/>, background: "#ede7f6"},
    sub: [
        {icon: <BiTestTube/>, main: "테스팅 이론", link: "test"},
        {icon: <SiPostman/>, main: "Postman", link: "postman"},
        {icon: <SiJest/>, main: "Jest", link: "jest"},
    ]
}

const devKit = {
    main: {title: "DevKit", icon: <RiSlideshowFill/>, background: "#efebe9"},
    sub: [
        {icon: <SiIntellijidea/>, main: "Intellij", link: "intellij"},
        {icon: <SiWebstorm/>, main: "WebStorm", link: "webstorm"},
        {icon: <SiPycharm/>, main: "Pycharm", link: "pycharm"},
    ]
}

const CATEGORY_DATA: ICategory[] = [
    {main: {...programming.main}, sub: [...programming.sub]},
    {main: {...framework.main}, sub: [...framework.sub]},
    {main: {...database.main}, sub: [...database.sub]},
    {main: {...devOps.main}, sub: [...devOps.sub]},
    {main: {...cloud.main}, sub: [...cloud.sub]},
    {main: {...knowledge.main}, sub: [...knowledge.sub]},
    {main: {...qa.main}, sub: [...qa.sub]},
    {main: {...devKit.main}, sub: [...devKit.sub]},
];

export default CATEGORY_DATA;