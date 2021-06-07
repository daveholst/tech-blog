const { User } = require('../models')

const userdata = [
  {
    name: 'John Smith',
    username: 'test1',
    email: 'test1@tester.com',
    password: 'testtest'
  },
  {
    name: 'Tessa Tester',
    username: 'test2',
    email: 'test2@tester.com',
    password: 'testtest'
  },

]

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;