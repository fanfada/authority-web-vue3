import request from "@/utils/request.js";

export function getCodeImg() {
    console.log('getCodeImg')
    return request({
        url: '/login/captchaImage',
        method: 'get'
    })
}