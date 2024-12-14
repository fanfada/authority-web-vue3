import {defineStore} from "pinia";

const useUserStore = defineStore(
    'user',
    {
        state: () => {
            return {
                token: 'aaaaaaaaaaaaaaa'
            }
        },
        actions: {}
    }
)

export default useUserStore