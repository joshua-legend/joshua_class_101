export interface IBulletin{
    subject:string,
    posts:{
        summary:{
            title:string,
            date:string,
            chips:string,
        },
        file:string,
    }[],
}