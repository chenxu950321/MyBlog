const env = process.env.NODE_ENV //环境参数

//配置
let MYSQL_CONF

if(env === 'dev'){
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: 'woshiyang',
        port:'3306',
        database: 'myblog'
    }
}

if(evn === 'prouction'){
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: 'woshiyang',
        port:'3306',
        database: 'myblog'
    }
}

module.exports = {
    MYSQL_CONF
}