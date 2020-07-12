const { exec } = require('../db/mysql')

const getList = (author, keyword) => {
    let sql = `select * from blogs where 1=1`
    if(author){
        sql += `and author='${author}'`
    }
    if(keyword){
        sql += `and title like '%${keyword}%'`
    }
    sql += `order by createtime desc;`

    //返回promise
    return exec(sql)
}

const getDetail = (id) => {
    return{
        id:1,
            title: "标题A",
            content: "内容A",
            createTime: 1546610491112,
            author: "zhangsan"
    }
}

const newBlog = (blogData = {}) => {
    //blogData是一个博客对象，包含title content属性
    return{
        id: 3 //新建博客，插入到数据表的id
    }
}

const updateBlog = (id, blogData = {}) => {
    //blogData是一个博客对象，包含title content属性
    //id是更新博客的id
    return true
}

const delBlog = (id) => {
    //id是删除博客的id
    return true
}
module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}