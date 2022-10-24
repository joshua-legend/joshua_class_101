import type {NextPage} from 'next'
import {GetStaticProps} from "next";
import MainFrame from "@/layouts/mainframe";
import programming from "@/modules/programming/programming";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {useRouter} from "next/router";

interface IPage {
  posts:{
    slug:string,
    summary:{
      title:string,
      date:string,
    }
  }[]
}
const Html: NextPage<IPage> = ({posts}) => {
  const url = useRouter().route.split("/")[2];
  const programmingHome = programming({posts,url});
  return (
      <MainFrame contents={programmingHome}/>
  )
}
export default Html;

export const getStaticProps: GetStaticProps = async (context) => {
  const files = fs.readdirSync(path.join('articles/html'))
  const posts = files.map((filename)=>{
    const slug = filename.replace(".md","");
    const markdownWithMeta = fs.readFileSync(path.join('articles/html',filename), "utf-8",)
    const { data: summary } = matter(markdownWithMeta)
    return { slug , summary }
  })
  return {
    props: {
      posts,
    }
  }
}