import { Article } from '../../types';
import { LocalStorageService } from "../storage";

const createArticle = (userId: string = "", articles: Article[]): void => {
    LocalStorageService.setArticlesLocalStorage(userId, articles)
}

const getMyArticles = (userId: string = ""): Article[] => {
    try {
        const resp = LocalStorageService.getArticlesLocalStorage(userId)
        return resp ? JSON.parse(resp) : []
    } catch(e) {
        console.error("Something went wrong getting Articles from LocalStorage")

        return []
    }
}

const getArticleById = (articleId: string = "", userId: string = ""): Article | undefined => {
    try {
        const resp = LocalStorageService.getArticlesLocalStorage(userId)

        if (resp) {
            const articles = JSON.parse(resp) as Article[]
            return articles.filter(article => article.id === articleId)[0]
        }
    } catch (e) {
        console.error(e)
    }
}

export default {
    createArticle,
    getArticleById,
    getMyArticles
}
