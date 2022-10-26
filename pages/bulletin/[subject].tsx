import MainFrame from "@/layouts/mainframe";
import {GetStaticProps} from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Bulletin from "@/modules/bulletin/bulletin";
import Subjects from "@/constants/Subjects/Subject";
import {IBulletin} from "@/modules/bulletin/IBulletin";

const bulletin = ({subject, posts}: IBulletin) => {
    return (
        <MainFrame modules={Bulletin({subject, posts})}/>
    )
}
export default bulletin;
export const getStaticPaths = () => {
    const subjects = Subjects
    const paths = subjects.map((sub) => {
        return {params: {subject: sub}}
    })
    return {
        paths,
        fallback: false
    }
}
export const getStaticProps: GetStaticProps = (context) => {
    const subject = context.params?.subject as String
    const files = fs.readdirSync(path.join(`articles/${subject}`))
    const posts = files.map((filename) => {
        const markdownWithMeta = fs.readFileSync(path.join(`articles/${subject}`, filename), "utf-8",)
        const {data: summary} = matter(markdownWithMeta)
        const file = filename.replace(".md","");
        return {summary,file};
    });
    return {
        props: {
            subject,
            posts,
        }
    }
}