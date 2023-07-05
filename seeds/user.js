const { User } = require('../models');

const userData =
[
  {
    "username": "johnander",
    "email": "johnanderson@hotmail.com",
    "password": "bottle123"
  },
  {
    "username": "billyfun",
    "email": "billyfunder@gmail.com",
    "password": "landscaping0294"
  },
  {
    "username": "bobert",
    "email": "bobert@yahoo.com",
    "password": "VelChro302"
  }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;