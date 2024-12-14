import {defineStore} from "pinia";
import {login} from "@/api/login.js";
import {ElMessage} from "element-plus";

const useUserStore = defineStore(
    'user',
    {
        state: () => {
            return {
                token: ''
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
                            console.log(res)
                            this.token = res.data.body.token

                        }).catch(err => {
                            reject(err)
                        })
                })

            }
        }
    }
)

export default useUserStore