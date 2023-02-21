import LocalStorageService from "./local-storage-service";

const mockedGetItem = jest.spyOn(
    window.localStorage.__proto__,
    'getItem')

const mockedSetItem = jest.spyOn(
    window.localStorage.__proto__,
    'setItem')


describe('LocalStorage Service', () => {
    describe('getArticlesLocalStorage Fn', () => {
        it('should call localStorage getItem to retrieve articles', () => {
            LocalStorageService.getArticlesLocalStorage("123456");
            expect(mockedGetItem).toHaveBeenCalled()
        })
    })

    describe('setArticlesLocalStorage Fn', () => {
        it('should call localStorage setItem to save articles', () => {
            LocalStorageService.setArticlesLocalStorage("123456", []);
            expect(mockedSetItem).toHaveBeenCalled()
        })
    })
})
