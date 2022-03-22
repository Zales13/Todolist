import JwtService from '../jwt/jwt.service';

// closure auth
const AuthenticateService = (function () {

    return {
        login(data: any): Promise<Function> {
            return new Promise((resolve) => {

                console.warn("Take a data and submit for api server", data);

                // wait 300ms to setToken and resolve data response 
                setTimeout(() => {
                    JwtService.setToken("MY_TOKEN");
                    resolve();
                }, 300)
            })
        },
        logout(): void {
        }
    }
})();


export default AuthenticateService;