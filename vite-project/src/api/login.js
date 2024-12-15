import request from "@/utils/request.js";

export function getCodeImg() {
    // console.log('getCodeImg')
    return request({
        url: '/login/captchaImage',
        method: 'get'
    })
}

export function login(phonenumber, password, code, uuid) {
    const data = {
        phonenumber,
        password,
        code,
        uuid
    }
    return request({
        url: '/login/login',
        method: 'post',
        data: data
    })
}