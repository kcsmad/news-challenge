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

export default {
    createArticle,
    getMyArticles
}
