import {GetStaticPaths, GetStaticProps} from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import articles from "@/modules/articles/articles";
import MainFrame from "@/layouts/mainframe";

interface IArticles {
    posts:{
        summary:{
            title:string,
            date:string,
        },
        content:string,
    }
}

const Subject = (posts:IArticles) => {
    const _articles = articles({...posts});
    return (
        <MainFrame contents={_articles}/>
    )
}
export default Subject;

export const getStaticPaths = () => {
    const subjects =["html","css"]
    const files = subjects.map((sub=>fs.readdirSync(path.join(`articles/${sub}`)).map(file=>file.replace(".md",""))));
    const flattedFiles = subjects.map((sub,num)=>{
        return files[num].map((txt)=>[sub,txt])
    }).flat()
    const paths = flattedFiles.map((sub)=>{
        return {"params":{"subject":sub}};
    });

    /*
    * [
          { subject: [ 'html', 'test' ] },
          { subject: [ 'html', 'test1' ] },
          { subject: [ 'css', 'crisis' ] },
          { subject: [ 'css', 'cssis' ] }
      ]
    *
    * */
    //[ { params: { subject: 'html' } }, { params: { subject: 'css' } } ]
    return {
        paths,
        fallback: false
    }
}
export const getStaticProps:GetStaticProps = (context) => {
    console.log(context.params?.subject);
    // const subject = context.params?.subject as String
    // console.log(subject)
    // const files = fs.readdirSync(path.join(`articles/${blog}`))
    // const paths = files.map((filename)=>({
    //     title:filename.replace('.md',''),
    // }))
    //
    // const posts = files.map((filename)=>{
    //     const markdownWithMeta = fs.readFileSync(path.join(`articles/${subject}`, filename+'.md'), "utf-8",);
    //     const {data: summary, content} = matter(markdownWithMeta);
    //     return {summary, content};
    // })
    return {
        props: {
            posts:"post"
        }
    }
}