import { Article } from "../../types";

const setArticlesLocalStorage = (userId: string, article: Article[]): void => (
    localStorage.setItem(
        userId,
        JSON.stringify(article)
    )
)

const getArticlesLocalStorage = (userId: string): string | null => (
    localStorage.getItem(userId)
)


const mockUserRolesLocalStorage = (): void => {
    localStorage.setItem("auth0|63ef17e66d5d1b1443e2dc10", "admin,user")
}

const mockArticlesLocalStorage = (): void => {
    localStorage.setItem("article001", JSON.stringify({
        id: "00001",
        title: "My First Article",
        isPendingApproval: true,
        isPublished: false,
        imageUrl: "",
        description: "",
        category: 'Engineering',
        content: ""
    } as Article))
}

export default {
    getArticlesLocalStorage,
    setArticlesLocalStorage
}
