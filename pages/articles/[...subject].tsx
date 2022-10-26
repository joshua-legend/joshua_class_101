import {GetStaticPaths, GetStaticProps} from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import articles from "@/modules/articles/articles";
import MainFrame from "@/layouts/mainframe";
import Subjects from "@/constants/Subjects/Subject";
import {IArticles} from "./IArticles";

const Subject = (posts:IArticles) => {
    return (
        <MainFrame contents={articles({...posts})}/>
    )
}
export default Subject;

export const getStaticPaths = () => {
    const subjects = Subjects
    const files = subjects.map((sub=>fs.readdirSync(path.join(`articles/${sub}`)).map(file=>file.replace(".md",""))));
    const flattedFiles = subjects.map((sub,num)=>{
        return files[num].map((txt)=>[sub,txt])
    }).flat()
    const paths = flattedFiles.map((sub)=>{
        return {"params":{"subject":sub}};
    });
    //[ { params: { subject: [html,test] } }, { params: { subject: 'css' } } ]
    return {
        paths,
        fallback: false
    }
}
export const getStaticProps:GetStaticProps = (context) => {
    const subject = context.params?.subject as String[]
    const [major,sub] = subject;
    const markdownWithMeta = fs.readFileSync(path.join(`articles/${major}`, sub+'.md'), "utf-8",);
    const {data: summary, content} = matter(markdownWithMeta);
    const posts = {summary,content};
    return {
        props: {
            posts
        }
    }
}