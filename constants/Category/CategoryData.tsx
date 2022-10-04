import {ICategory} from "@/components/display/category";
import {IoBrowsers, IoLayersSharp} from "react-icons/io5";
import React from "react";
import {AiFillAndroid, AiFillHtml5, AiOutlineConsoleSql} from "react-icons/ai";
import {DiCss3, DiDatabase, DiJava, DiJavascript, DiReact, DiSass} from "react-icons/di";
import {SiGit, SiHeroku, SiIntellijidea, SiIos, SiJest, SiMaterialdesignicons, SiMongodb, SiNestjs, SiNextdotjs, SiNodedotjs, SiOracle, SiPostman, SiPycharm, SiTypescript, SiWebstorm} from "react-icons/si";
import {FaAws, FaCircleNotch} from "react-icons/fa";
import {CgIfDesign} from "react-icons/cg";
import {MdDesignServices, MdOutlineComputer} from "react-icons/md";
import {BiNetworkChart, BiTestTube} from "react-icons/bi";

const programming = [
    {icon:<AiFillHtml5/>,main: "HTML", sub: []},
    {icon:<DiCss3/>,main: "CSS", sub: []},
    {icon:<DiSass/>,main: "SASS", sub: []},
    {icon:<DiJava/>,main: "Java", sub: []},
    {icon:<DiJavascript/>,main: "Javascript", sub: []},
    {icon:<SiTypescript/>,main: "Typescript", sub: []},
];
const framework = [
    {icon:<DiReact/>,main:"React JS",sub:[]},
    {icon:<SiNextdotjs/>,main:"Next JS",sub:[]},
    {icon:<SiNodedotjs/>,main:"Node JS",sub:[]},
    {icon:<SiNestjs/>,main:"Nest JS",sub:[]},
]
const database = [
    {icon:<AiOutlineConsoleSql/>,main:"SQL",sub:[]},
    {icon:<DiDatabase/>,main:"DBMS",sub:[]},
    {icon:<SiMongodb/>,main:"Mongo",sub:[]},
    {icon:<SiOracle/>,main:"Oracle",sub:[]},
];

const devOps = [
    {icon:<AiFillAndroid/>,main:"Android",sub:[]},
    {icon:<SiIos/>,main:"IOS",sub:[]},
    {icon:<SiGit/>,main:"GIT",sub:["Git Command","GitHub","GitLab"]},
    {icon:<FaCircleNotch/>,main:"CI & CD",sub:[]}
]

const cloud = [
    {icon:<FaAws/>,main:"AWS",sub:[]},
    {icon:<SiHeroku/>,main:"Heroku",sub:[]},
];

const knowledge = [
    {icon:<CgIfDesign/>,main:"Data-Structure",sub:[]},
    {icon:<SiMaterialdesignicons/>,main:"Algorithm",sub:[]},
    {icon:<MdDesignServices/>,main:"Design-Pattern",sub:[]},
    {icon:<IoBrowsers/>,main:"Web",sub:[]},
    {icon:<BiNetworkChart/>,main:"Network",sub:[]},
    {icon:<MdOutlineComputer/>,main:"Computer-Science",sub:[]},
]

const qa = [
    {icon:<BiTestTube/>,main:"테스팅 이론",sub:[]},
    {icon:<SiPostman/>,main:"Postman",sub:[]},
    {icon:<SiJest/>,main:"Jest",sub:[]},
]

const devKit = [
    {icon:<SiIntellijidea/>,main:"Intellij",sub:[]},
    {icon:<SiWebstorm/>,main:"WebStorm",sub:[]},
    {icon:<SiPycharm/>,main:"Pycharm",sub:[]},
]


const CATEGORY_DATA: ICategory[] = [
    {main:{title: "Programming", icon: <IoLayersSharp/>}, sub: [...programming]},
    {main:{title: "Framework", icon: <IoLayersSharp/>}, sub: [...framework]},
    {main:{title: "DataBase", icon: <IoLayersSharp/>}, sub: [...database]},
    {main:{title: "DevOps", icon: <IoLayersSharp/>}, sub: [...devOps]},
    {main:{title: "Cloud", icon: <IoLayersSharp/>}, sub: [...cloud]},
    {main:{title: "Knowledge", icon: <IoLayersSharp/>}, sub: [...knowledge]},
    {main:{title: "QA", icon: <IoLayersSharp/>}, sub: [...qa]},
    {main:{title: "DevKit", icon: <IoLayersSharp/>}, sub: [...devKit]},
];

export default CATEGORY_DATA;