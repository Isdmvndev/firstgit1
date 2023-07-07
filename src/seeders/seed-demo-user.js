'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email:'admin@gmail.com',
      password:'123456',
      address:'Dong Anh- Ha Noi',
      gender:1,
      roleId:1,
      firstName: 'HoidanIT',
      lastName: 'BIN',
      email: 'example@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};