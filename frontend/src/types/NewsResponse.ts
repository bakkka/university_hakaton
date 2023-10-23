export interface INews{
    content: news[]
}
export type news = {
    id: string,
    date: string,
    imgUrl: string,
    type: string,
    topic: string,
    header: string,
    subtitle: string,
    text: string
}