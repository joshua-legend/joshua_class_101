import {GetStaticPaths, GetStaticProps} from "next";

const Id = ({post}:{post:string}) => {
    return (
        <div>{post}</div>
    )
}
export default Id;

export const getStaticPaths:GetStaticPaths = () => {
    return{
        paths:[
            {params:{id:"1"}},
            {params:{id:"2"}},
            {params:{id:"3"}},
        ],
        fallback: false,
    };
}
export const getStaticProps:GetStaticProps = ({params}) => {
    const post = params?.id;
    return {
        props: {
            post,
        }
    }
}