import 'reflect-metadata'
import { createConnection, Like, MoreThanOrEqual } from 'typeorm'
import { User } from '../src/entity/User'
import { Comment } from './entity/Comment'

// testaa 数据库
createConnection({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'testaa',
  entities: [
    __dirname+ '/entity/*.ts',
  ],
  synchronize: true // 开发true， 会覆盖
}).then(async (connection) => {
  const userRepository = connection.getRepository(User)
  const commentRepository = connection.getRepository(Comment)

  // // 插入
  // const user1 = new User()
  // user1.nick = '柯南'
  // user1.salary = 50000
  // await userRepository.save(user1)

  // query all
  // const res = await userRepository.find()
  // const config = {
  //   nick: '柯南'
  // }
  // const res = await userRepository.find({
  //   where: [
  //     {salary: MoreThanOrEqual(5000)},
  //     {nick: '柯南'}
  //   ]
  // })
  // 模糊查询
  // const res = await userRepository.find({
  //   where: [
  //     {nick: Like('%小%')}
  //   ]
  // })

  // 分页
  // const res = await userRepository.find({
  //   where: [
  //     {nick: Like('%小%')}
  //   ],
  //   order: {
  //     salary: 'DESC'
  //   },
  //   skip: 0,
  //   take: 2
  // })


  // const res = await userRepository.findOne({where: {id: 3}})
  // const res = await userRepository.findOne({where: {nick: '小明'}})

  // 修改: 先找到再修改 
  // const res = await userRepository.findOne({where: {id: 3}})
  // res.salary = 999999
  
  // await userRepository.save(res)
   
  // 删除
  // await userRepository.remove(res)

  // const res = await commentRepository.find()
  // const res = await commentRepository.find({
  //   relations: ['user']
  // })

  // user 发表的所有评论 // 有bug
  // const res = await commentRepository.find({
  //   relations: ['comments']
  // })


  console.log('res: ', res)

  connection.close()
})