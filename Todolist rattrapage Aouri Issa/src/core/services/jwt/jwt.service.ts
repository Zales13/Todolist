import StorageService from '../storage/storage.service';

const JwtService = (function () {

    return {
        setToken(token: string): void {
            StorageService.setItem("access_token", token);
        },

        getToken(): Promise<any> {
            return StorageService.getItem("access_token");
        },

        removeToken(): void {
            StorageService.removeItem("access_token");
        }
    }
})()


export default JwtService;