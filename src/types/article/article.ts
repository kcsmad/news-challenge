export default interface Article {
    id: number,
    title: string,
    description: string,
    imageUrl: string,
    content: string,
    isPublished: boolean,
    isPendingApproval: boolean,
}
