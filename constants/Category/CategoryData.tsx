import {ICategory} from "@/components/display/category";
import {IoBrowsers, IoLayersSharp} from "react-icons/io5";
import React from "react";
import {AiFillAndroid, AiFillCloud, AiFillHtml5, AiOutlineBook, AiOutlineConsoleSql} from "react-icons/ai";
import {DiCss3, DiDatabase, DiJava, DiJavascript, DiReact, DiSass} from "react-icons/di";
import {SiGit, SiHeroku, SiIntellijidea, SiIos, SiJest, SiMaterialdesignicons, SiMongodb, SiNestjs, SiNextdotjs, SiNodedotjs, SiOracle, SiPostman, SiPycharm, SiTypescript, SiWebstorm} from "react-icons/si";
import {FaAws, FaCircleNotch, FaCode, FaDev} from "react-icons/fa";
import {CgIfDesign} from "react-icons/cg";
import {MdDesignServices, MdOutlineComputer} from "react-icons/md";
import {BiNetworkChart, BiTestTube} from "react-icons/bi";
import {TbFrame} from "react-icons/tb";
import {FcAcceptDatabase} from "react-icons/fc";
import {GrTest} from "react-icons/gr";
import {RiSlideshowFill} from "react-icons/ri";

const programming = {
    main: {title: "Programming", icon: <FaCode/>},
    sub: [
        {icon: <AiFillHtml5 color="#E96228"/>, main: "HTML", sub: []},
        {icon: <DiCss3 color="#3595CF" />, main: "CSS", sub: []},
        {icon: <DiSass color="#C96195" />, main: "SASS", sub: []},
        {icon: <DiJava color="#53A5CF" />, main: "Java", sub: []},
        {icon: <DiJavascript color="#EADB19" />, main: "Javascript", sub: []},
        {icon: <SiTypescript color="#2F74C0" />, main: "Typescript", sub: []},
    ],
};
const framework = {
    main: {title: "Framework", icon: <TbFrame/>},
    sub: [
        {icon: <DiReact color="#8DD8EF"/>, main: "React JS", sub: []},
        {icon: <SiNextdotjs color="#1E2128"/>, main: "Next JS", sub: []},
        {icon: <SiNodedotjs color="#7DD354"/>, main: "Node JS", sub: []},
        {icon: <SiNestjs color="#D9224C"/>, main: "Nest JS", sub: []},
    ]
};
const database = {
    main: {title: "DataBase", icon: <FcAcceptDatabase/>},
    sub: [
        {icon: <AiOutlineConsoleSql color="#B7C8CD"/>, main: "SQL", sub: []},
        {icon: <DiDatabase/>, main: "DBMS", sub: []},
        {icon: <SiMongodb color="#66AB3E"/>, main: "Mongo", sub: []},
        {icon: <SiOracle color="#E3BAB5"/>, main: "Oracle", sub: []},
    ],
};

const devOps = {
    main: {title: "DevOps", icon: <FaDev/>},
    sub: [
        {icon: <AiFillAndroid color="#7DD354"/>, main: "Android", sub: []},
        {icon: <SiIos/>, main: "IOS", sub: []},
        {icon: <SiGit/>, main: "GIT", sub: ["Git Command", "GitHub", "GitLab"]},
        {icon: <FaCircleNotch/>, main: "CI & CD", sub: []}
    ],
}

const cloud = {
    main: {title: "Cloud", icon: <AiFillCloud/>},
    sub: [
        {icon: <FaAws/>, main: "AWS", sub: []},
        {icon: <SiHeroku/>, main: "Heroku", sub: []},
    ]
};

const knowledge = {
    main: {title: "Knowledge", icon: <AiOutlineBook/>},
    sub: [
        {icon: <CgIfDesign/>, main: "Data-Structure", sub: []},
        {icon: <SiMaterialdesignicons/>, main: "Algorithm", sub: []},
        {icon: <MdDesignServices/>, main: "Design-Pattern", sub: []},
        {icon: <IoBrowsers/>, main: "Web", sub: []},
        {icon: <BiNetworkChart/>, main: "Network", sub: []},
        {icon: <MdOutlineComputer/>, main: "Computer-Science", sub: []},
    ]
}

const qa = {
    main: {title: "QA", icon: <GrTest/>},
    sub: [
        {icon: <BiTestTube/>, main: "테스팅 이론", sub: []},
        {icon: <SiPostman/>, main: "Postman", sub: []},
        {icon: <SiJest/>, main: "Jest", sub: []},
    ]
}

const devKit = {
    main: {title: "DevKit", icon: <RiSlideshowFill/>},
    sub: [
        {icon: <SiIntellijidea/>, main: "Intellij", sub: []},
        {icon: <SiWebstorm/>, main: "WebStorm", sub: []},
        {icon: <SiPycharm/>, main: "Pycharm", sub: []},
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