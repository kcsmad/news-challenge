export default interface Article {
    id: string,
    title: string,
    description: string,
    imageUrl: string,
    content: string,
    isPublished: boolean,
    isPendingApproval: boolean,
    category: string,
    user_id: string,
}
