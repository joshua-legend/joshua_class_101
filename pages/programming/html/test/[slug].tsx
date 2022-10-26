import MainFrame from "@/layouts/mainframe";
import articles from "@/modules/articles/articles";
import {GetStaticProps} from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {useRouter} from "next/router";

interface Iarticles {
    posts:{
        summary:{
            title:string,
            date:string,
        },
        content:string,
    }
}

const article = (posts:Iarticles) => {
    const _articles = articles({...posts});
    return (
        <MainFrame contents={_articles}/>
    )
}
export default article;

export const getStaticPaths = () => {
    const files = fs.readdirSync(path.join('articles/html'))
    const paths = files.map((filename)=>({
        params:{
            slug:filename.replace('.md',''),
        },
    }))
    return{
        paths,
        fallback:false
    }
}
export const getStaticProps: GetStaticProps = (context) => {
    const slug = context.params?.slug as String
    const markdownWithMeta = fs.readFileSync(path.join('articles/html',slug+'.md'), "utf-8",)
    const {data:summary, content} = matter(markdownWithMeta)
    const posts = {summary,content};
    return {
        props: {
            posts
        }
    }
}