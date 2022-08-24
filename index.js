const express = require('express')
const app = express()
const mysql2 = require('mysql2')

const port = 9000

function getDBConfig() {
  return {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'long_test',
    connectionLimit: 1
  }
}

app.get('/', async(req, res) => {
  const config = getDBConfig()
  const promisePool = mysql2.createPool(config).promise()

  // 用try catch
  // let users = await promisePool.query('select * from student')
  // 带参数
  // let name = 'lisi'
  // let users = await promisePool.query(`
  // select * from student where name="${name}"
  // `)

  // 查询2
  // let name = 'lisi'
  // let users = await promisePool.query(`
  // select * from student where name=?
  // `, [name])

  // insert 1
  // const users = await promisePool.query(`
  // INSERT INTO student (name, score, gender, class_id) VALUES (?,?,?,?)
  // `, ['xiaohong', 60, 1,2])

  // update
  const users = await promisePool.query(`
  INSERT INTO student (name, score, gender, class_id) VALUES (?,?,?,?)
  `, ['xiaohong', 60, 1,2])

  console.log(users[0])
  res.send({
    ok: 1,
    data: users[0]
  })
})

app.listen(3000, () => {
  console.log('\n\n\n\n监听 http://localhost:3000')
})