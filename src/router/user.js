const {login} = require('../controller/user')
const {set} = require('../db/redis')

const{SuccessModel, ErrorModel} = require('../model/resModel')

const handleUserRouter = (req, res) => {
    const method = req.method

    
    console.log(`method: ${method}, path: ${req.path}`)
    
    //登陆
    if(method === 'POST' && req.path === '/api/user/login'){
        //const{username, password} = req.query
        const { username, password } = req.body
        const result = login(username, password)
        
        return result.then(data => {
            
            if(data.username){
                //设置session
                req.session.username = data.username
                req.session.realname = data.realname
                //同步到redis中
                set(req.sessionId, req.session)
        

                return new SuccessModel()   
            }
            return new ErrorModel('登陆失败')
        })
    }

    //登录验证的测试
    // if (method === 'GET' && req.path === '/api/user/login-test') {
    //     if (req.session.username) {
    //         return Promise.resolve(
    //             new SuccessModel({
    //                 session: req.session
    //             })
    //         )
    //     }
    //     return Promise.resolve(
    //         new ErrorModel('尚未登录')
    //     )
    // }



}

module.exports = handleUserRouter