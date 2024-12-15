import {defineStore} from "pinia";
import {login} from "@/api/login.js";
import {getToken, setToken} from "@/utils/auth.js";

const useUserStore = defineStore(
    'user',
    {
        state: () => {
            return {
                token: getToken()
            }
        },
        actions: {
            login(userInfo) {
                const phonenumber = userInfo.phonenumber;
                const password = userInfo.password;
                const code = userInfo.code;
                const uuid = userInfo.uuid;

                return new Promise((resolve, reject) => {
                    login(phonenumber, password, code, uuid)
                        .then(res => {
                            resolve(res)
                            setToken(res.body.token)
                            this.token = res.body.token
                        }).catch(err => {
                        reject(err)
                    })
                })

            }
        }
    }
)

export default useUserStore