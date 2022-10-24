import MainFrame from "@/layouts/mainframe";
import articles from "@/modules/articles/articles";
import {GetStaticProps} from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {useRouter} from "next/router";

interface Iarticles {
    summary:{
        title:string,
        date:string,
    },
    slug:string,
    content:string,
}

const article = ({summary,slug,content}:Iarticles) => {
    const _articles = articles({...summary, content});
    return (
        <MainFrame contents={_articles}/>
    )
}
export default article;

export const getStaticPaths = ({}) => {
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
    return {
        props: {
            slug,
            summary,
            content,
        }
    }
}