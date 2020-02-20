// 用户功能
const fs = require('fs')
const path = require('path')
const FILE_PATH = path.join(__dirname, "../json/users.json")
// 搭建功能
const get = () => JSON.parse(fs.readFileSync(FILE_PATH, 'utf-8'))
const add = (name, pwd, avatars) => {
    let arr = get()
    let id = arr.length ? arr[arr.length - 1].id + 1 : 1
    arr.push({
        id,
        name,
        pwd,
        avatars
    })
    fs.writeFileSync(FILE_PATH, JSON.stringify(arr))
    return arr
}
// 导出模块
module.exports = {
    get,
    add
}